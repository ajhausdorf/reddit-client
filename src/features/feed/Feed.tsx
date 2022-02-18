import React from 'react'
import FeedItem from '../feedItem/FeedItem';

const Feed: React.FC = () => {
  return (
    <div className="feed">
        <div className="feedWrapper">
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
        </div>
    </div>
  )
}

export default Feed