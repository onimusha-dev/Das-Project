import { Outlet } from "react-router-dom"

const ContentManagement = () => {
  return (
    <section className="px-5 my-10">
      <Outlet />
    </section>
  )
}

export default ContentManagement