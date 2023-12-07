import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext' 
import '../styles/eventLister.css';

export default function EventLister() {

    const {savedEvents, setSelectedEvent, setShowEventModal } = useContext(GlobalContext)

    return (
        <React.Fragment>
            <div className='mainSmall-div listerLength'> 
                <p className='smallHeader-p'> Lets list the events here</p>
                {savedEvents.map((evt,idx) => (
                    <div className='dayTask' key={idx} style={{backgroundColor : evt.label}}
                            onClick={() => {
                                setSelectedEvent(evt);
                                setShowEventModal(true)
                            }}>
                        {evt.title}
                    </div>
                ))}
            </div>
            
        </React.Fragment>
    )
}
