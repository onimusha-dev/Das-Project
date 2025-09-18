import { SidebarTrigger } from "./ui/sidebar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MdNotifications, MdAccountCircle, MdHelpOutline } from "react-icons/md";
import { Avatar } from "./ui/avatar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-1 justify-between items-center bg-white shadow-xs">
      <SidebarTrigger />
      <div className="flex items-center gap-2 mr-10 p-3">
        <NavLink
          to={"/notifications"}
          className="relative pr-5 border-r-2 ">
          <MdNotifications size={24} className="w-12 h-12 p-3 bg-black/5 hover:bg-black/10 rounded-full" />
          {true && <div className="absolute top-0 right-5 flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white">
            <p className="text-xs font-bold">{'6'}</p>
          </div>}
        </NavLink>
        <Popover>
          <PopoverTrigger className="flex pl-5">
            <Avatar className="w-15 h-15 border-3 border-green-500">fdd</Avatar>
            <div className="flex flex-col justify-center ml-3">
              <h3 className="font-bold">Oorja Munat ^</h3>
              <p className="text-xs text-gray-400 text-start">ADMIN</p>
            </div>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col w-fit">
            <NavLink to="/user-directory"
              className={`flex items-center p-3 gap-5 border-b-1 border-black/15`}
            ><MdAccountCircle size={24} /> User Management</NavLink>
            <NavLink to="/support"
              className={`flex items-center p-3 gap-5`}
            ><MdHelpOutline size={24} /> Support</NavLink>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

export default Header