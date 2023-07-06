import React, { useRef, useEffect, useState } from 'react';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, faClover, faGrinHearts, faFaceKiss, faArrowLeft,faFaceRollingEyes, faEllipsisVertical, faFaceSurprise , faSadCry, faHandsAslInterpreting, faBan, faVolumeXmark, faCode, faRetweet, faFlag } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import './remembersandwishs.css';
import commenter01 from '../assets/4.jpg';
import commenter02 from '../assets/InImages/2C.png';
import commenter03 from '../assets/commenter03.png';
import commenter04 from '../assets/InImages/commenter04.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const date = 'July, the 1st';
const memorywhathappened = 'ehjfguf ejfgeuyf hjgfuegfefbf yuf ygfejfg yugerufge slflkgheurfhl hfygehjf hfge hghgf gfefeh rfgygferfgffgrg g ughughrg';

function DropdownItem(props) {
  const handleClick = () => {
    props.onSelect && props.onSelect(props.icon);
  };
  return(
    <li className = 'dropdownItem comment'  onClick={handleClick}>
      <FontAwesomeIcon icon={props.icon} />
      <span style={{paddingLeft:'10px'}}>
      {props.text} 
        
</span>
    </li>
  );
}


export const Remembers = () => {
  const textAreaRef = useRef(null);
  const [borderLeftHeight, setTextHeight] = useState(0);
  useEffect(() => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      const text = 'Lorem ipsum dofrdgfdgttrfrdfgrtfeghlor sit amet, consectetur adipiscing elit.';
      textArea.textContent = text;
      const textHeight = textArea.offsetHeight;
        console.log('Text height:', textHeight);
        setTextHeight(textHeight)
    }
  }, []);
    
    const remember = [
    {id:1, img1: commenter01, img2:commenter02, date: date, remmeberwhathappend:memorywhathappened, iicon:faGrinHearts },
    {id:2, img1: commenter04, img2:commenter03, date: date, remmeberwhathappend:memorywhathappened, iicon:faGhost},
  ]
  const [commentoption, setcommentoption] = useState(false);
  const [ellipsisCoordinates, setEllipsisCoordinates] = useState({});

  const post_options = (event, id) => {
    const ellipsisIcon = event.currentTarget;
    if (ellipsisIcon) {
      const iconPosition = event.target.getBoundingClientRect();
      setEllipsisCoordinates({ x: iconPosition.left, y: iconPosition.top });
      setOpenMenuIndex(id);
      console.log('id: ',id);
      setcommentoption(true);
      console.log(
        { x: iconPosition.left, y: iconPosition.top });
    }
  };
  

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setcommentoption(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const [post_selectedoption, setpost_selectedoption] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const handle_commentoption = (index) => {
    setOpenMenuIndex(index);
    setcommentoption(false);
    const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 2000));
  
    let pendingMessage = '';
    let successMessage = '';
  
    switch (index) {
      case '</>':
        pendingMessage = `${index} pending`;
        successMessage = `${index} sent to your mail inbox`;
        break;
      case '🚩':
        pendingMessage = `${index} pending`;
        successMessage = `${index} made`;
        break;
      case 'tweeting...':
        pendingMessage = `${index}`;
        successMessage = ` tweeted`;
        break;
      default:
        pendingMessage = `${index} pending`;
        successMessage = `${index} sent`;
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
    <div className='remembers'>
          {remember.map((index) => (
              <>
                  <div className='remember-header'>
                  <FontAwesomeIcon icon={index.iicon} size='lg' />
                  <span />
                  <img alt='rememberer01' src={index.img1} />
                  <img alt='rememberer01' src={index.img2} />
                  <span />
                <FontAwesomeIcon
                  className='ellipsis-icon'
                  style={{ padding: '10px', cursor: 'pointer' }} icon={faEllipsisVertical}
                  onClick={(event) => post_options(event, index.id)}
              />
              </div>
                  <div className='memory-content'>
                      <div className='memory-content-head'>
                          <p>
                            They too remmeber this place at
                          </p>
                          <p className='date'>
                              {date} when
                          </p>
                          <div>
                          
                          <p ref={textAreaRef} className='memory-what_happened'>
                              {memorywhathappened}
                          </p>
</div>
                </div>
                {/* <LoadMoreButton onClick={console.log} /> */}
                  </div>
              <hr />
              {commentoption && openMenuIndex === index.id && (
                <div className='dropmenu-comment' style={{ position:'absolute',top: `${ellipsisCoordinates.y}px`, left: `${ellipsisCoordinates.x -1240}px` }}>
                  <DropdownItem
                    onSelect={() => { handle_commentoption('😳') }}
                    icon={faFaceSurprise}
                    text='this can NOT be real fuckoff'
                  />
                  <DropdownItem
                    onSelect={() => { handle_commentoption('🥺') }}

                  
                    icon={faFaceRollingEyes}
                    text='are you ok? fr'
                  />
                  <DropdownItem
                    onSelect={() => { handle_commentoption('😙') }}
                  
                    icon={faFaceKiss}
                    text='that jus cheered me up<3'
                  />
                  <DropdownItem
                    onSelect={() => { handle_commentoption('😭') }}
                  
                    icon={faSadCry}
                    text='aching literally sobbing'
                  />
                  <DropdownItem
                    onSelect={() => { handle_commentoption('🫡') }}
                  
                    icon={faHandsAslInterpreting}
                    text='what youre saying is 🫡'
                  />
                  <DropdownItem
                    onSelect={() => { handle_commentoption('tweeting...') }}
                  
                    icon={faRetweet}
                    text='Tweet this memory'
                  />
                  <DropdownItem
                    onSelect={() => { handle_commentoption('🚫') }}
                  
                    icon={faBan}
                    text='Block @sharmo'
                  />
                  <DropdownItem
                    onSelect={() => { handle_commentoption('😶') }}
                  
                    icon={faVolumeXmark}
                    text='Mute @sharmo'
                  />
                  <DropdownItem
                    onSelect={() => { handle_commentoption('🚩') }}
                  
                    icon={faFlag}
                    text='Report @sharmo'
                  />
                  <DropdownItem
                    onSelect={() => { handle_commentoption('</>') }}
                  
                    icon={faCode}
                    text='Embed memory'
                  />
                </div>
              )}
              </>
              
))}
    </div>
  );
};
