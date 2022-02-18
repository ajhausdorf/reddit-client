import React from 'react'
import Feed from '../../features/feed/Feed'
import StickyHeader from '../../features/stickyHeader/StickyHeader'

const HomePage: React.FC = () => {
  return (
    <div className="homePage">
        <StickyHeader />
        <Feed />
    </div>
  )
}

export default HomePage