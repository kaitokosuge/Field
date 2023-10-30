import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="title">Field</div>
        <div className='sidebar--flex'>
            <div className='sidebarLeft'>
                <p>left</p>
                <ul>
                    <li>channel01</li>
                    <li>channel02</li>
                    <li>channel03</li>
                </ul>
            </div>
            <div className='sidebarRight'>
                <p>right</p>
                <ul>
                    <li>human01</li>
                    <li>human02</li>
                    <li>human03</li>
                    <li>human04</li>
                    <li>human05</li>
                </ul>
            </div>
        </div>
        <div className='sidebarFooter'>
            kaitokosuge
        </div>
    </div>
  )
}

export default Sidebar
