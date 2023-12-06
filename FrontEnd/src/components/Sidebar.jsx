import React from 'react'
import CreateEventButton from './CreateEventButton'
import '../styles/sidebar.css'
import SmallCalendar from './SmallCalendar'

export default function Sidebar() {
  return (
    <aside className='sidebar-aside'>
        <CreateEventButton />
        <SmallCalendar />
    </aside>
  )
}
