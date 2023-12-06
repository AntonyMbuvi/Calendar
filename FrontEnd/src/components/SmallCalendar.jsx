import React from 'react'
import dayjs from 'dayjs'
import { useEffect, useState, useContext } from 'react'
import { getMonth } from '../util'
import GlobalContext from '../context/GlobalContext'
import '../styles/smallCalendar.css'

export default function SmallCalendar() {
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const {monthIndex, setSmallCalendarMonth, daySelected, setDaySelected} = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonthIdx(monthIndex)
    }, [monthIndex])

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthIdx])

    function handlePrevMonth(){
        setCurrentMonthIdx(currentMonthIdx -1)
    }
    function handleNextMonth(){
        setCurrentMonthIdx(currentMonthIdx + 1)
    }

    function getDayClass(day){
        const format = 'DD-MM-YY'
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        const slcDay = daySelected && daySelected.format(format)

        if(nowDay === currDay){
            return 'nowCurDay'
        }else if(currDay === slcDay){
            return 'currSlcDay'
        }else{
            return ''
        }
    }

    function handleButtonClick(day){
        setSmallCalendarMonth(currentMonthIdx)
        setDaySelected(day)
                                      
    }
   
    return (
        <div className="mainSmall-div">
        
            <header className="small-header">
                <p className="smallHeader-p">
                    {dayjs(new Date(dayjs().year(), currentMonthIdx))
                            .format('MMMM YYYY')}
                </p>
                <div>
                    
                        <button onClick={handlePrevMonth} className='chevron-btn'>
                            <span className="material-icons-outlined chevron">
                                chevron_left
                            </span>
                        </button>
                        <button onClick={handleNextMonth} className='chevron-btn'>
                            <span className="material-icons-outlined chevron">
                                chevron_right
                            </span>
                        </button>
                    
                </div>
            </header>
            
            <div className="div-smallCalendar">
                {currentMonth[0].map((day,i) => (
                    <span className="span-dayNames" key={i}>
                        {day.format('dd').charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                            <button key={idx}
                                    className={`smallCalendar-btn ${getDayClass(day)}`}
                                    onClick={() => {handleButtonClick(day)}}>
                                <span className='span-smText'>
                                    {day.format('D')}
                                </span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>

        
    )
}
