import Header from '@/components/Header'
import SideMenuBar from '@/components/SideMenuBar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <SidebarProvider className='min-h-screen w-full overflow-hidden'>
            <SideMenuBar />
            <SidebarInset className='bg-gray-100'>
                <Header />
                <div className="flex-1 overflow-auto h-full">
                  <Outlet />
                </div>
            </SidebarInset>
            
        </SidebarProvider>
    )
}

export default MainLayout