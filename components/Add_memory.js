import React, { useEffect, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Addmemory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsisVertical  } from '@fortawesome/free-solid-svg-icons';
import TextField from "@mui/material/TextField";
import { alpha, styled } from '@mui/material/styles';
// import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const toastify = (ImageSrc) => {
  toast.success(`${ImageSrc}`, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 800,
    theme: 'dark'
  });
};


//dropmenu
function DropdownItem(props){
  return(
    <li className='dropdownItem memory'
    onClick={props.func}>
      <a href={props.any}> {props.text} </a>
    </li>
  );
}
const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});
const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} style={{width:'800px'}} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === '' ? '#161B22' : '#161B22',
    border: '1px solid',
    color:'white',
    borderColor: theme.palette.mode === '#8B8D91' ? '#8B8D91' : '#8B8D91',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '& input::placeholder': {
      color: theme.palette.mode === 'dark' ? '#8B8D91' : '#8B8D91',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiInputBase-root::placeholder': {
      color: theme.palette.mode === '#8B8D91' ? '#8B8D91' : '#8B8D91',
    },
    
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      color:'white',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  height: 200,
    width: 'fit-content',
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
//   display: 'block',
//   width: 'auto',
//   height: '100%',
};

export const Addmemory = (props) => {
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imgviewercaption, setImgViewerCaption] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null); 
      const handleMouseEnter = (index) => {
        setHoveredIndex(index);
      };
    
      const handleMouseLeave = () => {
        setHoveredIndex(null);
      };

    // const openLightbox = useCallback((imgsource, caption) => {
    //   setImgViewerCaption(caption);
    //   setSelectedImage(imgsource);
    //   setViewerIsOpen(true);
    // }, []);
  
    // const closeLightbox = () => {
    //   setImgViewerCaption(null);
    //   setSelectedImage(null);
    //   setViewerIsOpen(false);
    // };
    const navigate = useNavigate();
  
  const backtohome = () => {
    toastify('cache discarded')
    navigate('/')
}
    const [initialFiles, setInitialFiles] = useState([]);
  const [files, setFiles] = useState([]);
  const [filenames, setFilenames] = useState([]);
  const [deletedFiles, setDeletedFiles] = useState([]);
  const [memoryelps, setmemoryelps] = useState(false);
  const toggle_memoryelps = () => {
    if (!memoryelps) {
      setmemoryelps(true)
    }
    else {
      setmemoryelps(false)
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
      accept: {
        'image/png': ['.png'],
        'image/jpg': ['.jpg'],
        'image/jpeg': ['.jpeg'],
    },
    onDrop: (acceptedFiles) => {
        const newFiles = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
      );
      setInitialFiles(newFiles);
        setFiles(newFiles);
        const newFilenames = newFiles.map((file) => file.name);
        setFilenames(newFilenames);

      },
      

  });

  const resetSorting = () => {
    setFiles([...initialFiles]);
    toastify('reset')

  };
// console.log(filenames[0]);
    
//   console.log(files)
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const items = Array.from(files);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setFiles(items);
  };

  const removeFile = (index) => {
    const deletedFile = files[index];
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    setDeletedFiles((prevDeletedFiles) => [...prevDeletedFiles, deletedFile]);
  };
  const thumbs = files.map((file, index) => (
    <Draggable key={file.name} draggableId={file.name} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={thumb}
        >
          <div style={thumbInner}
onMouseEnter={() => handleMouseEnter(index)} // Update the hoveredIndex on mouse enter
onMouseLeave={handleMouseLeave} 
          >
            {hoveredIndex === index && ( // Show alt text only for the hovered image
              <p id='alt'>
                alt: {file.name.split('.')[0]}
                <button
                  type='button'
                  class='btn btn-dark btn-sm'
                  style={{ fontSize: '10px', padding: '3px 7px', margin: '5px' }}
                  onClick={() => removeFile(index)}
                >
                  X
                </button>
              </p>
            )}
                      
            <img
              
              alt='uploads'
              src={file.preview}
              onLoad={() => URL.revokeObjectURL(file.preview)}
                      />
          </div>
        </div>
      )}
    </Draggable>
  ));


  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setmemoryelps(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
  files.forEach((file) => URL.revokeObjectURL(file.preview));
      window.removeEventListener('keydown', handleKeyPress);
    };


  }, []);
  return (
    <ThemeProvider theme={theme}>

    <DragDropContext onDragEnd={handleDragEnd}>
      <section className='container'>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} multiple={true} />
          <p id='drag-p'>Drag & drop some memory pictures here, or click to select files
          </p>
        </div>
        <div className='drag-instructions'>
            <span
            onClick={backtohome}>
          <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{color: "#ffffff",}} />
        </span>
          <span>
            <a href='Memories-images-help'>
            (the pictures names will be recognized and shared as images' alt)
            </a>
            <br/>

        </span>
          <span
              onClick={toggle_memoryelps}
              >
            <FontAwesomeIcon size="xl" icon={faEllipsisVertical} style={{ color: "#ffffff", }}              
            />
            
        </span>
      </div>
              <Droppable droppableId="files" >
          {(provided) => (
            <aside
              style={thumbsContainer}
              {...provided.droppableProps}
                          ref={provided.innerRef}
                        //   draggable
                      >
                          
                          {thumbs}
              {provided.placeholder}
            </aside>
          )}
              </Droppable>
              
      </section>

      {memoryelps && (
              <div className='elips-dropmenu-memory'>

          <DropdownItem
              text='Reset'
              func={resetSorting}
                  />
              <DropdownItem
                // func
                    text='Restore Deletes'
                  />
      </div>
)}
      </DragDropContext>
      <div className='whathappened'>
            <RedditTextField
                label="what happened at that moment? feel free to awesomely storytell"
                id="reddit-input"
            variant="filled"
            multiline
                // value={searchTerm}
                // onChange={handleInput}
                // onKeyPress={handleKeyPress}
            />   
        </div>
      </ThemeProvider>
  );
};
