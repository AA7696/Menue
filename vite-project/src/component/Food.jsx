import React from 'react'

const Food = ({food}) => {
  return (
    <div className='item'>
        <div className="img-wrapper">
            <img src={food.img} alt="" />
        </div>

        <div className="text-wrapper">
            <div className="title">
                <h2 className='name'>{food.title}</h2>
                <div className="price">${food.price}</div>
            </div>
            <p>{food.desc}</p>
        </div>
      
    </div>
  )
}

export default Food
