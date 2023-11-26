import React, { useState } from 'react'
import "./_category.scss"

const keywords = [
    "React",
    "JavaScript",
    "CSS",
    "HTML",
    "Web Development",
    "Front-end Development",
    "Coldplay",
    "BLACKPINK",
    "Manchester United",
  ];

const Category = () => {

  const [active, setActive] = useState('All')
  const clickHandler = (value) => {
    setActive(value)
  }

  return (
    <div className='category'>
      {
        keywords.map((value, i) => <span onClick={()=>clickHandler(value)} key={i} className={active === value ? "active" : ""}>{value}</span>)
      }

    </div>
  )
}

export default Category