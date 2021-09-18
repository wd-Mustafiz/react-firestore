import { useState } from 'react';
import { useSelector } from 'react-redux';
import Listitem from '../../comopnents/ListItem/Listitem';
import {BsChevronDoubleRight} from 'react-icons/bs'
import './home.scss';
import Carditem from '../../comopnents/CardItem/Carditem';

const Home = ({cardItem}) => {
    const [currentPage , setCurrentpage] = useState(1)
    const [postPerPage , setPostPerPage] = useState(6)
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFristPost = indexOfLastPost - postPerPage;
    const handleNextPage = () => {
        if(currentPage < 20){
            setCurrentpage(currentPage + 1)
        }
    } 
    const totalPosts = useSelector(state => state.postReducer.posts)
    const posts = totalPosts.slice(indexOfFristPost,indexOfLastPost);
    
    const pageNumber = []
    for(let i = 1 ; i<= Math.ceil(totalPosts.length / postPerPage) ; i++) {
        pageNumber.push(i)
    }
    return (
        <div className="home">
            
            {
                cardItem ? <div className="row">
                 
                {posts.map((post) => (
                    
                    <div className="col-md-6 col-lg-4">
                        <Carditem post={post} key={post.id} />
                    </div>
                    
                ))}
                    
                   
            </div> : posts.map(post => <Listitem post={post} key={post.id}  />)
            }

            
            <div className="pagination">
                {
                    pageNumber.map((p,index) =>(
                        <button  className={currentPage === p ? `activePage` : null} onClick={() => setCurrentpage(p)} key={index}>{p}</button>
                    ))
                }
                <button onClick={handleNextPage}><BsChevronDoubleRight /></button>
            </div>
        </div>
    );
};

export default Home;