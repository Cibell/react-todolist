
import { v4 as uuidv4 } from 'uuid'
import React, { useState, useEffect } from 'react';
import img from './assets/list.png'



import {Container, Todolist,Imag, Input, Button, ListItem, Check, Trash} from './styled.js'

function App() {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')


  function valueDoInput(event){
    setInput(event.target.value)
  }
  
  function addLista(){
    if(input){
      setList([...list, {id: uuidv4(), task: input, finished: false}])
   
    }  
   
  }

  function finishtask(id){
   const newList = list.map( item => (item.id === id ? {...item, finished: !item.finished} : item))
   setList(newList)

  }
  function deletetask(id){
   const newList = list.filter(item => (item.id !== id))
   setList(newList)
  }


  return (
    <Container>
      <Todolist>
      <div>
      <Imag src={img}/>
      </div>
      <Input onChange={valueDoInput} placeholder="O que tenha para fazer..." />
      <Button onClick={addLista}>Adicionar</Button>

      <ul>
        {list.length > 0 ? (
          list.map( item =>(
            <ListItem key={item.id} isFinished={item.finished}>
            <Check onClick={() => finishtask(item.id)}/>
            <li>{item.task}</li>
            <Trash onClick={ () =>deletetask(item.id)}/>
            </ListItem>
          ))
          ) : (
            <h2>Não há item na lista</h2>
          )}
      </ul>
      </Todolist>
   
    </Container>
  )
}

export default App
