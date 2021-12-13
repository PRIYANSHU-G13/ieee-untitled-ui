import React from "react";
import { MDBIcon } from 'mdb-react-ui-kit';
import "../asset/css/Footer.css";


function Footer() {
  return (
    <div>
      <footer id="footer">
      <div className="icon-class">
      <>
      <MDBIcon fab icon="twitter" className="foot-icon icons" size='1x'/>
      <MDBIcon fab icon="linkedin" className="foot-icon icons" size='1x'/>
      <MDBIcon fab icon="facebook" className="foot-icon  icons" size='1x'/>
      <MDBIcon fab icon="github" className="foot-icon icons" size='1x'/>
      <MDBIcon fab icon="angellist" className="foot-icon icons" size='1x'/>
      <MDBIcon fab icon="dribbble" className="foot-icon icons" size='1x'/>
      </>
      </div>
        <p> ©Copyright 2077 Untitled UI. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
