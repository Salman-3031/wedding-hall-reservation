import React from 'react'

const Title = ({topheading ,title, description, topdownpadding}) => {
  return (
    <div>
        <div className={`container space-y-2 flex flex-col ${topdownpadding || "py-10"}`}>
          {topheading && <p className='px-3 py-px rounded-full bg-background text-sm place-self-center'>{topheading}</p>}
            <h2 className='text-3xl sm:text-4xl text-center font-medium'>{title}</h2>
            <p className='text-center text-para'>{description}</p>
        </div>
    </div>
  )
}

export default Title