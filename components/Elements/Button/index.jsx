import React from 'react'

function index(props) {
    const handleButtonClick = () => {
        if (typeof window[props.id]?.showModal === 'function') {
          window[props.id].showModal();
        }
      };

  return (
    <button className="font-bold" onClick={handleButtonClick}>
        {props.name}
    </button>
  )
}

export default index;