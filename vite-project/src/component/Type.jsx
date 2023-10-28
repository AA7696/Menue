import React from 'react'

const Type = ({name, filter}) => {
  return (
    <button className='btn' onClick={()=>{filter(name.type)}}>
        {name.type}
      
    </button>
  )
}

export default Type
