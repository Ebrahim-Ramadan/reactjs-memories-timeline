# reactjs-memories-timeline
### memories timeline basic interactions and in-detailed memory info
 #### - watching the followers for every user is done by Redux state managamenet, and so the likes and bookmarks of each memory tweet (check the files, naming conventions will guide you)
<br>
<br>

#### **Here what basically the homepage looks like**

<br>
<br>

https://github.com/Ebrahim-Ramadan/reactjs-memories-timeline/assets/65041082/49c3f97d-93ab-468f-b29e-d66c1b7fd321

<br>
<br>
<br>

#### The notifications are implemented by toastify, a react notification library, see the page for the memory tweet details and its interactions schema

<br>

https://github.com/Ebrahim-Ramadan/reactjs-memories-timeline/assets/65041082/ac306388-2b3a-4ed1-8b81-2c1d767df4db

<br>

<br>
<br>

#### every option on every dropmenu has a unique ID and it's being watched by Redux, too. and so the comments and wishes in the very far right column of this page, check it
<br>

<br>
##### **libs**
<br>
notifications => react-toastify<br>
Popup => reactjs-popup <br>
>{ MDBListGroup, MDBListGroupItem } => mdb-react-ui-kit <br>
Timepickers & dateTimePickers => mui/x-date-pickers<br>
dayjs => dayjs<br>
drag nad drop => react-dropzone<br>
mui/material (sliders)<br>
>{ DragDropContext, Droppable, Draggable } => react-beautiful-dnd<br>

<br>
<br>
<br>
<br>
#### **React-Redux toolkit use**
<br><br><br>
**In store/actions/follow-action.js, I defined the FollowON and FollowOFF functions as action creators, to be used in store/reducers/follow-reducer.js in the reducer func.**
<br>
and same redux construction logic for bookmarks, likes, and so on
<br><br>
#### in store/index.js, I created a combineReducers from redux that contains 
<br><br>
const appReducers = combineReducers({
<br> >   likes: LIKESReducer,
<br>  >> bookmark: BOOKMARKSReducer,
<br> >> follow: Followreducer,
<br>  >> login: AuthReducer
<br>})
<br>
then export const store = createStore(appReducers, applyMiddleware(thunk)) to exoprt the whole store to the components
<br>
<br>
<br>
#### then importing { useSelector } from 'react-redux' in the main component to make just the followState as (state) => state.follow (that's because the state has more than one reducer)
