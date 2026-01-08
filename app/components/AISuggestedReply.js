'use client'

export function AISuggestedReply({ reply }) {
    if (!reply) return null

    return (
        <textarea
            className='w-full min-h-[120px] border rounded-lg p-3 text-sm'
            defaultValue={reply}
        />
    )
}
