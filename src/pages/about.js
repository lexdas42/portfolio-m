import React from 'react';
import Title from '../components/title'


const About = () => {
    return ( <div className="min-h-screen w-screen" style={{
        backgroundColor: 'black',
        opacity: 0.9
    }}>
  <Title name="About" />
  <div className=" place-content-center space-x-8 pt-20 " >
      <p className="font-sans text-4xl text-justify font-light text-white italic">My name is Adelson Alexandro, i am a web developer with two years of experiences, <br />
      Contact me , I will help you build your projects, your idea, or your Product<br /> <br />
      In the Weather App you can see the weather of your countries by search for it by enter it name<br /> <br />
      In the chat app you can chat with your friend by enter your name and a room , you can join a existent room<br />
      or create one 
      </p> <br /> <br />

      <h3 className="w-1/2 bg-green-600 text-white text-4xl rounded-md">Email: <i>alexandroadelson@gmail.com</i></h3>
     
  </div>
    </div> ); 
}
 
export default About;