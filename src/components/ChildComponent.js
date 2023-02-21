import React from 'react'

const ChildComponent = (props) => {

  const findSquare = (e)=>{
    const val=e.target.value;
    props.setOutput(val*val);
  }
  return (
    <div id="child">
      Find The Square <br/>
      <input id="input" onChange={findSquare}/>
      <p></p>
    </div>
  )
}


export default ChildComponent;
