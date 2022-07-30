import React from 'react'
import './css/template.css'
import {useState, useEffect} from 'react';


function Meme({meme, setMeme}) {
  {console.log(meme)}
  const [form, setform] = useState({
    template_id:meme.id,
    username:"jappan111",
    password: "memegenjappan",
    boxes: [],
  });
  const data = [];
  const generateMeme = () => {
    console.log(form);
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`      
    });
    console.log(url)
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data.url) ;
      setMeme({...meme, url: data.data.url})
    }
   ); 
    
     
  }
  return (
    <div> 
          <img src={meme.url} className="memepage" />
          <div>
            {[...Array(meme.box_count)].map((_, index) => (
              <input 
              type="text" 
              onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = {text : e.target.value};
              setform({...form, boxes: newBoxes});
              }} 
              key={index}/>
            ))
            }
          </div>
          <div>
            <br></br>
            <button onClick={generateMeme}>Generate Meme</button>
            
            <br></br>
            <button onClick={()=>{
              setMeme(null)
            
            }}>Go Home</button>
          </div>
    </div>
  
    
  )
}

export default Meme