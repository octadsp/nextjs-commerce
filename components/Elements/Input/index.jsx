import React from 'react'

export default function index(props) {
    const className = `${props.typeClass} bg-gray-700 placeholder:text-slate-50 input-bordered w-full`
  return (
    <input 
        type={props.type} 
        placeholder={props.placeholder} 
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        className={className}
    />
  )
}
