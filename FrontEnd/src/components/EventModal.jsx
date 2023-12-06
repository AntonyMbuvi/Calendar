import React from 'react'
import '../styles/eventModal.css'
import { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function EventModal() {
    const {setShowEventModal, daySelected, dispatchCalEvent, selectedEvent, setSelectedEvent } = useContext(GlobalContext)
    const labelsClasses = ["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51","#bc4749"];
    
    const [title, setTitle] = useState(
        selectedEvent ? selectedEvent.title : ''
    );
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : ''
    );
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent 
        ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
        : labelsClasses[0]
    );

      
    function handleSubmit(e) {
        e.preventDefault();
        const calendarEvent = {
          title,
          description,
          label: selectedLabel,
          day: daySelected.valueOf(),
          id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        if(selectedEvent){
            dispatchCalEvent({ type: "update", payload: calendarEvent });
        }else{
            dispatchCalEvent({ type: "push", payload: calendarEvent });
        }
        setShowEventModal(false);
    }


  return (
    <div className="mainEvent-div">
        <form className="event-form">
            <header className="event-header">
                <span className="icon material-icons-outlined">
                    drag_handle
                </span>
                <div>
                    {selectedEvent && (
                        <span className="icon material-icons-outlined" 
                                style={{cursor: 'pointer', 
                                        marginRight : '15px'}}
                                onClick={() => {
                                    dispatchCalEvent({type: 'delete', payload: selectedEvent})
                                    setShowEventModal(false)
                                }}>
                            delete
                        </span>
                    )}
                    <button className='chevron-btn' onClick={() =>{
                        setShowEventModal(false)
                        setSelectedEvent(null)
                    }}>
                        <span className="icon material-icons-outlined">
                            close
                        </span>
                    </button>
                </div>
            </header>
            <div className="eventDiv-container">
                <div className="event-gridDiv">
                    <input type="text" className="eventInput" placeholder="Add Title" 
                            name={title} required onChange={(e) => setTitle(e.target.value)} 
                            defaultValue={title} // Set the default value here
                             />
                    <div className='gridsDiv'>
                        <span className="icon material-icons-outlined grid2-3">
                            schedule
                        </span>
                        <p> {daySelected.format('dddd, MMMM DD')} </p>
                    </div>
                    <div className='gridsDiv'>
                        <span className="icon material-icons-outlined">
                            segment
                        </span>
                        <input type="text" className="eventInput eventDescription" placeholder="Add a description" 
                                name={description} required 
                                defaultValue={description}
                                onChange={(e) => setDescription(e.target.value) } />
                    </div>
                    <div className='gridsDiv'>
                        <span className="icon material-icons-outlined">
                            bookmark
                        </span>
                        <div className='colorDiv'>
                            {labelsClasses.map((lblClass, i) => (
                                <span key={i} onClick={() => setSelectedLabel(lblClass)} className='colorSpan' 
                                    style={{backgroundColor: lblClass}}>
                                    {selectedLabel === lblClass && (
                                        <span className="icon material-icons-outlined">
                                            check
                                        </span>
                                    )}
                                </span>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer-container">
                <button type="submit" onClick={(e)=>{
                    handleSubmit(e)
                    setSelectedEvent(null)
                }} className="btnFooter">
                    Save
                </button>
            </footer>
        </form>
    </div>

  )
}
