import React from "react";
import './index.css'
import { nanoid } from "nanoid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import List from "./assets/List";

export default function App(){
  
  const [inputValue,setInputValue] = React.useState("")
  const [list,setList] = React.useState([])

 function handleSubmit(e){
    e.preventDefault()
    if(inputValue !==""){
      const newItem ={
    id: nanoid(),
    itemName:inputValue,
    itemCount: 0,
    isChecked:false,}
    
    const newItems = [...list,newItem]
    setList(newItems)
    }else{
      alert("Enter item!")
    }  
    setInputValue("")
  }


  function handleItemDecrease(id){
    console.log(id)
    const updatedList = [...list].map((item) => {
      if(item.id===id&&item.itemCount>0){
        item.itemCount = item.itemCount-1
      }else if(item.itemCount < 0) alert("You can't have less then 0 items!")
      
      return item
      
    })

    setList(updatedList)

  }
  function handleItemIncrease(id){
    console.log(id)
   
    const updatedList = [...list].map((item) => {
      if(item.id===id){
        item.itemCount = item.itemCount+1
      }
      return item
    })
    setList(updatedList)
  }

  function handleIsChecked(id){
    console.log(id)
    const updatedList = [...list].map((item) =>{
      if(item.id===id){
              item.isChecked=!item.isChecked

      }
      return item
    })

    setList(updatedList)
  }

  function deleteItem(id){
    console.log(id)
    const updatedList= [...list].filter((item) => item.id!==id)
    setList(updatedList)
  }


  const listElements = 
    list.map((item) => 
      <List
        key={item.id}
        name={item.itemName}
        count={item.itemCount}
        isChecked={item.isChecked}
        handleItemIncrease = {() => handleItemIncrease(item.id)}
        handleItemDecrease = {() => handleItemDecrease(item.id)}
        handleIsChecked = {() => handleIsChecked(item.id)}
        deleteItem = {() => deleteItem(item.id)}
      />
    )

  return(
    <div className="shopping-list">
      <div className="search-items">
        <input 
          value = {inputValue} 
          onChange = {(e) =>setInputValue(e.target.value)} 
          placeholder="Insert item" 
          className="search-bar"></input>
        <button 
            onClick = {handleSubmit} 
            className="search-button" >
            <FontAwesomeIcon 
              icon={faPlus} 
              size="lg" 
              color="rgb(181, 37, 37)"/>
          </button>
      </div>
    {listElements}
    </div>
  )
}