import { MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/ruet.ac.bd' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>About RUET
              </h6>
              <p>
              Rajshahi University of Engineering & Technology (RUET) is the prestigious public Engineering University & center of excellence offers high quality education and research in the field of engineering and technology.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>RUET & other useful websites</h6>
              <p>
                <a href='https://www.ruet.ac.bd/' className='text-reset'>
                  ruet.ac.bd
                </a>
              </p>
              <p>
                <a href='https://admissionckruet.ac.bd/' className='text-reset'>
                admission ckruet
                </a>
              </p>
              <p>
                <a href='https://www.ete.ruet.ac.bd/' className='text-reset'>
                  RUET ETE
                </a>
              </p>
              <p>
                <a href='https://ictd.gov.bd/' className='text-reset'>
                  ICT Ministry
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <Link to='/ContactUs/' className='text-reset'>Contact Us</Link>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Profile
                </a>
              </p>
              <p>
              <p>
                <Link to='/ContactUs/' className='text-reset'>Help</Link>
              </p>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> RUET,Rajshahi-6204
              </p>
              <a href="mailto:online.library.ruet@gmail.com">
                <i className='fas fa-envelope me-3'></i>
                online.library.ruet@gmail.com
              </a><br/>
              <a href="tel:+8801646600318">
                <i className='fas fa-phone me-3'></i> +8801646600318
              </a><br/>
              <a href="tel:+8801646600318">
                <i className='fas fa-print me-3'></i> +88 016 46600318
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href=''>
          online-library.com
        </a>
      </div>
    </MDBFooter>
  );
}