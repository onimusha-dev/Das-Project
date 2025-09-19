import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { SlashIcon } from "lucide-react"
import { NavLink, Outlet, useLocation } from "react-router-dom"

const ContentManagement = () => {
  const currentPath: any = useLocation().pathname.split("/").pop()

  return (
    <section className="px-5 mt-10">
      <div className="flex justify-between mb-3">
        <Breadcrumb>
          <BreadcrumbList className="text-3xl font-medium">
            <BreadcrumbItem>
              <BreadcrumbLink>
                <NavLink to="/content-management">
                  Content Management
                </NavLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator >
              <div><SlashIcon size={28} className="-rotate-15" /></div>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>
                <p className="font-medium">{currentPath === "content-management" ? '' : currentPath}</p>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Button className="bg-blue-900 py-7">
          + Add New Banner
        </Button>
      </div>
      <Outlet />
    </section>
  )
}

export default ContentManagement