import React from 'react'
import './css/template.css'

const Templates = ({templates, setMeme}) => {
  return (
    <div className="templates">
        <div className="grid">
           {templates.map(template => (
           <div key={template.id} className="element" onClick={() =>{
             setMeme(template)
           }}> 
           <div style={{backgroundImage:`url(${template.url})`}} className="image">  
            
         </div>
       </div>
    ) )}
</div>
      
    </div>
  
  )
}

export default Templates