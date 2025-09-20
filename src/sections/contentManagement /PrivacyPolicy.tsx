import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SlashIcon } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const privacyPolicy = `
We understand that your privacy is important and that you care about how your personal data is used and shared online. We respect privacy of data entrusted with / received by us as you visit this website and/or use our service(s). We are committed to secure and protect your privacy and data of whichever nature, including that of business data, personal data, service data received in the capacity of a data processor etc., as per International standard practices, Information Technology Act, 2000 of India and GDPR. We are also committed to be transparent about what we collect and how we use it.

This privacy policy, which is legally binding Agreement between you and Skepper Creative Agency through click-wrap contract, provides details of both the parties rights and obligations regarding data being collected by us of different nature, purposes of such data collection, your right vis-a-vis such data collection, and how we ensure your privacy is maintained etc.

Any word of this policy defined under the definition section shall have the meaning provided herein, disregarding any contradictory definitions provided in any other legal/ other documents/ prevailing understanding of common people.
`;


const PrivacyPolicy = () => {
  const currentPath: any = useLocation().pathname.split("/").pop()

  return (
    <>
      <div className="flex justify-between mb-5 pb-5">
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
      </div>

      <section className="bg-white rounded-md shadow-xs border-1 p-10">
        <pre className="text-wrap ">{privacyPolicy}</pre>
      </section>
      <Sheet>
        <SheetTrigger>
          <Button className="bg-blue-900 hover:bg-blue-950 py-7 mt-10">
            + Add New Banner
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="p-10">
            <SheetTitle className="text-2xl font-semibold">Edit</SheetTitle>
            <SheetDescription>
              <form action="submit" className="select-none flex flex-col gap-3">
                <div>
                  <label className="text-lg font-medium block my-3" htmlFor="name">Name *</label>
                  <Input required type="text" id="name" name="name" placeholder="Enter the name" className="h-12 bg-blue-50 focus:outline-none focus:border-blue-600"></Input>
                </div>
              </form>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
export default PrivacyPolicy