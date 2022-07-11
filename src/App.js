import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayGames from './Components/DisplayGames/DisplayGames';
import UserTopRankYear from './Components/UserTopRankYear/UserTopRankYear';
import UserGameSearch from './Components/UserGameSearch/UserGameSearch';

function App() {

  const [videoGames, setVideoGames] = useState([]);

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
        <DisplayGames videoGames={videoGames}/>
      </div>
      <div>
        <UserTopRankYear videoGames={videoGames}/>
      </div>
      <div>
        <UserGameSearch videoGames={videoGames}/>
      </div>
    </div>
  );
}

export default App;
