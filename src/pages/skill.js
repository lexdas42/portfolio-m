import React from 'react';
import Title from '../components/title'

const Skill = () => {
    return ( <div>
        <Title name="Skill" />
        <div className="flex justify-center ">
        <ul className="space-y-6 pb-9">
        
  <li>
      <p className="font-bold text-lg">React</p>
    <div className="w-96 h-7 bg-green-500 rounded-lg animate-pulse"></div>
  </li>
  <li>
  <p className="font-bold text-lg">Node js</p>
    <div className="w-64 h-7 bg-green-500 rounded-lg animate-pulse"></div>
  </li>
  <li>
  <p className="font-bold text-lg">Javascript</p>
    <div className="w-56 h-7 bg-green-500 rounded-lg animate-pulse"></div>
  </li>
  <li>
  <p className="font-bold text-lg">Html</p>
    <div className="w-48 h-7 bg-green-500 rounded-lg animate-pulse"></div>
  </li>
  <li>
  <p className="font-bold text-lg">css</p>
    <div className="w-40 h-7 bg-green-500 rounded-lg animate-pulse"></div>
  </li>
  
</ul>

</div>
    </div> );
}
 
export default Skill;