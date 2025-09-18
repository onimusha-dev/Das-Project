import Header from '@/components/Header'
import SideMenuBar from '@/components/SideMenuBar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <SidebarProvider className='w-screen'>
            <SideMenuBar />
            <main className='w-full bg-gray-100'>
                <Header />
                <Outlet />
            </main>
        </SidebarProvider>
    )
}

export default MainLayout