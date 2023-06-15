import React from 'react'

export default function index(props) {
    return (
    <textarea 
        className="textarea textarea-bordered bg-gray-700 placeholder:text-slate-50 h-32 resize-none" 
        placeholder={props.placeholder}
    >
        {props.name}
    </textarea>
  )
}
