import { NavLink, Outlet } from "react-router-dom"

const Resources = () => {
  return (
    <section className="px-5 my-10">
      <h2 className="text-3xl font-medium pb-5">
        Resources
      </h2>
      <ul className="flex">
        {
          [
            { title: "Files", href: "files" },
            { title: "Category", href: "categories" },
          ]
            .map((item, index: number) => (
              <li className="mb-5">
                <NavLink
                  key={index}
                  to={item.href}
                  className={({ isActive }) => `flex font-medium items-center pr-5 py-3 transition-colors ease-in-out ${isActive ? 'text-blue-900 border-b-3 border-b-blue-900 duration-300' : 'text-black/50 hover:text-black/75 duration-150'}`}
                >
                  <h2 className="ml-3">
                    {item.title}
                  </h2>
                </NavLink>
              </li>
            ))
        }
      </ul>
      <Outlet />
    </section>
  )
}

export default Resources