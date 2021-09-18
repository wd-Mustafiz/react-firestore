import './sidebar.scss';
import {GoCreditCard} from 'react-icons/go';
import {AiOutlineUnorderedList} from 'react-icons/ai'
import { useState } from 'react';
const Sidebar = ({handleFeedBack, feedback , handelCardItem}) => {
    const [activeBtn , setActiveBtn] = useState('listBtn')
    return (
        <div className="sidebar">
            
            <div className="user-profile common">
                <img src="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg" alt=""/>
                
                <div className="profile-text">
                    <span className="greet">Hi,Reader,</span>
                    <span className="">Here's your News!</span>
                </div>
            </div>
         
            <div className="toggle-tab common" style={{display: feedback && 'none'}}>
                <h4>View Toggle</h4>
                <div className="togglebtns">
                    <button onClick={() => {
                        setActiveBtn('cardBtn')
                        handelCardItem(true)
                }} className={`cardBtn ${activeBtn === 'cardBtn' ? `activeBtn` : ''}`}>
                        <GoCreditCard />
                    </button>
                    
                    <button onClick={() => {
                        setActiveBtn('listBtn')
                        handelCardItem(false)
                        }} className={`listBtn ${activeBtn === 'listBtn' ? `activeBtn` : ''}`}>
                        <AiOutlineUnorderedList />
                    </button>
                </div>
            </div>


            <div className="toggle-tab fidbackTab common">
                <h4>Have a Feedback ?</h4>
                <button style={{background: feedback && '#E7A2A5'}} onClick={() => handleFeedBack(true)} className="fidbackBtn">We're Listening!</button>
            </div>
        </div>
    );
};

export default Sidebar;