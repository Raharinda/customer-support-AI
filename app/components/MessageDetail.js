import { SentimentBadge } from './SentimentBadge'
import { PriorityBadge } from './PriorityBadge'
import { CategoryBadge } from './CategoryBadge'
import { AIInsights } from './AIInsights'
import { formatDistanceToNow } from 'date-fns'
import { Mail, Clock, MessageCircle, X } from 'lucide-react'

export function MessageDetail({ message, onClose }) {
    const statusConfig = {
        new: { label: 'New', color: 'blue' },
        'in-progress': { label: 'In Progress', color: 'yellow' },
        resolved: { label: 'Resolved', color: 'green' },
    }

    const status = statusConfig[message.status]

    return (
        <div className='h-full flex flex-col bg-white'>
            {/* Header */}
            <div className='border-b border-gray-200 p-6'>
                <div className='flex items-start justify-between mb-4'>
                    <div className='flex-1'>
                        <h2 className='text-xl text-gray-900 mb-2'>
                            {message.subject}
                        </h2>

                        <div className='flex items-center gap-3 text-sm text-gray-600'>
                            <div className='flex items-center gap-1.5'>
                                <Mail className='w-4 h-4' />
                                <span>{message.customerEmail}</span>
                            </div>

                            <span>•</span>

                            <div className='flex items-center gap-1.5'>
                                <Clock className='w-4 h-4' />
                                <span>
                                    {formatDistanceToNow(message.timestamp, {
                                        addSuffix: true,
                                    })}
                                </span>
                            </div>

                            <span>•</span>

                            <div className='flex items-center gap-1.5'>
                                <MessageCircle className='w-4 h-4' />
                                <span>
                                    {message.conversationLength} message
                                    {message.conversationLength > 1 ? 's' : ''}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
                        title='Close'
                    >
                        <X className='w-5 h-5 text-gray-500' />
                    </button>
                </div>

                {/* Badges */}
                <div className='flex flex-wrap gap-2'>
                    <PriorityBadge priority={message.priority} />
                    <SentimentBadge sentiment={message.sentiment} />
                    <CategoryBadge category={message.category} />

                    <span
                        className={`px-3 py-1 rounded-full text-xs bg-${status.color}-100 text-${status.color}-700 border border-${status.color}-200`}
                    >
                        {status.label}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className='flex-1 overflow-y-auto p-6'>
                <div className='max-w-4xl mx-auto space-y-8'>
                    {/* Customer Message */}
                    <div>
                        <div className='flex items-center gap-3 mb-3'>
                            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white'>
                                {message.customerName.charAt(0)}
                            </div>

                            <div>
                                <p className='text-sm text-gray-900'>
                                    {message.customerName}
                                </p>
                                <p className='text-xs text-gray-500'>
                                    {message.customerEmail}
                                </p>
                            </div>
                        </div>

                        <div className='bg-gray-50 rounded-lg p-4 border border-gray-200'>
                            <p className='text-sm text-gray-700 leading-relaxed whitespace-pre-wrap'>
                                {message.content}
                            </p>
                        </div>
                    </div>

                    {/* AI Insights */}
                    <div>
                        <h2 className='text-lg text-gray-900 mb-4'>
                            AI Analysis & Suggestions
                        </h2>
                        <AIInsights message={message} />
                    </div>
                </div>
            </div>

            {/* Action Footer */}
            <div className='border-t border-gray-200 p-4 bg-gray-50'>
                <div className='flex gap-3'>
                    <button className='flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
                        Reply to Customer
                    </button>

                    <button className='px-4 py-2.5 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors'>
                        Mark as Resolved
                    </button>
                </div>
            </div>
        </div>
    )
}
