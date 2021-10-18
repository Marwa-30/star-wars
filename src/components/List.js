import React from 'react';
import Moment from 'react-moment';
import './list.css'
const List = ({ list}) => (
    <ul className='list'>     
      {list.map((item) => (
        <li key={item.id} className='list-item'> 
       <div class="flex-container">
       <div >
       <label class="label"> Nom Star Wars </label>
       {item.nameStarWars} 
       </div>
       <div>
       <label class="label"> Date de création </label> 
       <Moment format="DD/MM/YYYY HH:mm:ss">{item.dateStarWars}</Moment> 
       </div>
       </div> 
      </li>
      ))}
    </ul>
    );

    export default List;