import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { FilterIcon, SaudiRiyalIcon, SearchCheckIcon, SearchIcon } from "lucide-react"


const tableData = [
  {
    no: 8,
    title: "Privacy Policy",
    image: "/images/privacy.jpg",
    priority: 3,
    publishedOn: "2025-02-14",
    status: "Published",
    action: "Edit"
  },
  {
    no: 9,
    title: "About Us Section",
    image: "/images/about.jpg",
    priority: 2,
    publishedOn: "2025-02-16",
    status: "Draft",
    action: "Edit"
  },
  {
    no: 10,
    title: "Impact Report",
    image: "/images/impact.jpg",
    priority: 1,
    publishedOn: "2025-02-18",
    status: "Published",
    action: "Edit"
  },
  {
    no: 1,
    title: "Homepage Banner 1",
    image: "/images/banner1.jpg",
    priority: 1,
    publishedOn: "2025-01-10",
    status: "Published",
    action: "Edit"
  },
  {
    no: 2,
    title: "Homepage Banner 2",
    image: "/images/banner2.jpg",
    priority: 2,
    publishedOn: "2025-01-15",
    status: "Draft",
    action: "Edit"
  },
  {
    no: 3,
    title: "Our Partners Intro",
    image: "/images/partners.jpg",
    priority: 1,
    publishedOn: "2025-02-01",
    status: "Published",
    action: "Edit"
  },
  {
    no: 4,
    title: "Team Member - Alice",
    image: "/images/alice.jpg",
    priority: 1,
    publishedOn: "2025-02-05",
    status: "Published",
    action: "Edit"
  },
  {
    no: 5,
    title: "Team Member - Bob",
    image: "/images/bob.jpg",
    priority: 2,
    publishedOn: "2025-02-07",
    status: "Published",
    action: "Edit"
  },
  {
    no: 6,
    title: "Mission Gallery",
    image: "/images/gallery.jpg",
    priority: 1,
    publishedOn: "2025-02-10",
    status: "Draft",
    action: "Edit"
  },
  {
    no: 7,
    title: "Terms of Service",
    image: "/images/tos.jpg",
    priority: 3,
    publishedOn: "2025-02-12",
    status: "Published",
    action: "Edit"
  },
];


const Feedbacks = () => {

  const tableHeadStyle = "p-4 text-lg font-medium border-1"
  const tableCellStyle = "p-4 border-1"

  return (
    <section className="px-5 my-10">
      <div className="flex justify-between mb-5">
        <h2 className="text-3xl font-medium pb-5">
          Feedbacks
        </h2>
      </div>
      <div className="flex items-center  justify-end mb-5">
        <div className="relative">
          <SearchIcon size={24} className="absolute top-3 left-3" />
          <Input className="bg-blue-50 w-fit mr-3 pl-12 rounded-sm h-12 focus:outline-none py-0 border-blue-800 text-xl" type="text" placeholder="Search" />
        </div>

        <div className="flex items-center justify-center border-1 h-12 w-12 rounded-sm border-blue-900 bg-white text-blue-900 mr-3">
          <FilterIcon size={24} />
        </div>
        <Sheet>
          <SheetTrigger>
            <Button className="bg-blue-900 hover:bg-blue-950 py-7">
              + Add New Banner
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="p-10">
              <SheetTitle className="text-2xl font-semibold">Add New Banner</SheetTitle>
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
      </div>

      <section className="bg-white rounded-md shadow-xs border-1">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={tableHeadStyle}>S. No</TableHead>
              <TableHead className={tableHeadStyle}>Nmae</TableHead>
              <TableHead className={tableHeadStyle}>Email</TableHead>
              <TableHead className={tableHeadStyle}>Deatils</TableHead>
              <TableHead className={tableHeadStyle}>Rating</TableHead>
              <TableHead className={tableHeadStyle}>Submitted on</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((tableData) => (
              <TableRow key={tableData.no}>
                <TableCell className={tableHeadStyle}>{tableData.no}</TableCell>
                <TableCell className={tableCellStyle}>{tableData.priority}</TableCell>
                <TableCell className={tableCellStyle}>
                  <div className="flex justify-between pr-5 items-center gap-3">
                    <p className="">{tableData.title}</p>
                    <button className="text-blue-700 underline hover:text-blue-900">Edit</button>
                  </div>
                </TableCell>
                <TableCell className={tableCellStyle}>{tableData.image}</TableCell>
                <TableCell className={tableCellStyle}>{tableData.priority}</TableCell>
                <TableCell className={tableCellStyle}>{tableData.publishedOn}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* this is the pagination ill develop the logic later */}

        <Pagination className="my-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        
      </section>
    </section>
  )
}
export default Feedbacks