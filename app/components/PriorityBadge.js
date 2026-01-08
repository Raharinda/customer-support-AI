'use client'

export function PriorityBadge({ priority }) {
    const config = {
        high: 'bg-red-100 text-red-700',
        medium: 'bg-yellow-100 text-yellow-700',
        low: 'bg-green-100 text-green-700',
    }

    if (!priority) return null

    return (
        <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${config[priority]}`}
        >
            {priority.toUpperCase()}
        </span>
    )
}
