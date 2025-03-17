import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useUserAuth } from '../../hooks/userUserAuth'
export default function  () {
  useUserAuth()
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className='my-5 mx-auto'></div>
    </DashboardLayout>

  )
}
