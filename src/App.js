import { useEffect, useState } from 'react';
import './App.css';
import CardItem from './components/card/Card';
import { TextField } from '@mui/material';
import Form from './components/form/Form';
import Modal from './components/modal/Modal';

function App() {
  const [data,setData] = useState(null)
  const [search,setSearch] = useState('')

  useEffect(()=>{
  fetch('https://dragon-ball-super-api.herokuapp.com/api/characters')
  .then(response => response.json())
  .then(dragonball => setData(dragonball))
  .catch(err => console.log(err, 'algo salio mal'))
  },[]);

  //metodo filtrado

  let result = [];
  if(!search){
    result = data
  }else{
    result = data.filter(item =>{
      return item.name.toLowerCase().includes(search.toLocaleLowerCase())
    })
  }

  // remove item
  function removeItem(id){
    let isRemove = window.confirm('estas seguro que quieres eliminar?');
    if(isRemove){
      const newItem = result.filter(item => item.id !== id)
      setData(newItem)
    }
  }
  return (
    <>
        <div className='container__input'>
          <TextField
              margin="normal"
              type="search"
              placeholder='Search character'
              value={search}
              onChange={(e)=> setSearch(e.target.value)}
              sx={{
                paddingTop: 0,
                width: '30%',
                background: '#fff',
                color: 'red',
                borderRadius: '5px'
              }}
            />
            <Modal children={<Form data={data} setData={setData} />
} />
        </div>
    <div className="container__card">
      {result && result.map(item => {
        return <CardItem
            key={item.id}
            removeItem={()=>removeItem(item.id)}
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