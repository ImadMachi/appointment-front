import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Container } from "react-bootstrap";
import AppointmentModal from "./AppointmentModal";
import axios from "axios";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setselectedAppointment] = useState({ extendedProps: {} });
  const [events, setEvents] = useState({ extendedProps: {} });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/list-appointment");
        setEvents(
          result.data.map((appointment) => ({
            title: appointment.service.name,
            start: appointment.appointment_date,
            extendedProps: {
              id: appointment.id,
              customer: appointment.client.name,
              phone: appointment.client.phone,
              email: appointment.client.email,
              status: appointment.status,
            },
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
        // dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
      {<AppointmentModal appointment={selectedAppointment} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </Container>
  );
};

export default Dashboard;
