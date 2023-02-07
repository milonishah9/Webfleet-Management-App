/* eslint-disable */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAuth } from 'src/views/api/api'
import '../../css/main.css'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const defaultvalue ={
  username:'',
  password:'',
}

const Login = () => {
  const Navigate = useNavigate();
  const [user,setuser]=useState(defaultvalue);
  const onValueChange = (e) =>{
    setuser({...user,[e.target.name]:e.target.value})
    console.log(user);
  }
  const loginUser = async() => {
    console.log(user);
    await loginAuth(user)
    .then((res)=>{
      console.log(res.data);
      if(res.data == 'user'){
        Navigate('/dashboard/home')
      }
      else{
        alert('user not found');
      }
    })
  }
 
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center ">
      <CContainer className=''>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4 login_card ">
                <CCardBody>
                  <CForm className='login_text'>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                        placeholder="Username" 
                        autoComplete="username"
                        name='username' onChange={(e)=>{onValueChange(e)}} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name='password' onChange={(e)=>{onValueChange(e)}}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4 login_btn" onClick={()=>loginUser()}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0 login_link">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white py-5 login_bg" style={{ width: '70%' }}>
                <CCardBody className="text-center ">
                  <div className='login_text'>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton className="mt-3 login_btn" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
