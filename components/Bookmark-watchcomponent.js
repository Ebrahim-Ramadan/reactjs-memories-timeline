import { bookmarkPLUS, bookmarkMINUS } from '../store/actions/Bookmarks-action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastify = (item, msg) => {
  toast.success(`${item} ${msg}`, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1500,
    theme: 'dark'
  });
};

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Bookmarkwatch = ({ id, item }) => {
  const dispatch = useDispatch();
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);



  const watchBOOKMARKcheck = () => {
    setIsBookmarkChecked(!isBookmarkChecked);

    if (!isBookmarkChecked) {
      dispatch(bookmarkPLUS(id));
      toastify(item, 'Added to your Bookmarks');
    } else {
      dispatch(bookmarkMINUS(id));
      toastify(item, 'Bookmark Removed');
    }

    console.log(`bookmarks of ${id}, ${item} {}` );
  };

  return (
        <Checkbox
      {...label}
      icon={<BookmarkBorderIcon />}
      checkedIcon={<BookmarkIcon />}
      checked={isBookmarkChecked}
      onChange={watchBOOKMARKcheck}
    />

  );
};

export default Bookmarkwatch;
