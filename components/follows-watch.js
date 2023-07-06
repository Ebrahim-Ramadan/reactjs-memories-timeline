import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { FollowON, FollowOFF } from '../store/actions/Follow-action';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Followwatch = ({ id }) => {
  const dispatch = useDispatch();
  const [isFollowed, setIsFollowed] = useState(false);



  const followState = useSelector((state) => state.follow);

  const watchLikeCheck = () => {
    setIsFollowed(!isFollowed);
    if (!isFollowed) {
      dispatch(FollowON(1));
      toast.success("Followed", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: "dark" 
      });
    } else {
      dispatch(FollowOFF(1));
      toast.info("Unfollowed", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: "dark" 
      });
    }
    console.log(`follows of ${id}`, followState);

  };

  return (
    <>
    <Button
      variant="info"
      className={isFollowed ? 'unfollow-btn' : 'follow-btn'}
        checked={isFollowed}
      onClick={watchLikeCheck}
    >
      {isFollowed ? 'Unfollow' : 'Follow'}
    </Button>
    </>
  );
};
