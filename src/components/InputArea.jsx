import React, {useState} from 'react'

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  const handelInputText = (event) =>{
    setInputText(event.target.value);
  }
  return (
    <div className='form'>
        <input onChange={handelInputText} type="text" value={inputText} />
        <button onClick={() => 
          {props.onAdd(inputText);
            setInputText("");
            }}
            >
          <span>Add</span>
        </button>
      </div>
  )
}
