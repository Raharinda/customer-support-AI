import { MessageItem } from './MessageItem'

export function MessageList({ messages, onSelect }) {
    return (
        <div className='border rounded-lg overflow-hidden'>
            {messages.map((msg) => (
                <MessageItem
                    key={msg.id}
                    message={msg}
                    onClick={() => onSelect(msg)}
                />
            ))}
        </div>
    )
}
