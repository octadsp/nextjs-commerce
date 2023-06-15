import React from 'react'

export default function badge(props) {
  return (
    <span className="badge badge-sm indicator-item font-bold bg-white text-black">
        {props.totalItems}
    </span>
  )
}
