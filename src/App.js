import React, {useState, useEffect} from 'react';
import axios from 'axios';
import  moment from 'moment'
import List from './components/List'
import AddItem from './components/AddItem'
import './App.css';

function App() {
  
  const [listStarWars, setListStarWars] = useState([{nameStarWars:'', dateStarWars:''}]); 
  const [nameStarWars, setNameStarWars] = useState("")

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [clicked, setCliked] = useState(false);


  function handleChange(event) {
    setNameStarWars(event.target.value);
  }

function handleAdd() {  
const newList = listStarWars.concat({ nameStarWars, dateStarWars:moment()});
   setListStarWars(newList);
  setCount2(count2 + 1)
  setNameStarWars('');
}

// eslint-disable-next-line
  useEffect(async () => {
    const result = await axios(
      'https://swapi.dev/api/starships',
    );

    setListStarWars(result.data.results.map(item =>({
      nameStarWars:item.name,
      dateStarWars:item.created
      })
      ))

    setCount(listStarWars.length)

// eslint-disable-next-line  
  }, [count]);

  return ( 
    <div class="container">
       <h1 class="h1"> Nombre total de vaisseaux: {count + count2} </h1>
       <List list={listStarWars}/>
       <button onClick={() => { setCliked(true) }} className="button"> Ajouter </button>
       {clicked? <div  className="addItem">
                 <AddItem
                  name={nameStarWars}
                  onChange={handleChange}
                  onAdd={handleAdd}
                 />
               </div>
               :<div></div>
         }
    </div>
  );
};
export default App;
