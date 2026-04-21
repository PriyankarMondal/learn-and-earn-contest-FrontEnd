import { useState, useEffect } from 'react'
import { X, Bell, CheckCircle2, XCircle, Clock, Users } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import {
  fetchMyNotifications,
  acceptTeamInvitation,
  rejectTeamInvitation,
  markNotificationAsRead
} from '../../../api/student.api'
import { toast } from 'react-toastify'

export function NotificationPanel({ isOpen, onClose, onRefresh }) {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(false)
  const [actingOn, setActingOn] = useState(null)

  useEffect(() => {
    if (isOpen) {
      loadNotifications()
    }
  }, [isOpen])

  const loadNotifications = async () => {
    setLoading(true)
    try {
      const data = await fetchMyNotifications()
      if (!Array.isArray(data)) {
        throw new Error('Invalid response: Expected array of notifications')
      }
      setNotifications(data)
    } catch (error) {
      toast.error(error.message || 'Failed to load notifications')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleAccept = async (notificationId) => {
    setActingOn(notificationId)
    try {
      await acceptTeamInvitation(notificationId)
      toast.success('Invitation accepted! Waiting for other team members...')
      await markNotificationAsRead(notificationId)
      loadNotifications()
      onRefresh?.()
    } catch (error) {
      toast.error(error.message || 'Failed to accept invitation')
    } finally {
      setActingOn(null)
    }
  }

  const handleReject = async (notificationId) => {
    setActingOn(notificationId)
    try {
      await rejectTeamInvitation(notificationId)
      toast.error('Invitation rejected. Team leader has been notified.')
      await markNotificationAsRead(notificationId)
      loadNotifications()
      onRefresh?.()
    } catch (error) {
      toast.error(error.message || 'Failed to reject invitation')
    } finally {
      setActingOn(null)
    }
  }

  const handleMarkAsRead = async (notificationId) => {
    try {
      await markNotificationAsRead(notificationId)
      loadNotifications()
    } catch (error) {
      console.error('Failed to mark as read', error)
    }
  }

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-100 text-amber-700'
      case 'accepted':
        return 'bg-green-100 text-green-700'
      case 'rejected':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />
      case 'accepted':
        return <CheckCircle2 className="w-4 h-4" />
      case 'rejected':
        return <XCircle className="w-4 h-4" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  const pendingNotifications = notifications.filter(n => n.status === 'pending')
  const pastNotifications = notifications.filter(n => n.status !== 'pending')

  return (
    <div
      className={`fixed inset-0 z-[130] transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#82C600]/10 text-[#82C600]">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
              <p className="text-xs text-gray-500">Team invitation requests</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {loading ? (
            <div className="flex items-center justify-center h-40">
              <div className="text-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#82C600] mx-auto mb-3"></div>
                <p className="text-sm text-gray-500">Loading...</p>
              </div>
            </div>
          ) : notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 px-6 text-center">
              <Bell className="w-12 h-12 text-gray-200 mb-3" />
              <p className="text-sm font-semibold text-gray-600">No notifications yet</p>
              <p className="text-xs text-gray-400 mt-1">
                You'll receive notifications when people invite you to teams
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {/* Pending Notifications */}
              {pendingNotifications.length > 0 && (
                <>
                  <div className="px-6 py-4 bg-[#82C600]/5 border-b border-[#82C600]/20">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#5c8020]">
                      Pending Actions ({pendingNotifications.length})
                    </p>
                  </div>
                  {pendingNotifications.map(notification => (
                    <div
                      key={notification._id}
                      className="p-5 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      onClick={() => handleMarkAsRead(notification._id)}
                    >
                      {/* Sender Info */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-[#82C600]/10 flex items-center justify-center">
                            <Users className="w-5 h-5 text-[#82C600]" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 text-sm">
                            Team Invitation from {notification.sender?.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {notification.contest?.title}
                          </p>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <p className="text-xs text-gray-700 leading-relaxed">
                          {notification.message}
                        </p>
                      </div>

                      {/* Team Details */}
                      <div className="flex items-center gap-2 mb-4 p-2 bg-amber-50 rounded-lg border border-amber-100">
                        <Users className="w-4 h-4 text-amber-600" />
                        <p className="text-xs font-semibold text-amber-700">
                          Team: <span className="text-amber-900">{notification.teamName}</span>
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleReject(notification._id)
                          }}
                          disabled={actingOn === notification._id}
                          className="flex-1 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-100 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          <XCircle className="w-4 h-4" />
                          {actingOn === notification._id ? 'Processing...' : 'Reject'}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAccept(notification._id)
                          }}
                          disabled={actingOn === notification._id}
                          className="flex-1 px-4 py-2.5 bg-[#82C600] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#6fa500] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          {actingOn === notification._id ? 'Processing...' : 'Accept'}
                        </button>
                      </div>

                      {/* Time */}
                      <p className="text-xs text-gray-400 mt-3">
                        {new Date(notification.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </>
              )}

              {/* Past Notifications */}
              {pastNotifications.length > 0 && (
                <>
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-600">
                      History
                    </p>
                  </div>
                  {pastNotifications.map(notification => (
                    <div
                      key={notification._id}
                      className="p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 opacity-75"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center ${getStatusBadgeColor(
                              notification.status
                            )}`}
                          >
                            {getStatusIcon(notification.status)}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-xs">
                            {notification.teamName}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Invitation {notification.status}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(notification.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <span
                          className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${getStatusBadgeColor(
                            notification.status
                          )}`}
                        >
                          {notification.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {!loading && notifications.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-4 bg-slate-50/50">
            <Button
              variant="outline"
              className="w-full py-3 text-xs font-bold uppercase tracking-widest rounded-xl"
              onClick={loadNotifications}
            >
              Refresh
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
