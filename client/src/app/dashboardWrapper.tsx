import React from 'react'
import Navbar from './(components)/Navbar'

const DashboardWrapper = ({children}:{children:React.ReactNode}) => {
  return (<div className={`dark flex bg-gray-50 text-gray-900 min-h-screen`}>

    side
    <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-200 md:pl-72`}>
    <Navbar />
    {children}
    </main>
    
    </div>)
  
}

export default DashboardWrapper