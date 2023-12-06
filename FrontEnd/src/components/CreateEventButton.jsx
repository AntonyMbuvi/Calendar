import React from 'react'
import plusImg from '../assets/plus.svg'
import '../styles/createEventButton.css'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function CreateEventButton() {
  const {setShowEventModal} = useContext(GlobalContext)

  return (
    <button className="createEvent-button" onClick={() => setShowEventModal(true)}>
        <img className="createEvent-img" src={plusImg} alt="Image" />
        <span className="createEvent-span">Create</span>
    </button>

  )
}
