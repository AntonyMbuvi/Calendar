import React from 'react'
import '../styles/month.css'
import Day from './Day'


export default function Month({month}) {
  return (
    <div className='month-grid'>
        {month.map((row, i) => (
            <React.Fragment key={i}>
                {row.map((day, idx) => (
                        <Day day={day} key={idx} rowIdx={i} />
                ))}
                
            </React.Fragment>
        ))}
    </div>
  )
}
