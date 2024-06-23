import { useState } from "react";

const ToDo= ()=>{
  const tareas = [""];

  const [counter, setCounter]= useState(0);
  const increaseCounter = ()=>{
    setCounter(counter+1);
  }

  const decreaseCounter = ()=>{
    setCounter(counter-1);
  }
  const completar = (e) =>{
    if (e.target.checked) {
      increaseCounter();
    }else {
      decreaseCounter();
    }
  }
  return (
    <>
    <p>Tareas Completadas: {counter}</p>
    {tareas.map(tarea => <Task key = {tarea} task = {tarea} completar={completar}/>)}
    </>
  )
}
export default ToDo