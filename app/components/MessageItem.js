'use client'

import { formatDistanceToNow } from 'date-fns'
import { PriorityBadge } from './PriorityBadge'
import { SentimentBadge } from './SentimentBadge'
import { CategoryBadge } from './CategoryBadge'

export function MessageItem({ message, onClick }) {
    return (
        <div
            onClick={onClick}
            className='cursor-pointer p-4 border-b hover:bg-gray-50'
        >
            {/* Header */}
            <div className='flex justify-between mb-1'>
                <span className='font-medium text-gray-900'>
                    {message.customerName}
                </span>
                <span className='text-xs text-gray-500'>
                    {formatDistanceToNow(message.timestamp, {
                        addSuffix: true,
                    })}
                </span>
            </div>

            {/* Preview */}
            <p className='text-sm text-gray-600 line-clamp-2 mb-2'>
                {message.preview}
            </p>

            {/* Badges */}
            <div className='flex gap-2'>
                <PriorityBadge priority={message.priority} />
                <SentimentBadge sentiment={message.sentiment} />
                <CategoryBadge category={message.category} />
            </div>
        </div>
    )
}
