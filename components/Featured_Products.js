import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faEllipsisVertical, faFile } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MDBRipple } from 'mdb-react-ui-kit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IosShareIcon from '@mui/icons-material/IosShare';
import { NavLink, Outlet } from 'react-router-dom';
import featuredpage from '../assets/featured-bg.jpg'

import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import Person2Icon from '@mui/icons-material/Person2';

import Bookmarkwatch from './Bookmark-watchcomponent'
import Likeswatch from './Likes-watchcomponent'
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/InImages/6.jpeg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import { useSelector } from 'react-redux';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Featuredproducts = (editRow) => {




  const followState = useSelector((state) => state.follow);

  const navigate = useNavigate();

  const Featuredproducts = [
    { id: 1, name: 'Cras justo otrt trjtr btgutr trtfrjt bfdio', profile: 'kemmo', price: '5420', bglandscape: img1 },
    { id: 2, name: 'fgdyef hftg hff', profile: 'sharmoooooo', price: '5420', bglandscape
    : img2 },
    { id: 3, name: 'vcdsc rt4we fffr', profile: 'mo', price: '5420', bglandscape: img3 },
    { id: 4, name: 'Cras justo otrt trjtr btgutr trtfrjt bfdio', profile: 'sharmooooooooooooo', price: '5420', bglandscape: img4 },
    { id: 5, name: 'ncrf tr4ey u68ut', profile: 'mourri', price: '5420', bglandscape: img5 },
    { id: 6, name: 'EWREW gftye t', profile: 'joji', price: '5420', bglandscape: img6 },
    { id: 7, name: 'ppiuyjre rtyryy', profile: 'isabell', price: '5420', bglandscape: img7 },
    { id: 8, name: 'thtu yrt uy8 uu', profile: 'imnosharmo', price: '5420', bglandscape: img8 }
  ];

  const addmemeoryroute = () => {
    navigate('addmemory')
  }
  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
  const LikedItems = JSON.parse(localStorage.getItem('LikedItems')) || [];
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedreport, setselectedreport] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const [imghovered, setimgHovered] = useState(false);
  const handleMouseEnter = (itemId) => {
    setimgHovered(itemId);
  };
  const handlePostClick = (postID) => {
    console.log(postID);
    const encodedPostName = encodeURIComponent(postID); // Encode the post name for the URL
    navigate(`/Memory54956$45`);
  }
  const handleMouseLeave = () => {
    setimgHovered(null);
  };

  const handleDownload = (selectedItem) => {
    if (selectedItem) {
      const link = document.createElement('a');
      link.href = selectedItem.bglandscape; // Corrected property name
      link.download = `image_${selectedItem.id}.jpg`; // Use item ID for the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleItemSave = (item) => {
    setSelectedItem(item);
    console.log(item.id);
  };

  const handleItemLike = (item) => {
    setSelectedItem(item);
    console.log(item.id);
  };

  const handleReport = (event) => {
    const reportType = event.target.value;
    setselectedreport(reportType);
    console.log(reportType);
    if (reportType === 'other') {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const handleMenuClick = (itemId) => {
    if (selectedItemId === itemId) {
      setSelectedItemId(null);
    } else {
      setSelectedItemId(itemId);
    }
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <MDBListGroup style={{ minWidth: '220px', backgroundColor: 'transparent' }} light>
      <div className='featured' style={{display: 'flex', justifyContent: 'center' }}>
            <img src={featuredpage} alt='featured' style={{maxHeight:'332px', textAlign:'center'}}/>

            </div>
        <div className='searchbar' style={{padding:'80px 20px', display: 'flex',
    justifyContent: 'center'}}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
            style={{cursor:'pointer', width:'40px',height:'40px', transition:'0.2s'}}
                              onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.5)';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
            }}
            onClick={addmemeoryroute}
          > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="12" cy="13" r="3" /> <path d="M5 7h2a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h2m9 7v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /> <line x1="15" y1="6" x2="21" y2="6"

            className='AddItem'
          /> <line x1="18" y1="3" x2="18" y2="9" /> </svg>
        </div>
                <div>
        </div>


            <Outlet />
        <div className='ItemAB'>
          {Featuredproducts.map((item, index) => (
            <MDBListGroupItem key={index} className='ChildItem' style={{backgroundColor:'transparent' , border: 'none' , padding:'5px'}}  >

              <div className='image-container'
            onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              onClick={()=>handlePostClick(item.id)}>
        <MDBRipple
          className='bg-image hover-overlay shadow-1-strong rounded'
        >
                  <img src={item.bglandscape} className='w-100' alt='hover' />
                  {imghovered === item.id && (
                    <div className='icon-download'
                    >
    <FontAwesomeIcon icon={faFileDownload} style={{fontSize:'27px', padding:'7px', }} onClick={()=>{handleDownload(item)}} />
  </div>
)}
        </MDBRipple>
              </div>
              <div className='BelowImg'>
                <label className='ImgItemBig'>{item.name.length > 20 ? item.name.substring(0, 30) + '...' : item.name}</label>
                <span style={{ marginRight: '5px' }} />

                <Person2Icon size='1x' style={{ color: '#4670b9' }} />
                <span style={{ marginRight: '5px' }} />
                <label className='ImgItemSmol'>{item.profile.length > 10 ? item.profile.substring(0, 6) + '...' : item.profile}</label>
              </div>

              <div
                  style={{
                    color: '#2c4d87',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'row',
                    // justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderRadius: '8px',
                    backgroundColor: '#216A8B',
                    opacity: '0.9',
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                  }}
                >

<Likeswatch  key={index.id} id={item.id} item={item.name} />
<Bookmarkwatch key={index.id} id={item.id} item={item.name}/>
                <span style={{ marginRight: '7px' }} />


                <ArrowForwardIosIcon
                    color={selectedItemId === item.id ? '#4670b9' : 'inherit'}
                    fontSize='20px'
                    style={{ transform: selectedItemId === item.id ? 'rotate(180deg)' : 'rotate(0)' , transition: '0.5s' }}
                    onClick={() => handleMenuClick(item.id)}
                  />
                  <span style={{ marginRight: '10px' }} />


                  {isMenuOpen && selectedItemId === item.id &&  (
                    <>
                    <Popup trigger={<FlagCircleIcon color='#4670b9' size='xx-large' onClick={handleMenuClick} />}>
                      <Box sx={{ minWidth: 50 }}>
                        <FormControl fullWidth style={{ backgroundColor: '#EEE' }}>
                          <InputLabel id='demo-simple-select-label'>Main Reason</InputLabel>
                          <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Main Reason' value={selectedreport} onChange={handleReport}>
                            <MenuItem value='nudity'>Nudity</MenuItem>
                            <MenuItem value='inappropriateArt'>Not Appropriate Art</MenuItem>
                            <MenuItem value='other'>Shit</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      </Popup>
                      <span style={{ marginRight: '12px' }} />
                      <IosShareIcon size='ls'></IosShareIcon>
                  <span style={{ marginRight: '15px' }} />
                    </>
                  )}
                </div>

            </MDBListGroupItem>
          ))}
        </div>
      </MDBListGroup>

    </>
  );
};
