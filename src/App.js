import { useEffect, useState } from 'react';
import './app.scss'
import Sidebar from './comopnents/Sidebar/Sidebar'
import {useDispatch , useSelector} from 'react-redux'
import {getPopularPosts} from './Redux/Actions/news.aciton'
import Home from './pages/home/Home';
import FeedBack from './comopnents/feedback/FeedBack';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPopularPosts());
  } , [])
  const [cardItem,setCardItem] = useState(false);
  const handelCardItem = (w) => {
    setCardItem(w);
  }
  const [feedback,setFeedback] = useState(false)
  const handleFeedBack = () => {
    setFeedback(!feedback);
    console.log(feedback);
  }
  const opacityHandler = useSelector(state => state.showFrame)
  return (
    <div className="App">
      <ToastContainer position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      {opacityHandler ? <div className="darkApp"></div>: null}
      <div className="sidebar-area">
        <Sidebar feedback={feedback} handleFeedBack={handleFeedBack}  handelCardItem={handelCardItem} />
        <FeedBack setFeedback={setFeedback} feedback={feedback} />
      </div>
      <div className="main-content-area" onClick={() => setFeedback(false)}>
        <Home cardItem={cardItem} />
      </div>
    </div>
  );
}

export default App;
