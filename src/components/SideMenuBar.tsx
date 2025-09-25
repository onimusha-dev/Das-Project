import { Link, NavLink } from "react-router-dom"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "./ui/sidebar"
import {
      MdDashboard,
      MdPeople,
      MdContentPaste,
      MdLibraryBooks,
      MdNotifications,
      MdVolunteerActivism,
      MdInsights,
      MdFeedback,
      MdSettings,
      MdLogout
} from "react-icons/md";

const SideMenuBar = () => {

      return (
            <Sidebar>
                  <SidebarHeader className="bg-[#003072]">
                        <div className="">
                             <Link to={'/'}>
                             <img src="logo.png" alt="" className="" />
                             </Link>
                        </div>
                  </SidebarHeader>
                  <SidebarContent className="flex pt-8 flex-col gap-0 bg-[#003072]">
                        {
                              [
                                    { icon: <MdDashboard size={24} />, title: "Overview", href: "/overview" },
                                    { icon: <MdPeople size={24} />, title: "User Directory", href: "/user-directory" },
                                    { icon: <MdContentPaste size={24} />, title: "Content Management", href: "/content-management" },
                                    { icon: <MdLibraryBooks size={24} />, title: "Resources", href: "/resources" },
                                    { icon: <MdNotifications size={24} />, title: "Send Notification", href: "/send-notification" },
                                    { icon: <MdVolunteerActivism size={24} />, title: "Volunteers", href: "/volunteers" },
                                    { icon: <MdInsights size={24} />, title: "Analytics & Reports", href: "/analytics-and-reports" },
                                    { icon: <MdFeedback size={24} />, title: "Feedbacks", href: "/feedbacks" },

                              ].map((item, index: number) => (
                                    <NavLink
                                          key={index}
                                          to={item.href}
                                          className={({ isActive }) => `flex items-center pl-10 py-3 border-b-1 border-white/5 transition-colors ease-in-out ${isActive ? 'bg-gradient-to-l from-white/15 to-transparent text-white border-r-5 border-r-orange-600 duration-500' : 'text-white/50 duration-150 hover:text-white/75'}`}
                                    >
                                          <div className="flex items-center justify-center">{item.icon}</div>
                                          <h2 className="ml-3 text-sm">
                                                {item.title}
                                          </h2>
                                    </NavLink>
                              ))
                        }
                  </SidebarContent>
                  <SidebarFooter className="bg-[#003072] px-5 gap-0">
                        <NavLink to="/settings"
                              className={`flex items-center gap-3 pl-10 pb-3 py-8 text-sm border-t-1 border-white/15 text-white hover:text-white/75 `}
                        ><MdSettings size={24} /> Settings</NavLink>
                        <NavLink to="/auth"
                              className={`flex items-center gap-3 pl-10 py-3 mb-8 text-white text-sm hover:text-white/75`}
                        ><MdLogout size={24} /> Logout</NavLink>
                  </SidebarFooter>
            </Sidebar>
      )
}

export default SideMenuBar