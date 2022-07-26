import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function TodoItem(props) {
  const id = props.id;
  return (
    <div className='d-flex'>
        
        <li>
        {props.text}
        </li>
        <span className='ms-auto my-auto' onClick={()=>props.onChacked(id)}><FontAwesomeIcon icon={faTrashCan} /></span>
        
    </div>
  )
}
