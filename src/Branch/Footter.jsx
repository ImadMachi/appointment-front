import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import IconBox from '../components/IconBox';
const Footter = () => {
return( 
  <div className="mx-4  z-index-1">

    <footer className="text-white text-center text-lg-start bg-primary rounded-1">
 
    <div className="container p-4">
   
      <div className="row mt-4">
  
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About company</h5>
  
          <p>
          <h3 className=''>How directors of a company are appointed?</h3>
In public or a private company, a total of two-thirds of directors are appointed by the shareholders.
 The rest of the one-third remaining members are appointed with regard to guidelines
          </p>
  
        
        </div>
        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
  
          <div className="form-outline form-white mb-4">
            <input type="text" id="formControlLg" className="form-control form-control-lg" />
            <label className="form-label" for="formControlLg">Search</label>
          </div>
  
          <ul className="fa-ul">
            <li className="mb-3">
            
            <IconBox className="">
            <FontAwesomeIcon icon={ faHome } />
          </IconBox><span className="ms-2">fstg Marrakech ,Morroco</span>
            </li>
            <li className="mb-3">
            <IconBox className="">
            <FontAwesomeIcon icon={faEnvelope} />
          </IconBox><span className="ms-2">info@Geeks.com</span>
            </li>
            <li className="mb-3">
            <IconBox className="">
            <FontAwesomeIcon icon={faPhone} />
          </IconBox><span className="ms-2">+ 01 789 567 88 567 88</span>
            </li>
            <li className="mb-3">
            <IconBox className="">
            <FontAwesomeIcon icon={faPrint} />
          </IconBox><span className="ms-2">+ 01 234 567 89 567 88</span>
            </li>
          </ul>
        </div>
    
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>
  
          <table className="table text-center text-white">
            <tbody className="font-weight-normal corsur-pointer">
              <tr>
                <td>Monday : </td>
                <td>8am - 7pm</td>
              </tr>
              <tr>
                <td>Tuesday : </td>
                <td>8am - 7pm</td>
              </tr>
              <tr>
                <td>Wednesday : </td>
                <td>8am - 8pm</td>
              </tr>
              <tr>
                <td>Thursday : </td>
                <td>8am - 8pm</td>
              </tr>
              <tr>
                <td>Friday :</td>
                <td>8am - 12am</td>
              </tr>
              <tr>
                <td>Saturday :</td>
                <td>8am - 3am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
   
      </div>

    </div>


    
  
  </footer>
  
</div>
  )
}
export default Footter;