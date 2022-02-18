import React from 'react';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const DisplayFeedItem: React.FC = () => {
  return (
    <div className="displayFeedItem">
        <div className="displayFeedItemWrapper">
            <div className="feedItemTitle">Dog wins the day</div>
            <img className="feedItemImage" src="https://media.istockphoto.com/photos/cute-dog-put-his-face-on-his-knees-to-the-man-and-smiling-from-the-picture-id1041987488?k=20&m=1041987488&s=612x612&w=0&h=vvR3huxpGzq6fTTQLQ1i-UFKlgwwayRiPeD9vyX0NcQ=" />
            <div className="feedItemInfo">
                <div className="feedItemInfoWrapper">
                    <div className="postedBy">Posted by: ajhausdorf</div>
                    <div className="timePosted">7 hours ago</div>
                    <div className="comments"><ModeCommentIcon /> 778</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DisplayFeedItem