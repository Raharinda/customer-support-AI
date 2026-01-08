'use client'

export function SentimentBadge({ sentiment }) {
    const config = {
        positive: 'bg-green-100 text-green-700',
        neutral: 'bg-gray-100 text-gray-700',
        negative: 'bg-red-100 text-red-700',
    }

    if (!sentiment) return null

    return (
        <span
            className={`px-2 py-0.5 rounded-full text-xs ${config[sentiment]}`}
        >
            {sentiment}
        </span>
    )
}
