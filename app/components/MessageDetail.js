'use client'

import { formatDistanceToNow } from 'date-fns'
import { PriorityBadge } from './PriorityBadge'
import { SentimentBadge } from './SentimentBadge'
import { CategoryBadge } from './CategoryBadge'
import { AIInsights } from './AIInsights'

export function MessageDetail({ message }) {
    if (!message) {
        return (
            <div className='h-full flex items-center justify-center text-gray-500'>
                Select a message to see details
            </div>
        )
    }

    return (
        <div className='h-full flex flex-col bg-white border-l'>
            {/* Header */}
            <div className='p-5 border-b'>
                <div className='flex justify-between mb-2'>
                    <h2 className='text-lg font-semibold text-gray-900'>
                        {message.customerName}
                    </h2>
                    <span className='text-xs text-gray-500'>
                        {formatDistanceToNow(message.timestamp, {
                            addSuffix: true,
                        })}
                    </span>
                </div>

                <p className='text-sm text-gray-600 mb-3'>{message.preview}</p>

                <div className='flex gap-2'>
                    <PriorityBadge priority={message.priority} />
                    <SentimentBadge sentiment={message.sentiment} />
                    <CategoryBadge category={message.category} />
                </div>
            </div>

            {/* Content */}
            <div className='flex-1 p-5 overflow-y-auto'>
                <h3 className='text-sm font-semibold text-gray-900 mb-2'>
                    Message
                </h3>
                <p className='text-sm text-gray-700 whitespace-pre-wrap'>
                    {message.content || message.preview}
                </p>

                {/* AI Section */}
                <div className='mt-8'>
                    <h3 className='text-sm font-semibold text-gray-900 mb-3'>
                        AI Analysis
                    </h3>
                    <AIInsights message={message} />
                </div>
            </div>

            {/* Footer */}
            <div className='p-4 border-t bg-gray-50 flex gap-3'>
                <button className='flex-1 bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700'>
                    Reply
                </button>
                <button className='text-sm py-2 px-4 rounded-lg border hover:bg-gray-100'>
                    Resolve
                </button>
            </div>
        </div>
    )
}
