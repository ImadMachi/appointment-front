import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Container } from "react-bootstrap";

const Dashboard = () => {
  const [events, setEvents] = useState([
    { title: "Appointment 1", start: "2022-12-10", text: "test", extendedProps: { description: "test" } },
    { title: "Appointment 2", start: "2022-12-01" },
    { title: "Appointment 3", start: "2022-01-10" },
  ]);

  const handleDateClick = (arg) => {
    setEvents([...events, { title: "New Appointment", start: arg.dateStr }]);
  };

  const handleEventClick = (info) => {
    // display a pop-up with the event title
    alert(info.event.extendedProps.description);
  };

  return (
    <Container className="mt-5">
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
    </Container>
  );
};

export default Dashboard;
