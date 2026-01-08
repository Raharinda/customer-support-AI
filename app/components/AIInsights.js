'use client'

import { AISummary } from './AISummary'
import { AISuggestedReply } from './AISuggestedReply'

export function AIInsights({ message }) {
    const ai = message.ai

    if (!ai) {
        return (
            <p className='text-sm text-gray-500'>AI analysis not available</p>
        )
    }

    return (
        <div className='space-y-6'>
            {/* Summary */}
            <div>
                <h3 className='text-sm font-semibold text-gray-900 mb-2'>
                    AI Summary
                </h3>
                <AISummary summary={ai.summary} />
            </div>

            {/* Suggested Reply */}
            <div>
                <h3 className='text-sm font-semibold text-gray-900 mb-2'>
                    Suggested Reply
                </h3>
                <AISuggestedReply reply={ai.suggestedReply} />
            </div>
        </div>
    )
}
