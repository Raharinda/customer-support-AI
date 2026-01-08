'use client'

import { FiFilter } from 'react-icons/fi'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { messages } from './dummyObj/messages'
import { MessageList } from './components/MessageList'
import { MessageDetail } from './components/MessageDetail'

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedMessage, setSelectedMessage] = useState(null)
    return (
        <div>
            <div className='flex flex-col gap-4 p-5 shadow-sm justify-between'>
                <div className='flex items-center justify-between'>
                    <div>
                        <div className='text-xl font-bold'>
                            AI Support Assistance
                        </div>
                        <div className='text-gray-500'>
                            Intelligent customer message analysis
                        </div>
                    </div>

                    <button className='flex items-center gap-2 py-2 px-5 text-blue-500 bg-sky-100 ring ring-blue-500/50 rounded-2xl hover:ring-3 transition-all '>
                        <FiFilter size={22} />
                        <h1 className='font-bold'>Filters</h1>
                    </button>
                </div>
                <div className='relative w-full'>
                    <IoSearchOutline
                        size={20}
                        className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
                    />

                    <input
                        type='text'
                        placeholder='Search any messages or content...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='w-full rounded-lg border h-10 box-border py-3 pl-12 pr-4 text-sm ring-gray-400 focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-400'
                    />
                </div>
            </div>

            <div className='flex h-[calc(100vh-120px)]'>
                <div className='w-1/3 border-r'>
                    <MessageList
                        messages={messages}
                        onSelect={setSelectedMessage}
                    />
                </div>

                <div className='flex-1'>
                    <MessageDetail message={selectedMessage} />
                </div>
            </div>
        </div>
    )
}
