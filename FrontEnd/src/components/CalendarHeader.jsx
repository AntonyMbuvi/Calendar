import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import '../styles/calendarHeader.css'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'


export default function CalendarHeader() {

  const {monthIndex, setMonthIndex} = useContext(GlobalContext)

  function handlePrevMonth(){
    setMonthIndex(monthIndex - 1)
  }
  function handleNextMonth(){
    setMonthIndex(monthIndex + 1)
  }
  function handleReset(){
    setMonthIndex(
      monthIndex === dayjs().month()
      ? monthIndex + Math.random()
      : dayjs().month()
    )
  }
  
  return (
    <header className='calhead-header'>
      <img src={logo} alt='calendar' className='calhead-img' />
      <h1 className="calhead-h1">
        Calendar
      </h1>
      <button className="calhead-today" onClick={handleReset} >
        Today
      </button>
      <button className='chevron-btn'onClick={handlePrevMonth}>
        <span className="material-icons-outlined chevron">
          chevron_left
        </span>
      </button>
      <button className='chevron-btn' onClick={handleNextMonth}>
        <span className="material-icons-outlined chevron">
          chevron_right
        </span>
      </button>
      <h2 className='calhead-h2'>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>

    </header>
  )
}
