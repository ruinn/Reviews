import React from 'react';

const ReviewCard = ({
  text,
  username,
  propertyResponse,
  age,
  created_at,
  rate
}) => {
  return (
    <div className="row my-2">
      <div className="col-md-3">
        <div><em>{username}</em></div>
        <p>age: {age}</p>
      </div>
      <div className="col-md-9">
        <div>Rate: {rate}</div>
        <div>Date: {created_at}</div>
        <div>{text}</div>
        <div>
          <em>{propertyResponse}</em>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
