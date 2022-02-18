import React from 'react'
import RedditIcon from '@mui/icons-material/Reddit';

const StickyHeader: React.FC = () => {
  return (
    <div className='stickyHeader'>
        <div className="stickyHeaderWrapper">
            <div className="stickyHeaderLeft">
                <span className="headerIcon"><RedditIcon /></span>
                <span className="headerText">RedditClient</span>
            </div>
            <div className="stickyHeaderRight">
                <span className="author">designed by</span>
                <a href="www.github.com/ajhausdorf" className="profilePictureLink">
                    <img src="https://avatars.githubusercontent.com/u/5254136?s=40&v=4" alt="Andrew Hausdorf profile picture" className="profilePicture"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default StickyHeader