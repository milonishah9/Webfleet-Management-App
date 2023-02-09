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



// /* eslint-disable */
// import { CCardHeader,CNavbar, CBadge, CDropdownToggle, CDropdownDivider, CButton, CDropdown, CNavbarToggler, CContainer,  CFormInput, CForm, CDropdownMenu, CNavItem, CNavLink, CNavbarNav, CNavbarBrand, CDropdownItem,  CCollapse,  CCardBody, CCardTitle, CCardText, CCard, CRow, CCol, CCardFooter } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import React from 'react'
// import {cilTruck, cilLocationPin} from '@coreui/icons'

// const VehicleTracking = () => {
   
//    return (
//    <div className='tarcking_div'>
//         <div className='tracking_vehicle'>
//             <div>
//             <CFormInput
//                 type="text"
//                 placeholder="Search..."
//                 className='input_vehicle'
//                 readOnly
//                 />
//             </div>
//             {[
//             { color: 'dark', textColor: 'black', header: 'Arun', location:'Goa', ship:13874346 ,clientName: 'sharans' },
//             { color: 'white', textColor: 'black',header: 'Suraj', location:'Nikol', ship:13874347 ,clientName: 'Rohit' },
//             { color: 'white', textColor: 'black ',header: 'Vikash', location:'Vadodara', ship:13874348 ,clientName: 'Ayushman' },
//             { color: 'dark', textColor: 'black',header: 'Yogesh' , location:'Surat', ship:13874349,clientName: 'Saiz'},
//             { color: 'dark' ,header: 'Govind', location:'ahmedabad', ship:13874350,clientName: 'Akash'},
//             { color: 'dark', textColor: 'Navin',header: 'Hemal', location:'Indore', ship:13874351 ,clientName: 'Neha'},
//             { color: 'dark',header: 'Jigar', location:'Varanasi', ship:13874352,clientName: 'sharans'},
//             { color: 'dark', textColor: 'white' ,header: 'Rahul', location:'Pune', ship:13874353,clientName: 'sharans'},
//             ].map((item, index) => (
            
//             <CCard
//             color={item.color}
//             textColor='black'
//             className="mb-3 tracking_card"
//             style={{ maxWidth: '18rem',margin:'20px' }}
//             key={index}
//             >
//             <CCardHeader><span className='opcity_tracking'>Shipment number</span> <br/>
//                         <span className='ship_tracking'>{item.ship}</span>  <br/>
//                         <span className='location_tracking'>{item.location}</span></CCardHeader>
            
//             <CCardBody>
//                 <CCardText>
//                     <div>
//                     <CIcon className='icon_tracking' icon={cilLocationPin}/> &nbsp;&nbsp;<span className='place_tracking'>Nikol</span>  <br/>&nbsp;&nbsp;<span className='opcity_tracking'>Manohar villa</span>
//                     </div>
//                     <div>
//                     <CIcon className='icon_tracking' icon={cilTruck} /> &nbsp;&nbsp; <span className='place_tracking'>Naroda</span> <br/>&nbsp;&nbsp;<span className='opcity_tracking'>Parshwanath</span>
//                     </div>
               
               
//                 </CCardText>
//             </CCardBody>

//             <CCardFooter>
//                 <CCardText>
//                     <span className='opcity_tracking'>Client </span> <br/>
//                     <span className='ship_tracking'>{item.clientName}</span> <br/>
//                     <span className='location_tracking'>London,UK</span>
//                 </CCardText>
//             </CCardFooter>
//             </CCard>
//             ))}
//         </div>
//         <div className='tracking_map'>

//         </div>



// </div>
  
//   )
// }

// export default VehicleTracking
