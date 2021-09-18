import './Listitem.scss';
import {FaTimes} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../Redux/Actions/news.aciton';
import Popup from '../Popup/Popup';
import { showHideOpacity } from '../../Redux/Actions/opacity.action';
const Listitem = ({post}) => {
    const {id,title,body} = post
    const dispatch = useDispatch()
    const showframe = useSelector(state => state.showFrame)
    return (
            <>
                {showframe ? <Popup post={post} /> : null}

                <div className="listItem">
                
                <div className="listDetails"  onClick={() => dispatch(showHideOpacity())}>
                    <div className="avatar">
                        {id}
                    </div>
                    <div className="listText">
                        <div className="listTitle"><span>{title}</span></div>
                        <div className="listDes">
                            <span>{body.split('').slice(0,90).join('')}...</span>
                        </div>
                    </div>
                </div>
                <div className="cancelItem" onClick={() => dispatch(deletePost(title))}>
                    <FaTimes />
                </div>
                </div>
            </>

    );
};

export default Listitem;