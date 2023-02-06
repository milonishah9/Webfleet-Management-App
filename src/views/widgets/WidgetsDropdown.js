/* eslint-disable */
import React from 'react'
import { CCardHeader, CCardBody, CCardTitle, CCardText, CCard, CRow, CCol } from '@coreui/react'

const WidgetsDropdown = () => {
  return (
   <>
    <CRow>
        <CCard color="secondary"
            textColor="white"
            className="mb-3"
            style={{ maxWidth: '18rem', backgroundColor:"red" ,padding:'20px 20px ',  margin: '20px'}}
            >
            <CCardBody>
                <CCardTitle>Registered Resellers</CCardTitle>
                <CCardText>
                3
                </CCardText>
            </CCardBody>
        </CCard>
        <CCard color="dark"
            textColor="white"
            className="mb-3"
            style={{ maxWidth: '18rem' ,borderWidth:'0px',padding:'20px 20px ', margin: '20px'}}
            >
            <CCardBody>
                <CCardTitle>Vehicles in Transite</CCardTitle>
                <CCardText>
                    50
                </CCardText>
            </CCardBody>
        </CCard>
        <CCard color="secondary"
            textColor="white"
            className="mb-3"
            style={{ maxWidth: '18rem' ,padding:'20px 20px ', margin: '20px' }}
            >
            <CCardBody>
                <CCardTitle>New Users</CCardTitle>
                <CCardText>
                11
                </CCardText>
            </CCardBody>
        </CCard>
        <CCard color="dark"
            textColor="white"
            className="mb-3"
            style={{ maxWidth: '18rem' ,borderWidth:'0px',padding:'20px 20px ', margin: '20px' }}
            >
            <CCardBody>
                <CCardTitle>Subscription Expiring soon </CCardTitle>
                <CCardText>
                2
                </CCardText>
            </CCardBody>
        </CCard>
   </CRow>

   <CRow style={{margin:'200px', marginBottom:'50px'}}>
        <CCard color="dark"
            textColor="white"
            className="mb-3"
            style={{ maxWidth: '18rem' ,borderWidth:'0px' ,padding:'30px 20px ', margin: '20px'}}
            >
            <CCardBody>
                <CCardTitle>Devices Online</CCardTitle>
                <CCardText>
                  73
                </CCardText>
            </CCardBody>
        </CCard>
        <CCard color="secondary"
            textColor="white"
            className="mb-3"
            style={{ maxWidth: '18rem', padding:'30px 20px ', margin: '20px'}}
            >
            <CCardBody>
                <CCardTitle>Total Drivers</CCardTitle>
                <CCardText>
                    53
                </CCardText>
            </CCardBody>
        </CCard>
        <CCard color="secondary"
            textColor="white"
            className="mb-3"
            style={{ maxWidth: '18rem',borderWidth:'0px' , padding:'30px 20px ',margin: '20px' }}
            >
            <CCardBody>
                <CCardTitle>Subscribed Clients</CCardTitle>
                <CCardText>
                  7
                </CCardText>
            </CCardBody>
        </CCard>
        <CCard color="dark"
            textColor="white"
            className="mb-3"
            style={{ maxWidth: '18rem' ,borderWidth:'0px',padding:'30px 20px ', margin: '20px' }}
            >
            <CCardBody>
                <CCardTitle>Support Requests</CCardTitle>
                <CCardText>
                    3
                </CCardText>
            </CCardBody>
        </CCard>
   </CRow>
   </>
  )
}

export default WidgetsDropdown
