import React, {useEffect, useState} from 'react';
import { faFaceKiss, faArrowLeft,faFaceRollingEyes, faEllipsisVertical, faFaceSurprise , faSadCry, faHandsAslInterpreting, faBan, faVolumeXmark, faCode, faRetweet, faFlag,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InImage01 from '../assets/InImages/01.jpg';
import InImage02 from '../assets/InImages/02.jpg';
import InImage03 from '../assets/InImages/03.jpg';
import InImage04 from '../assets/InImages/04.jpg';
import InImage05 from '../assets/InImages/05.jpg';
import InImage06 from '../assets/InImages/06.jpg';

import avatar01 from '../assets/InImages/avatar01.jpg';
import avatar02 from '../assets/InImages/avatar02.png';
import avatar03 from '../assets/InImages/avatar03.jpg';
import avatar04 from '../assets/InImages/avatar04.jpg';

import dealingstate from '../assets/InImages/dealingstate.png'

import './InImage.css';
import { useSelector } from 'react-redux';
import { Remembers } from './remembers';
import { useParams, useNavigate } from 'react-router-dom';
import { Followwatch } from './follows-watch';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import { deepOrange } from '@mui/material/colors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { theme } from 'flowbite-react';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
//defnie the toast template func

const myPromise = new Promise((resolve) =>
    fetch("https://jsonplaceholder.typicode.com/post")
      .then((response) => response.json())
      .then((json) => setTimeout(() => resolve(json), 3000))
);
  
const username = 'sharmo';
const howandwhere = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'

function DropdownItem(props) {
  const handleClick = () => {
    props.onSelect && props.onSelect(props.icon);
  };
  return(
    <li className = 'dropdownItem post'  onClick={handleClick}>
      <FontAwesomeIcon icon={props.icon} />
      <span style={{paddingLeft:'10px'}}>
      {props.text} 
        
</span>
    </li>
  );
}


export const InImage = () => {
  const navigate = useNavigate();
  const back_nav = () => {
    navigate('/')
  }
  const followState = useSelector((state) => state.follow);
  const { postID } = useParams();
    const fullscreenRef = React.useRef(null);
    const InImages = [
        {id:1, img:InImage01},
        {id:2, img:InImage02},
        {id:4, img:InImage04},
        {id:5, img:InImage05},
      { id: 6, img: InImage06 },
      {id:3, img:InImage03},
        
  ]
  
  const [isLIKEChecked, setIsLIKEChecked] = useState(false);
  const watchLIKecheck = () => {
    setIsLIKEChecked(!isLIKEChecked);
  }
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);


  const watchBOOKMARKcheck = () => {
    setIsBookmarkChecked(!isBookmarkChecked);
  }
    const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [postoptions, setpostoptions] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

    const handleImageClick = (index) => {
        console.log({postID})
        if (selectedImageIndex === index) {
          // If the clicked image is already selected, toggle it off
          setSelectedImageIndex(-1);
          setIndex(-1);
          setOpen(false);
        } else {
          // If a different image is clicked, select it
          setSelectedImageIndex(index);
          setIndex(index);
          setOpen(true);
          const imageElement = document.getElementById(`image-${index}`);
          if (imageElement) {
            imageElement.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }
        }
    }
    
  const post_options = () => {
    setpostoptions(true)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setpostoptions(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);



  const [post_selectedoption, setpost_selectedoption] = useState(null);
  const handle_postoptions = (option) => {
    setpost_selectedoption(option);
    console.log(option);
    setpostoptions(false);
    const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 2000));
  
    let pendingMessage = '';
    let successMessage = '';
  
    switch (option) {
      case '</>':
        pendingMessage = `${option} pending`;
        successMessage = `${option} sent to your mail inbox`;
        break;
      case '🚩':
        pendingMessage = `${option} pending`;
        successMessage = `${option} made`;
        break;
      case 'tweeting...':
        pendingMessage = `${option}`;
        successMessage = ` tweeted`;
        break;
      default:
        pendingMessage = `${option} pending`;
        successMessage = `${option} sent`;
        break;
    }
  
    toast.promise(resolveAfter3Sec, {
      pending: pendingMessage,
      success: successMessage,
    }, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000,
      theme: 'dark',
    });
  };
  



  return (
          <div className='page-content'>
          <div className='bigrow'>
              <div className='row'>
              <div className='imagecolumn' >
              
              <div className='inimagesreal'>
              {InImages.map((image, index) => (
                  <>
                      <div className={`inimage ${selectedImageIndex === index ? 'selected' : ''}`}
                          key={index}
                          id={`image-${index}`}
                          onClick={() => handleImageClick(index)}

                          >
                          <a href={index.img}>
                          <img src={image.img} alt='inimage'
                      />

                     </a>


                  </div>
 
                      {index < InImages.length - 1 && <span></span>}

                      
                  </>       
          ))}
          </div>
</div>
          <div className='column' >
              <div className='headercol'>
                          <div className='headerlayer'>
                <FontAwesomeIcon
              onClick={back_nav}
                  icon={faArrowLeft} fontSize='x-large' style={{ cursor: 'pointer' }} />
                <img alt='dealingstate' src={dealingstate} />Good memory
                          </div>
              <FontAwesomeIcon icon={faEllipsisVertical} style={{ textAlign: 'center', fontSize: '25px', cursor: 'pointer' , padding:'7px'}}
              onClick={post_options}
              />



                </div>
                      <hr style={{width: '80%', 
               marginLeft:'20px'       
              ,margin: '10px'
            }} />
                      <div className='profileLayer'>
                          <div className='profileinfo'  style={{ fontSize: '20px' }}>
                          <Avatar  sx={{ bgcolor: deepOrange[800] }}>EB</Avatar>
                <span style={{ marginRight: '10px' }} />
                              
                              <label className='usernamefetched'>Ebrahim Ramadan</label>  
                              <span style={{ position: 'absolute',
                        
    left: '50px',
    fontSize: '14px',
    top: '26px'}}>
                                  {followState} followers 
                             </span>
                          </div>
                          <Followwatch key={username} id={username} />

            </div>
            

            {postoptions && (
                <div className='dropmenu-post'>
                <DropdownItem
                  onSelect={()=>{handle_postoptions('😳')}}
              icon={faFaceSurprise}
              text='this can NOT be real fuckoff'
            />
                <DropdownItem
                onSelect={()=>{handle_postoptions('🥺')}}

                  
              icon={faFaceRollingEyes} 
              text='are you ok? fr'
            />
                <DropdownItem
                  onSelect={() => { handle_postoptions ('😙')}}
                  
              icon={faFaceKiss}
              text='that jus cheered me up<3'
            />
                <DropdownItem
                  onSelect={() => { handle_postoptions ('😭')}}
                  
              icon={faSadCry}
              text='aching literally sobbing'
            />
                <DropdownItem
                  onSelect={() => { handle_postoptions ('🫡')}}
                  
              icon={faHandsAslInterpreting}
              text='what youre saying is 🫡'
            />
                <DropdownItem
                  onSelect={() => { handle_postoptions ('tweeting...')}}
                  
              icon={faRetweet}
              text='Tweet this memory'
            />
                <DropdownItem
                  onSelect={() => { handle_postoptions ('🚫')}}
                  
              icon={faBan}
              text='Block @sharmo'
            />
                <DropdownItem
                  onSelect={() => { handle_postoptions ('😶')}}
                  
              icon={faVolumeXmark}
              text='Mute @sharmo'
            />
                <DropdownItem
                  onSelect={() => { handle_postoptions ('🚩')}}
                  
              icon={faFlag}
              text='Report @sharmo'
            />
                <DropdownItem
                  onSelect={() => { handle_postoptions ('</>')}}
                  
              icon={faCode}
              text='Embed memory'
            />
                </div>
)}
                      <div className='howandwhere'>
                          <p>
                              My How&Where
                          </p>
                          {howandwhere}
                          
                          <iframe title='elba5t' style={{borderRadius:'8px', marginTop:'12px'}} src="https://open.spotify.com/embed/track/5kdlxZ5skOYY3VK8RlfEIZ?utm_source=generator" width="100%" height="800" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                          
                            </div>
                  </div>
          <div class="column commentscolumn">
            <div>
              <div style={{padding:'10px 0px 0px 10px'}}>

                <AvatarGroup total={isLIKEChecked ? 34 : 33} sx={{ width: '150px' , cursor:'pointer', '& .MuiAvatar-root': {
      width: '35px', // Set the desired width here
      height: '35px', // Set the desired height here
    },
    '& .MuiAvatar-root .MuiAvatar-groupLabelText': {
      fontSize: '1px', // Set the desired font size here
    },}}>
                  <Checkbox
                    // value={}
        icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    checked={isLIKEChecked}
                    onChange={watchLIKecheck}
                />
                  <Avatar alt="Remy Sharp" src={avatar02} />
      <Avatar alt="Travis Howard" src={avatar01} />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg"/>
                </AvatarGroup >



                <AvatarGroup total={!isBookmarkChecked ? 17 : 18} sx={{ width: '150px' , cursor:'pointer', '& .MuiAvatar-root': {
      width: '35px', // Set the desired width here
      height: '35px', // Set the desired height here
    },
    '& .MuiAvatar-root .MuiAvatar-groupLabelText': {
      fontSize: '1px', // Set the desired font size here
    },}}>
        <Checkbox
      icon={<BookmarkBorderIcon />}
      checkedIcon={<BookmarkIcon />}
      checked={isBookmarkChecked}
      onChange={watchBOOKMARKcheck}
    />
                  <Avatar alt="Remy Sharp" src={avatar03} />
      <Avatar alt="Travis Howard" src={avatar04} />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg"/>
                </AvatarGroup >
              </div>
              <hr/>
            </div>
                      <Remembers/>
                  </div>
              </div>
      </div>


</div>

  )
}
