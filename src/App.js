import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayGames from './Components/DisplayGames/DisplayGames';
import UserTopRankYear from './Components/UserTopRankYear/UserTopRankYear';
import UserGameSearch from './Components/UserGameSearch/UserGameSearch';

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

  return (
    <div>
      <div>
        <h2>Game Copies Sold Globally per Console</h2>
        <button onClick={() => {
          handleClickSales(() => {
            setShowSales(current => !current);
          });
        }}>Show Data</button>
        {showSales && (
          <div>
            <DisplayGames videoGames={videoGames}/>
          </div>
        )}
      </div>
      <div>
        <h2>Top Grossing Games</h2>
        <button onClick={() => {
          handleClickGross(() => {
            setShowGross(current => !current);
          });
        }}>Show Data</button>
          {showGross && (
            <div>
               <UserTopRankYear videoGames={videoGames}/>
            </div>
          )}
      </div>
      <div>
        <UserGameSearch videoGames={videoGames}/>
      </div>
    </div>
  );
}

export default App;
