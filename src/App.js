import React, { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import {API_URL} from "./constants";
import axios from 'axios';

import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from './components/Layout';
import Gallery from './components/Gallery';
import NewMCUCharacter from "./components/NewMCUCharacter";
import DeleteMcuCharacter from "./components/DeleteMCUCharacter";
import NoPage from './components/NoPage';
import McuHero from './components/McuHero';
import UpdateMcuCharacter from './components/UpdateMcuCharacter';

function App () {

  // const [serverData, setServerData] = useState([]);

  // useEffect(
  //   () => {
  //     console.log(`${process.env.REACT_APP_API_URL}/allCharacters`);
  //     axios.get(`${API_URL}/allCharacters`)
  //     //axios.get("http://localhost:3001/api/allCharacters")
  //       .then(
  //           async res => {
  //             console.log(res.data.payload);
  //             setServerData(res.data.payload);
  //           }
  //       )
  //       .catch(
  //           (error) => {
  //             console.log("Error:" + error);
  //           }
  //       )
  //   },
  //   []
  // );

  return ( 
    // <>
    //   <h1>This is the mcu app. It shows you which year each hero debuted.</h1>
    //   {
    //       serverData.length > 0 ?
    //       serverData.map(
    //         (character, index) => (
    //           <li key={index}>{character.name}</li>
    //         )
    //       )
    //       :
    //       <h1>Loading...</h1>

    //   }

    // </>

        <Routes>
          <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="getOneMcuCharacter/:name" element={<McuHero />} />
              <Route path="addHero" element={<NewMCUCharacter /> } />
              <Route path="deleteMcuCharacter" element={<DeleteMcuCharacter />} />
              <Route path="updateMcuCharacter" element={<UpdateMcuCharacter />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
          </Route>            
        </Routes>


   );
}

export default App ;