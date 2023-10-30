import React from 'react'

function ChatMessage() {
  return (
    <div className='chatMessage--flex'>
        <p className='user--icon'>😍</p>
        <div>
            <p className='user--name'>user name <span>2023-10-30</span></p>
            <p className='user--message'>message</p>
        </div>
    </div>
  )
}

export default ChatMessage
