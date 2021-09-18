import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../Redux/Actions/news.aciton';
import { showHideOpacity } from '../../Redux/Actions/opacity.action';
import Popup from '../Popup/Popup';
import './carditem.scss';

const Carditem = ({post}) => {
    const {id,title,body} = post;
    const isClamp = title.split('')
    const showFrame = useSelector(state => state.showFrame)
    const dispatch = useDispatch()
    return (
        <>
            {showFrame ? <Popup post={post} /> : null}
            <div className="postCard">
                <div style={{background:'#3ac48c' , color:'#FFFFFF'}} className="card-header">
                    <div className="cancelItem" onClick={() => dispatch(deletePost(title))}>
                        <FaTimes />
                    </div>
                    user id: {id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{isClamp.length > 22 ? isClamp.slice(0,22) : isClamp.join('') }...</h5>
                    <p className="card-text">{body.split('').slice(0,60).join('')}...</p>
                    
                </div>
            <button onClick={() => dispatch(showHideOpacity())} className="btn">show post</button>
        </div>
        </>
    );
};

export default Carditem;