import React, { useState, useContext, useEffect } from "react";
import "./styles/App.css";
import { getMonth } from "./util";
import Month from './components/Month';
import CalendarHeader from "./components/CalendarHeader";
import GlobalContext from './context/GlobalContext'
import Sidebar from "./components/Sidebar";
import EventModal from "./components/EventModal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex, showEventModal} = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <React.Fragment>
      { showEventModal && <EventModal />}
      <div className="app-screen">
        <CalendarHeader />
        <div className="app-content">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
