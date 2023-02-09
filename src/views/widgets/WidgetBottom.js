/* eslint-disable */
import React from 'react'
import '../css/main.css'
import { CChart } from '@coreui/react-chartjs'
import {
    CTableRow,
    CCard,
    CTableDataCell,
    CTableBody,
    CCardBody,
    CCardHeader,
    CTable,
    CBadge,
    CCardTitle
  } from '@coreui/react'
  const style = {
    body:{
        display:'flex'
    },
    cardOne:{
        width:'700px',
        margin:'10px',
        border:'none'
    },
    cardTwo:{
        width:'550px',
        height:'350px',
        margin:'10px',
        border:'none'
    }

}


const WidgetBottom = () => {
  return (
    <div style={style.body}>
    <CCard style={style.cardOne}>
    <CCardTitle style={{padding:'10px'}}>    Vehicle Status</CCardTitle>
       
        <CCardBody>
        <CTable>
            <CTableBody>
            <CTableRow>
                <CTableDataCell>Active</CTableDataCell>
                <CTableDataCell><CBadge color="success" shape="rounded-pill">3</CBadge></CTableDataCell>
            </CTableRow>
            <CTableRow>
                <CTableDataCell>Inactive</CTableDataCell>
                <CTableDataCell><CBadge color="info" shape="rounded-pill">1</CBadge></CTableDataCell>
            </CTableRow>
            <CTableRow>
                <CTableDataCell>In Shop</CTableDataCell>
                <CTableDataCell><CBadge color="warning" shape="rounded-pill">1</CBadge></CTableDataCell>
            </CTableRow>
            <CTableRow>
                <CTableDataCell>Out of Service</CTableDataCell>
                <CTableDataCell><CBadge color="danger" shape="rounded-pill">1</CBadge></CTableDataCell>
            </CTableRow>
            </CTableBody>
            </CTable>
        </CCardBody>
    </CCard>
    <CCard style={style.cardTwo}>
      <CCardTitle style={{padding:'10px'}}>Average Time / service  :  7:46</CCardTitle>
      <CCardBody>
            <CChart className='' style={{height:'500px'}}
        type="doughnut"
        data={{
            labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
            datasets: [
            {
                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                data: [40, 20, 80, 10],
            },
            ],
        }}
        />
      </CCardBody>
    </CCard>

    </div>
  )
}

export default WidgetBottom