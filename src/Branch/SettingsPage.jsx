import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SettingsPage = () => {
  const [selectedSetting, setSelectedSetting] = useState(1);
  const handleClick = (setting) => {
    setSelectedSetting(setting);
  };
  const isSelected = (setting) => selectedSetting === setting;
  const settings = [
    { id: 1, name: "General Information" },
    { id: 2, name: "Working Hours" },
    { id: 3, name: "Services" },
    { id: 4, name: "Manage Technicians" },
  ];
  return (
    <main>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6} lg={3}>
            <div className="text-center">
              <img src="https://i.pravatar.cc/100" alt="avatar" className="rounded-circle" />
              <h2 className="mb-0">John Doe</h2>
              <h5 className="text-muted fw-normal mt-0">Admin</h5>
            </div>
            <ul className="d-flex flex-column mt-5">
              {settings.map((setting) => (
                <li
                  key={setting.id}
                  className={"mb-3 " + (isSelected(setting.id) && "text-primary fw-bold")}
                  onClick={() => handleClick(setting.id)}
                >
                  {setting.name}
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={6} lg={9}>
            {isSelected(1) && <p>paragraph 1</p>}
            {isSelected(2) && <p>paragraph 2</p>}
            {isSelected(3) && <p>paragraph 3</p>}
            {isSelected(4) && <p>paragraph 4</p>}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SettingsPage;
