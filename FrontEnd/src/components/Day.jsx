import '../styles/day.css'
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
import { useContext, useEffect, useState } from "react";

export default function Day({day , rowIdx}){

    const {setDaySelected, setShowEventModal, savedEvents, setSelectedEvent} = useContext(GlobalContext)
    const [dayEvents, setDayEvents] = useState([]);

    useEffect(() => {
        const events = savedEvents.filter((evt) => 
            dayjs(evt.day).format('DD-MM-YY')===day.format('DD-MM-YY')
        )
        setDayEvents(events)
    }, [savedEvents, day])

    function getCurrentDayClass(){
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
        ? 'highlighted'
        : '';

    }
    return (
        <div className="day-div">
            <header className="day-header">
                {rowIdx === 0 
                    && 
                <p className="day-p1">
                    {day.format('ddd').toUpperCase()}
                </p>}
                
                <p className={`day-p2 ${getCurrentDayClass()}`}>
                    {day.format('DD')}
                </p>

            </header>
            <div className="dayDiv-event"
                onClick={() => {
                    setDaySelected(day)
                    setShowEventModal(true)
                }}>
                {dayEvents.map((evt,idx) => (
                    <div className='dayTask' key={idx} style={{backgroundColor : evt.label}}
                            onClick={() => setSelectedEvent(evt)}>
                        {evt.title}
                    </div>
                ))}
            </div>
        </div>

    )
}