'use client'

export function CategoryBadge({ category }) {
    const config = {
        billing: 'bg-blue-100 text-blue-700',
        bug: 'bg-purple-100 text-purple-700',
        feature: 'bg-indigo-100 text-indigo-700',
    }

    if (!category) return null

    return (
        <span
            className={`px-2 py-0.5 rounded-full text-xs ${config[category]}`}
        >
            {category}
        </span>
    )
}
