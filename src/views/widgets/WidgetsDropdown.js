/* eslint-disable */
import React, { useEffect, useState } from 'react'
import '../css/main.css'
import { CCardHeader, CCardBody, CCardTitle, CCardText, CCard, CRow, CCol } from '@coreui/react'
import { sygnet } from 'src/assets/brand/sygnet'
import { getTotalDrivers } from '../api/api'


const WidgetsDropdown = () => {
    const[drivres,setdrivers]= useState([30])
    useEffect(()=>{
      //  getDrivers()
    },[])

    const getDrivers = async() => {
       const Drivers = await getTotalDrivers() 
       console.log(Drivers.data[0]);
       setdrivers(Drivers.data)
    }
  return (
   <>
    <CRow >
        <CCard color="secondary"
            textColor="white"
            className="mb-3 menuCard">
            <CCardBody>
                <CCardText className='manuText'>
                    3 <br/>
                    Registered Resellers 
                </CCardText>
            </CCardBody>
        </CCard>
        <CCard color="secondary"
            textColor="white"
            className="mb-3 menuCard">
            <CCardBody>
                <CCardText className='manuText'>
                    50 <br/>
                    Vehicles in Transite 
                </CCardText>
            </CCardBody>
        </CCard>
        <CCard color="secondary"
            textColor="white"
            className="mb-3 menuCard">
            <CCardBody>
                <CCardText className='manuText'>
                    11 <br/>
                    New Users
                </CCardText>
            </CCardBody>
        </CCard>
        <CCard color="secondary"
            textColor="white"
            className="mb-3 menuCard">
            <CCardBody>
                <CCardText className='manuText'>
                    2 <br/>
                    Subscription Expiring soon 
                </CCardText>
            </CCardBody>
        </CCard>
    </CRow>
    <CRow style={{margin:'200px', marginBottom:'50px'}}>
        <CCard color="secondary"
            textColor="white"
            className="mb-3 menuCard">
            <CCardBody>
                <CCardText className='manuText'>
                    73 <br/>
                    Devices Online
                </CCardText>
            </CCardBody>
        </CCard>
        <CCard color="secondary"
            textColor="white"
            className="mb-3 menuCard">
            <CCardBody>
                <CCardText className='manuText'>
                    {drivres} <br/>
                    Total Drivers 
                </CCardText>
            </CCardBody>
        </CCard>
        <CCard color="secondary"
            textColor="white"
            className="mb-3 menuCard">
            <CCardBody>
                <CCardText className='manuText'>
                    7 <br/>
                    Subscribed Clients
                </CCardText>
            </CCardBody>
        </CCard>
        <CCard color="secondary"
            textColor="white"
            className="mb-3 menuCard">
            <CCardBody>
                <CCardText className='manuText'>
                    3 <br/>
                    Support Requests 
                </CCardText>
            </CCardBody>
        </CCard>
   </CRow>
   </>
  )
}

export default WidgetsDropdown
