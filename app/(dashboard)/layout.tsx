import Sidebar from '@/components/ui/Sidebar';
import React from 'react'

const DashboardLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  )
}

export default DashboardLayout
