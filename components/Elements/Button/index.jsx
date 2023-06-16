import React from 'react'

function index(props) {
    const className = `${props.type} bg-${props.color} text-black font-bold`

  return (
    <button 
        className={className} 
        onClick={props.handleOnClick}
        type='submit'
    >
        {props.name}
    </button>
  )
}

export default index;