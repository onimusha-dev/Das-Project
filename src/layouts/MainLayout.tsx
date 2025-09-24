import Header from '@/components/Header'
import SideMenuBar from '@/components/SideMenuBar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <SidebarProvider className='min-h-screen w-full overflow-hidden'>
            <SideMenuBar />
            <div className='relative flex flex-1 bg-gray-100'>
                <Header />
                <main className='w-full mt-28'>
                    <Outlet />
                </main>
            </div>
        </SidebarProvider>
    )
}

export default MainLayout