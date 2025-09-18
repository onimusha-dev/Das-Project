import SideMenuBar from '@/components/SideMenuBar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <SidebarProvider>
            <SideMenuBar />
            <main>
                <SidebarTrigger />
                <Outlet />
            </main>
        </SidebarProvider>
    )
}

export default MainLayout