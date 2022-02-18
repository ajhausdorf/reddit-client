import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Upvotes: React.FC = () => {
  return (
    <div className="upvotes">
        <ArrowUpwardIcon />
        <span className="upvoteCount">38k</span>
        <ArrowDownwardIcon />
    </div>
  )
}

export default Upvotes