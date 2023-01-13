import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function Cardd() {
  return (
    <div className='d-flex justify-content-between
    '>
  <Cardd1 />
  <Cardd2/>
  <Cardd3/>
  <Cardd4/>
  </div>
  );
}

  function Cardd1() {
    return (
      <MDBCard className="m-4">
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
         <div className='text-center'>
          <MDBCardImage src='https://i.pravatar.cc/250' fluid alt='...' />
          </div>
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody className='text-center'>
          <MDBCardTitle>imad maachi</MDBCardTitle>
          <MDBCardText>
          Communication. ...
  Organization. ...
  Analytical Abilities. ...

          </MDBCardText>
          <MDBBtn href='#'>Contact</MDBBtn>
        </MDBCardBody>
        
      </MDBCard>
    );
}

function Cardd2() {
    return (
      <MDBCard className="m-4">
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <div className='text-center'>
          <MDBCardImage src='https://i.pravatar.cc/250' fluid alt='...' />
          </div>
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody className='text-center'>
          <MDBCardTitle>yassine echamkh</MDBCardTitle>
          <MDBCardText>
          Communication. ...
  Creativity. ...
  Project Management. ...
          </MDBCardText>
          <MDBBtn href='#'>Contact</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
}
    function Cardd3() {
  return (
    <MDBCard className="m-4">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
       <div className='text-center'>
        <MDBCardImage src='https://i.pravatar.cc/250' fluid alt='...' />
        </div>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='text-center'>
        <MDBCardTitle>chakir hicham</MDBCardTitle>
        <MDBCardText>

Analytical Abilities. ...
Creativity. ...
Project Management. ...
        </MDBCardText>
        <MDBBtn href='#'>Contact</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
function Cardd4() {
    return (
      <MDBCard className="m-4">
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <div className='text-center'>
          <MDBCardImage src='https://i.pravatar.cc/250' fluid alt='...' />
          </div>
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody className='text-center'>
          <MDBCardTitle>Achraf Kharbab</MDBCardTitle>
          <MDBCardText>
          Communication. ...
  Organization. ...
  Analytical Abilities. ...

          </MDBCardText>
          <MDBBtn href='#'>Contact</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
}