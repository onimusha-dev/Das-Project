import { NavLink } from "react-router-dom"
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
import { useState } from "react";

const SideMenuBar = () => {
      const [isSelected, setIsSelected] = useState<number>(0)

      return (
            <Sidebar>
                  <SidebarHeader className="bg-blue-900">
                        <h1>header</h1>
                  </SidebarHeader>
                  <SidebarContent className="flex flex-col gap-0 bg-blue-900">
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
                                          onClick={() => setIsSelected(index)}
                                          className={`flex items-center px-10 py-5 border-b-1 border-white/5 ${isSelected === index ? 'bg-gradient-to-l from-white/15 to-transparent text-white border-r-5 border-r-orange-600' : 'text-white/50'}`}
                                    >
                                          <div className="flex items-center justify-center">{item.icon}</div>
                                          <h2 className="ml-3">
                                                {item.title}
                                          </h2>
                                    </NavLink>
                              ))
                        }
                  </SidebarContent>
                  <SidebarFooter className="bg-blue-900">
                        <NavLink to="/settings"
                              className={`flex items-center gap-3 px-10 py-5 border-t-1 border-white/15 text-white `}
                        ><MdSettings size={24} /> Settings</NavLink>
                        <NavLink to="/auth"
                              className={`flex items-center gap-3 px-10 py-5 text-white mb-8`}
                        ><MdLogout size={24} /> Settings</NavLink>
                  </SidebarFooter>
            </Sidebar>
      )
}

export default SideMenuBar