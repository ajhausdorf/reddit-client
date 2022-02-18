import React from 'react'
import Feed from '../../features/feed/Feed'
import StickyHeader from '../../features/stickyHeader/StickyHeader'

const HomePage = () => {
  return (
    <div className="homePage">
        <StickyHeader />
        <Feed />
    </div>
  )
}

export default HomePage