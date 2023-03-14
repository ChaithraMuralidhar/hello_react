import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { directive } from '@babel/types';
/*function Hello(props){
  return (
    <div>
      <h1>Welcome to {props.prop}..!!</h1>
      <p>{props.msg}</p>
    </div>
  );}*/
  //const lakeList=["echo lake","Shirley lake","Maud Lake"];
  const lakeList=[
    {id :"1",name:"Echo" ,trailhead:"echo"},
    {id :"2",name:"Maud" ,trailhead:"Wrights"},
    {id :"3",name:"Velma" ,trailhead:"Bayview"}
  ];
  const list=[1,2,3,4,5];
  /*function App({lakes}){
    return(
     <div>
       {lakes.map(lake =>
        (
          <div key={lake.id}>
            <h2>{lake.name}</h2>
            <p>Accesed By: {lake.trailhead}</p>
          </div>
        ))}
     </div>
    );
  }
  function App({items}){
    return(
      <ul>
        {items.map(item =>
          <li key={item.toString()}>{item}</li>)}
      </ul>
    )

  }*/
function Lake(){
  return(
    <div>
      <h1>Visit Jenny Lake..!!</h1>
    </div>
  );
}
function skyResort(){
  return(
    <div>
      <h1>Visit jackson Mountain..!!</h1>
    </div>
  );
}

function App(props){
  if(props.season==="summer"){
    return(
      <Lake/>
    )
    }
  else if(props.season==="winter"){
    return(
      <skyResort/>
    )
  }
    
}


ReactDOM.render(
 <App season="summer" />,
  document.getElementById('root')
);
