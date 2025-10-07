import React from 'react'

const Title = ({title, description, topdownpadding}) => {
  return (
    <div>
        <div className={`container space-y-2 bg-bglight dark:bg-bgdark ${topdownpadding || "py-10"}`}>
            <h2 className='text-3xl sm:text-4xl text-center font-medium dark:text-white'>{title}</h2>
            <p className='text-center text-darkpara dark:text-lightpara'>{description}</p>
        </div>
    </div>
  )
}

export default Title