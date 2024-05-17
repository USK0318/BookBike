import React from 'react';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBBox className="shadow" style={{ backgroundColor: '#141417', color: 'white' }}>

      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <span className="ms-3 h5 font-weight-bold">Book bike</span>
            <p className="my-3" style={{ width: '250px' }}>
              Explore the world with our bikes and book a test ride today.for more information visit our website.enjoy the restless rideing experience.
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Book Bike
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <span style={{ color: 'white' }}>Modles</span><br/>
              <span style={{ color: 'white' }}>About Us</span><br/>
              <span style={{ color: 'white' }}>Contact</span><br/>
              <span style={{ color: 'white' }}>Blog</span>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <span style={{ color: 'white' }}>Support</span><br/>
              <span style={{ color: 'white' }}>Sign Up</span><br/>
              <span style={{ color: 'white' }}>Sign In</span>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Explore
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <span style={{ color: 'white' }}>Models</span><br/>
              <span style={{ color: 'white' }}>Offers</span><br/>
              <span style={{ color: 'white' }}>Events</span>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Book Bike, 2024. All rights reserved.</small>
      </CDBBox>
    </CDBBox>
  );
};
