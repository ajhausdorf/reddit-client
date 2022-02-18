import React from 'react'
import DisplayFeedItem from '../displayFeedItem/DisplayFeedItem'
import Upvotes from '../upvotes/Upvotes'

const FeedItem: React.FC = () => {
  return (
    <div className="feedItemWrapper">
        <Upvotes />
        <DisplayFeedItem />
    </div>
  )
}

export default FeedItem