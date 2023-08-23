import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ClipLoader } from 'react-spinners'
import { useSelector } from 'react-redux'

const override = {
  position: "absolute",
  top: "0",
  left: "0",
  textAlign: "center",
  right: "0",
  bottom: "0",
  backgroundColor: "rgb(0 0 0 / 30%)",
  zIndex: "9999",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const Layout = () => {
  const statusLoading = useSelector(state => state.globalLoading.status)
  return (
      <div>
        {
          statusLoading? 
          <div style={override}>
            <ClipLoader loading={true} color='#fff' />
          </div>: ''
        }
          <Outlet />
          <ToastContainer />
      </div>
  )
}

export default Layout