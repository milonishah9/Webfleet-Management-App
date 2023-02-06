/* eslint-disable */
import React from 'react'
import '../css/main.css'
import { CChartLine } from '@coreui/react-chartjs'
import {
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CCard,
    CCardTitle,
    CTableDataCell,
    CTableBody,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CTable,
    CBadge
  } from '@coreui/react'

  const style = {
    cardOne:{
      width:'852px',
      height:'310px',
      objectFit:'cover',
      margin:'10px',
      border:'none'
    },
    cardTwo:{
      width:'467px',
      height:'310px',
      margin:'10px',
      border:'none'
    },
    chartBody:{
      display:'flex'
    },
    Chart:{
     margin:'auto',
     width:'700px',
     height:'250px'
    }
  }

const WidgetDropdownChart = () => {
  return (
   <div style={style.chartBody}>
   <CCard style={style.cardOne}>
   <CCardTitle style={{padding:'10px'}}>Total Vehicles</CCardTitle>
    <CCardBody>
    <CChartLine style={style.Chart}
  type="line" 
  data={{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
      },
    ],
  }}
/>

</CCardBody>
</CCard>

<CCard style={style.cardTwo}>
<CCardTitle style={{padding:'10px'}}> Maintenance</CCardTitle>
  <CCardBody>
  <CTable>
 
  <CTableBody style={{padding:'50px 0px'}}>
    <CTableRow>
      <CTableDataCell>In-Service</CTableDataCell>
      <CTableDataCell><CBadge color="success" shape="rounded-pill">0</CBadge></CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableDataCell>Out-of-Service</CTableDataCell>
      <CTableDataCell><CBadge color="danger" shape="rounded-pill">0</CBadge></CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableDataCell>Disposed</CTableDataCell>
      <CTableDataCell><CBadge color="dark" shape="rounded-pill">0</CBadge></CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableDataCell>Missing</CTableDataCell>
      <CTableDataCell><CBadge color="warning" shape="rounded-pill">0</CBadge></CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
  </CCardBody>
</CCard>
   </div>
  )
}

export default WidgetDropdownChart