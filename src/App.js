 import React from 'react';
import './App.css';
 import {useState, useEffect} from 'react';
import Templates from './components/Templates'
import Meme from './components/Meme'

function App() {
     const [template, setTemplate] = useState([]);
     const [meme, setMeme] = useState(null);

     useEffect(() => {
          fetch("https://api.imgflip.com/get_memes")
           .then(res => res.json())
           .then((data) => {
            setTemplate(data.data.memes);
            // console.log(data)
           })
      },[]);
     
  return (
    <div className="App">
       <h1>MEME GEN</h1>
       {meme == null ? (
       <Templates templates={template} setMeme={setMeme} />
       )  :(
          <Meme meme={meme} setMeme={setMeme} />
          )}
      

    </div>
      
  );
}

export default App;
