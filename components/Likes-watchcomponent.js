import { useSelector, useDispatch } from 'react-redux';
import { useState , useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';

import { likesPLUS, likesMINUS } from '../store/actions/Likes-action';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Likeswatch = ({ id }) => {
  const dispatch = useDispatch();
  const likesState = useSelector((state) => state.likes);
  const [isLIKEChecked, setIsLIKEChecked] = useState(false);
// const [zeroLikes, setzeroLikes] = useState(false);
  useEffect(() => {
    setIsLIKEChecked(likesState[id] !== undefined && likesState[id]);
  }, [likesState, id]);

  const watchLIKecheck = () => {
    setIsLIKEChecked(!isLIKEChecked);

    if (!isLIKEChecked) {
      dispatch(likesPLUS(id));
    } else {
      dispatch(likesMINUS(id));
    }
    console.log(`likes of ${id}`, likesState)
  };

  const likesCount = likesState[id] || 0;
  // if (!likesCount ===10) {
  //   setzeroLikes(true)
  // } // Access likes count for the specific item ID
  // avoiding this method to avoid too many react renders

  return (
    <>
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        checked={isLIKEChecked}
        onChange={watchLIKecheck}
      />
{likesCount > 0 && <span>{likesCount}</span>}
    </>
  );
};

export default Likeswatch;