import React,{useState} from 'react'

const ColorPicker = () => {
    const[color, setColor]=useState("black")
    const handleColorChange=(e)=>{
        setColor(e.target.value);
    }
  return (
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
       <div className='color-display' style={{backgroundColor:color}}>
        <p>Selected color:{color}</p>
       </div>
       <h3>Selected Color</h3>
       <input type="color" name="color" value={color} onChange={handleColorChange}/>

    </div>
  )
}

export default ColorPicker