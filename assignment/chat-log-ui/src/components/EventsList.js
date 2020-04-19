/// DELETE ME LATER ================

import React, {useState,useEffect} from 'react';
import axios from 'axios';

export default function EventsList() {
    const [events,setEvents] = useState([]);
  
    useEffect(()=>{
        axios.get('http://localhost:3030/logs/events')
        .then(res =>{
            console.log(res.data);
            const events = res.data;
            setEvents(events);
        });
    },[]);

    return (
        <>
        <ul>
            {events.map(event => (
                <li key={event.id}>{event.eventDesc}</li>
            ))}
        </ul>
    </>
    );
}
