import { useEffect, useState } from 'react';
import './App.css';
import CardItem from './components/card/Card';
import { FormControl, OutlinedInput } from '@mui/material';
import SignIn from './components/form/Form';
function App() {
  const [data,setData] = useState(null)
  const [search,setSearch] = useState('')

  useEffect(()=>{
  fetch('https://dragon-ball-super-api.herokuapp.com/api/characters')
  .then(response => response.json())
  .then(dragonball => setData(dragonball))
  .catch(err => console.log(err, 'algo salio mal'))
  },[]);

  const searcher = e => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }
  //metodo filtrado

  let result = [];
  if(!search){
    result = data
  }else{
    result = data.filter(item =>{
      return item.name.toLowerCase().includes(search.toLocaleLowerCase())
    })
  }
  return (
    <>
    <SignIn/>
        <div className='container__input'>
          <FormControl sx={{ width: '50ch',background: '#fff', borderRadius: '5px' }}>
          <OutlinedInput value={search} onChange={searcher} type='search' placeholder="Please enter text" />
          </FormControl>
        </div>
    <div className="container__card">
      {result && result.map(item => {
        return <CardItem
            key={item.id}
            name={item.name}
            image={item.imageUrl}
            role={item.role}
            universe={item.universe}
            specie={item.specie}
            />
      })}
    </div>
    </>
  );
}

export default App;
