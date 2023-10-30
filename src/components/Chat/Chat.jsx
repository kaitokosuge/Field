import React from 'react'
import ChatMessage from './ChatMessage'

function Chat() {
  return (
    <div className='chat'>
      <div className='chatHeader'>
        header
        <input type='text' placeholder='text' className='chatHeaderInput'/>
      </div>
      <div className='chatContent'>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      <div className='chatFooter'>
        footer
        <form>
            <input type="text" placeholder="chat" className='chatFooterInput' />
            <button type="submit" className='chatFooterBtn'>send</button>
        </form>
      </div>
    </div>
  )
}

export default Chat
