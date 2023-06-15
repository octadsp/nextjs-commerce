import React from 'react'

export default function index(props) {
  return (
    <input type={props.type} placeholder={props.placeholder} className="input input-bordered w-full max-w-xs" />
  )
}
