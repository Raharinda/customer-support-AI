'use client'

export function AISummary({ summary }) {
    if (!summary || summary.length === 0) {
        return <p className='text-sm text-gray-500'>No AI summary available</p>
    }

    return (
        <ul className='list-disc list-inside space-y-1 text-sm text-gray-700'>
            {summary.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}
