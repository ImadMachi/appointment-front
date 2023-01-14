import { faBriefcase, faCalendar, faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

const ClientPage = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(1);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("09:30");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/list-services");
        setServices(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const handleBookAppointment = async () => {
    try {
      const result = await axios.post("/api/create-appointment", {
        service_id: selectedService,
        appointment_date: date,
        status: "upcoming",
        appointment_time: time,
      });
      if (result.status === 201) {
        setSuccess(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <main style={{ backgroundColor: "#F3F3F3", minHeight: "100vh" }}>
      <section style={{ boxShadow: "0 0 5px 3px rgba(0,0,0,0.1)", backgroundColor: "white" }}>
        <div className="container py-4 fs-4">John Doe</div>
      </section>
      <section>
        <div className="container">
          <h2 className="mt-5">Welcome!</h2>
          <p>
            Book your appointment in a few simple steps: Choose a service, pick your date and time, and fill in your details. See you soon!
          </p>
        </div>
      </section>
      <section>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex align-items-center bg-white shadow-sm">
                <span
                  style={{
                    height: "80px",
                    width: "80px",
                    lineHeight: "80px",
                    textAlign: "center",
                    borderRight: "solid 1px #eee",
                    color: "#a0a0a0",
                  }}
                >
                  <FontAwesomeIcon icon={faBriefcase} />
                </span>
                <p className="my-0" style={{ flexGrow: 1 }}>
                  <select
                    className="form-select border-0"
                    aria-label="Default select example"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    {services.map((service) => (
                      <option key={service.name} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex align-items-center bg-white shadow-sm">
                <span
                  style={{
                    height: "80px",
                    width: "80px",
                    lineHeight: "80px",
                    textAlign: "center",
                    borderRight: "solid 1px #eee",
                    color: "#a0a0a0",
                  }}
                >
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <p className="ps-3 my-0">John Doe</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 ">
              <label htmlFor="date" className="w-100">
                <div className="d-flex align-items-center bg-white shadow-sm">
                  <span
                    style={{
                      height: "80px",
                      width: "80px",
                      lineHeight: "80px",
                      textAlign: "center",
                      borderRight: "solid 1px #eee",
                      color: "#a0a0a0",
                    }}
                  >
                    <FontAwesomeIcon icon={faCalendar} />
                  </span>
                  <input
                    type="date"
                    id="date"
                    className="ps-3"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{ border: "none", color: "#333" }}
                  />
                </div>
              </label>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex align-items-center bg-white shadow-sm">
                <span
                  style={{
                    height: "80px",
                    width: "80px",
                    lineHeight: "80px",
                    textAlign: "center",
                    borderRight: "solid 1px #eee",
                    color: "#a0a0a0",
                  }}
                >
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <p className="my-0" style={{ flexGrow: 1 }}>
                  <select
                    className="form-select border-0"
                    aria-label="Default select example"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option value="09:30">09:30</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                    <option value="16:00">16:00</option>
                  </select>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div
                onClick={handleBookAppointment}
                className="text-white shadow-sm"
                style={{ height: "80px", lineHeight: "80px", backgroundColor: "#50497F", cursor: "pointer" }}
              >
                <p className="ps-3 my-0 text-center">Book Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {success ? (
        <div className="alert alert-success text-center">Done! See you soon</div>
      ) : error ? (
        <div className="alert alert-danger text-center">The date should be after today</div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default ClientPage;
