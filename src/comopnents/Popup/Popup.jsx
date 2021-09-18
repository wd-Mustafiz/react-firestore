import './popup.scss';
import {FaTimes} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { showHideOpacity } from '../../Redux/Actions/opacity.action';
const Popup = ({post}) => {
    const {id,title,body} = post;
    const dispatch = useDispatch()
    return (
        <div className="popup">
            <div className="cancelItem" onClick={() => dispatch(showHideOpacity())}>
                <FaTimes />
            </div>
            <div className="avatar">
                {id}
            </div>
            <div className="popupText">
                    <div className="popupTitle">
                        Title:&nbsp;<span>{title}</span>
                    </div>
                    <div className="popupDesc">
                        Post:&nbsp;<span>{body}</span>
                    </div>
            </div>
            
        </div>

                
        
    );
};

export default Popup;