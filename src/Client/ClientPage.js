import { faBriefcase, faCalendar, faClock, faTimesSquare, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClientPage = () => {
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
              <div className="d-flex align-items-center bg-white">
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
                <p className="ps-3 my-0">Service Name</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex align-items-center bg-white">
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
              <label for="date" className="w-100">
                <div className="d-flex align-items-center bg-white ">
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
                  {/* <p className="ps-3 my-0">27-10-2000</p>  */}
                  <input type="date" id="date" className="ps-3" style={{ border: "none", color: "#333" }} />
                </div>
              </label>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex align-items-center bg-white">
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
                <p className="ps-3 my-0">04:15 AM</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="text-white" style={{ height: "80px", lineHeight: "80px", backgroundColor: "#50497F", cursor: "pointer" }}>
                <p className="ps-3 my-0 text-center">Book Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClientPage;
