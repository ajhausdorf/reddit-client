import React, { useEffect } from 'react';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { loadFeedItems, selectFeedItems } from '../feedItem/feedItemsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const DisplayFeedItem: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadFeedItems())
  }, [dispatch]);

  const feedItems = useAppSelector(selectFeedItems);
  
  return (
    <div className="displayFeedItem">
        <div className="displayFeedItemWrapper">
            <div className="headingWrapper">
            <div className="feedItemTitle">Dog wins the day</div>
              <div className="timePosted">7 hours ago</div>
            </div>
            <img className="feedItemImage" src="https://media.istockphoto.com/photos/cute-dog-put-his-face-on-his-knees-to-the-man-and-smiling-from-the-picture-id1041987488?k=20&m=1041987488&s=612x612&w=0&h=vvR3huxpGzq6fTTQLQ1i-UFKlgwwayRiPeD9vyX0NcQ=" />
            <div className="feedItemDescription">
              <div className="feedItemDescriptionWrapper">
                At a local school on the first wednesday of the month a young dog saved a kid at recess and then ran off for belly rubs
              </div>
            </div>
            <div className="feedItemInfo">
                <div className="feedItemInfoWrapper">
                    <div className="postedBy">Posted by: ajhausdorf</div>
                    <div className="comments"><ModeCommentIcon /> 778</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DisplayFeedItem