import { Outlet } from "react-router-dom"

export const AuthLayout = () =>{
  return (
    <div className="min-h-screen max-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img src={"/image.png"} alt="Student in classroom" className="w-full h-full object-cover" />
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 bg-gray-50">
        <div className="w-full max-w-md space-y-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
