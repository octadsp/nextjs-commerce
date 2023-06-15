import React from 'react'

function index(props) {
    const className = `btn bg-${props.color} hover:bg-${props.hover} text-black font-bold`

  return (
    <button 
        className={className} 
        onClick={props.handleOnClick}
    >
        {props.name}
    </button>
  )
}

export default index;