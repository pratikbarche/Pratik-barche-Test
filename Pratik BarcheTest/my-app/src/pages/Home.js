
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css';
import Cardd from '../component/Cardd';

const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get('https://mxpertztestapi.onrender.com/api/sciencefiction');
          setStories(response.data); // Assuming the API response has the data directly in `response.data`.
          const image = await axios.get('` https://ik.imagekit.io/dev24/${data?.Image}`');
          console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStories();
  }, []);

  return (
    <div>
          <div className="Header">
              <div className='navbar'>
                  <div className='logo'>Brainy Lingo</div>
                  <div className='content'>
                      <ul>
                          <li>Home </li>
                          <li>Leader Board</li>
                          <li>Daily Quize</li>
                      </ul>
                  </div>
                  <div className='signout buton'>sign out</div>
              </div>
              <h1>Science Fiction Stories</h1>
          </div>
          
      <div className="Footer">
        <div className="card-container">
          {stories.map((story, index) => (
            <Cardd key={index} title={story.Storyadvenure.Storytitle} imgSrc={`https://ik.imagekit.io/dev24/${story.Storyadvenure.content.Storyimage}`} description={story.Storyadvenure.content.Paragraph} className='.card-container'/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
