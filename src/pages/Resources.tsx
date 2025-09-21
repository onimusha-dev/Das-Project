import { NavLink, Outlet } from "react-router-dom"

const Resources = () => {
  return (
    <section className="px-5 my-10">
      <h2 className="text-3xl font-medium pb-5">
        Resources
      </h2>
      <ul className="flex">
        <li className="mb-5">
          <NavLink
            to={'files'}
            className={({ isActive }) => `flex font-medium items-center px-5 py-3 transition-colors ease-in-out ${isActive ? 'text-blue-900 border-b-3 border-b-blue-900 duration-300' : 'text-black/50 hover:text-black/75 duration-150'}`}
          >
            <h2 className="mx-3">
              Files
            </h2>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'categories'}
            className={({ isActive }) => `flex font-medium items-center py-3 transition-colors ease-in-out ${isActive ? 'text-blue-900 border-b-3 border-b-blue-900 duration-300' : 'text-black/50 hover:text-black/75 duration-150'}`}
          >
            <h2 className="mx-4">
              category
            </h2>
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </section>
  )
}

export default Resources