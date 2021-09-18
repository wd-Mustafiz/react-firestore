import './feedback.scss';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react';
import {db} from '../../firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { useEffect } from 'react';
const FeedBack = ({feedback , setFeedback}) => {
    const [country,setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => {setCountry(data);
        })
    } , [])
    const [showErrorEmail , setShowErrorEmail] = useState(false)
    const [showErrorPhone , setShowErrorPhone] = useState(false)
    const [search , setSearch] = useState('');
    const [showSearchList , setShowSearchList] = useState(false)
    const [feedbackData , setFeedbackData] = useState({
        fname:'' , lname:'' , address:'',search:'' , email:'' , frist2:'' , last9:''
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        if(name === 'frist2' || name === 'last9') setShowErrorPhone(false)
        if(name === 'email') setShowErrorEmail(false)
        setFeedbackData({...feedbackData , [name]:val})
    }

    const handleSearchChange = (e) =>{
        setSearch(e.target.value);
        setShowSearchList(true)
    }
    const filterdCountry = country.filter(e => e.name.toLowerCase().startsWith(search.toLocaleLowerCase()))


    const sendFeedback = async (e) => {
        let done = true;
        e.preventDefault();
        const {fname , lname , address , email , frist2 , last9} = feedbackData;
        if(!fname || !lname || !address || !search || !email || !frist2 || !last9) return toast('please filup the data')

        const f2 = frist2.split('').length;
        const l9 = last9.split('').length;

        if(!/\S+@\S+\.\S+/.test(email)) {
            setShowErrorEmail(true)
            done = false
        };
        
        if(f2 !== 2 || l9 !== 9){
            setShowErrorPhone(true)
            done = false
        }

        if(done){
            try {
                const feedback = await addDoc(collection(db, "feedback"), {
                    name:fname+" "+lname,
                    address,
                    country: search,
                    email,
                    phone:frist2+last9
                  });
                  toast('submitted successfully')
                  setFeedbackData({fname:'' , lname:'' , address:'',search:'' , email:'' , frist2:'' , last9:''})
                  setSearch('')
                  setFeedback(false)
            } catch (error) {
                toast('somthing is wrong went')
                console.error("Error adding document: ", e);
            }
        }
        
        
    }
    return (
        <div className="feedback" style={{display: feedback ? 'block' : 'none'}}>
            <div className="feedback-top">
                <h4>Thank you so much for taking the time</h4>
                <span>Please provide the bellow details</span>
            </div>

            <form action="" onSubmit={(e) => sendFeedback(e)} className="feedbackform">
                <span className="inputTitle flem">Frist Name:</span><br/>
                <input value={feedbackData.fname} onChange={handleChange} name="fname" type="text" className="feedbackinput" placeholder="Jhon"/><br/>

                <span className="inputTitle flem">Last Name:</span><br/>
                <input value={feedbackData.lname} onChange={handleChange} name="lname" type="text" className="feedbackinput" placeholder="Doe"/><br/>

                <span className="inputTitle">Adress:</span><br/>
                <textarea value={feedbackData.address} onChange={handleChange} name="address" className="feedbackinput feedBackAddress" placeholder="Enter your full postal address" rows="4"></textarea><br/>
            
                <span className="inputTitle">Search:</span><br/>
                <div className="searchFiled">
                    <input autocomplete="off" value={search} onChange={handleSearchChange} name="search" type="text" className="feedbackinput inputSearch" placeholder="bangladesh"/>
                    <AiOutlineSearch />
                    {
                        filterdCountry.map(country => (
                            showSearchList ? <li 
                                onClick={() => {
                                    setSearch(country.name)
                                    setShowSearchList(false)
                                }} 
                                style={{ display: search?'block':'none' }} 
                                className="searchList">{country.name}
                                </li>: ''
                        ))
                    }
                </div>

                <span className="inputTitle">Email id</span><br/>

                <input value={feedbackData.email} onChange={handleChange} name="email" type="text" className="feedbackinput" placeholder="example@gmail.com"/>
                 {showErrorEmail ? <span className="messege">Please enter a valid Email</span> : null}<br/>


                <span className="inputTitle">Phone Number</span><br/>

                <input value={feedbackData.frist2} onChange={handleChange} name="frist2" type="number" className="feedbackinput frist2" placeholder="+91"/>
                <input value={feedbackData.last9} onChange={handleChange} name="last9" type="number" className="feedbackinput last9" placeholder="123456789"/>
                
                {showErrorPhone && <span className="messege">Please enter a valid phone number</span>}
                <button type="submit" className="submitBtn">submit feedback</button>
                
            </form>
        </div>
    );
};

export default FeedBack;