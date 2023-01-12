import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Container } from "react-bootstrap";
import AppointmentModal from "./AppointmentModal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setselectedAppointment] = useState({ extendedProps: {} });
  const [events, setEvents] = useState([
    {
      title: "Appointment 1",
      start: "2023-01-12",
      text: "test",
      extendedProps: {
        id: "#D245874",
        customer: "Imad Machi",
        phone: "+212 628-221955",
        email: "imadoxmachi@gmail.com",
        status: "Upcoming",
      },
    },
    {
      title: "Appointment 2",
      start: "2023-01-10",
      extendedProps: {
        id: "#D245875",
        customer: "Imad Machi",
        phone: "+212 628-221955",
        email: "imadoxmachi@gmail.com",
        status: "Upcoming",
      },
    },
    {
      title: "Appointment 3",
      start: "2023-01-01",
      extendedProps: {
        id: "#D245876",
        customer: "Imad Machi",
        phone: "+212 628-221955",
        email: "imadoxmachi@gmail.com",
        status: "Upcoming",
      },
    },
  ]);

  const handleDateClick = (arg) => {
    setEvents([...events, { title: "New Appointment", start: arg.dateStr }]);
  };

  const handleEventClick = (info) => {
    setselectedAppointment(info.event);
    setIsModalOpen(true);
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
      {<AppointmentModal appointment={selectedAppointment} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </Container>
  );
};

export default Dashboard;
