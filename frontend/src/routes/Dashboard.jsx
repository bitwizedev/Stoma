import React from "react";
import { Navbar } from "../components";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


export default function Dashboard(){
    return(
        
        <div>
            <Navbar/>
            <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
        <p>code</p>
        </div>
    );
}

