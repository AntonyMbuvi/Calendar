import React from 'react'
import CreateEventButton from './CreateEventButton'
import '../styles/sidebar.css'
import SmallCalendar from './SmallCalendar'
import EventLister from './EventLister'

export default function Sidebar() {
  return (
    <aside className='sidebar-aside'>
        <CreateEventButton />
        <SmallCalendar />
        <EventLister /> 
    </aside>
  )
}
