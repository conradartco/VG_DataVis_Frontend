import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayGames from './Components/DisplayGames/DisplayGames';
import UserTopRankYear from './Components/UserTopRankYear/UserTopRankYear';
import UserGameSearch from './Components/UserGameSearch/UserGameSearch';
import "./App.css";
import headerImage from './Images/GAME-CONSOLES-4.jpg';

function App() {

  const [videoGames, setVideoGames] = useState([]);
  const [showSales, setShowSales] = useState(false);
  const [showGross, setShowGross] = useState(false);

  const handleClickSales = event => {
    setShowSales(current => !current);
  }

  const handleClickGross = event => {
    setShowGross(current => !current);
  }

  useEffect(() => {
    getAllVideoGames();
  }, [])

  async function getAllVideoGames() {
    try {
      let response = await axios.get('http://localhost:8080/videoGames')
      // console.log(response.data)
      setVideoGames(response.data)
    } catch (err) {
      console.log('Error in getAllVideoGames axios request: ' + err)
    }
  }

  function HeaderImage() {
    return (
      <div className='header-container'>
        <img className='header-image' src={headerImage} alt="Game Source banner graphic image"/>
      </div>
    );
  }

  return (
    <div className='html-container'>
      <div>
        {HeaderImage()}
      </div>
      <div className='app-container'>
        <div>
          <UserGameSearch videoGames={videoGames}/>
        </div>
        <div className='show-container'>
          <div className='container-header'>
            <h2>Games Sold per Console</h2>
          </div>
          <div className='container-button'>
            <button className='show-container-button' onClick={() => {
              handleClickSales(() => {
                setShowSales(current => !current);
              });
            }}>SHOW DATA</button>
          </div>
        </div>
        <div>
          {showSales && (
            <div>
              <DisplayGames videoGames={videoGames}/>
            </div>
          )}
        </div>
        <div className='show-container'>
          <div className='container-header'>
            <h2>Top Grossing Games</h2>
          </div>
          <div className='container-button'>
            <button className='show-container-button' onClick={() => {
              handleClickGross(() => {
                setShowGross(current => !current);
              });
            }}>SHOW DATA</button>
          </div>
          
        </div>
        <div>
          {showGross && (
            <div>
                <UserTopRankYear videoGames={videoGames}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
