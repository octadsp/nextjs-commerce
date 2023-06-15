import React from 'react'

export default function index(props) {
  return (
    <input 
        type={props.type} 
        placeholder={props.placeholder} 
        className="input bg-gray-700 placeholder:text-slate-50 input-bordered w-full" 
    />
  )
}
