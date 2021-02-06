import React from 'react';
import Title from '../components/title'
import img1 from "../image/IMG_9324.jpg"
import img2 from "../image/IMG_9325.jpg"


const Project = () => {
    return (<div className="min-h-screen w-screen" style={{
        backgroundColor: 'black',
        opacity: 0.9
      }}>
<Title  name="Project" />
<div className="flex flex-row space-x-7 pt-20 pb-8 ">
    <a className="hover:opacity-50" href="https://weather-alex.herokuapp.com/">
        
    <img src={img2} height={280} width={300} />
    </a>
    <a className="hover:opacity-50" href="https://alexandro-chat-app.herokuapp.com/">
    <img src={img1} height={400} width={400} />
    </a>



</div>

    </div>  );
}
 
export default Project;