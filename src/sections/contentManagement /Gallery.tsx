import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
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



const tableData = [
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
    }
];



const Gallery = () => {

    const currentPath: any = useLocation().pathname.split("/").pop()

    const tableHeadStyle = "p-4 text-lg font-medium border-x-1"
    const tableCellStyle = "p-4 border-x-1"

    return (
        <>
            <div className="flex justify-between mb-5">
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
                <Table className="p">
                    <TableHeader>
                        <TableRow>
                            <TableHead className={tableHeadStyle}>S. No</TableHead>
                            <TableHead className={tableHeadStyle}>Partner Name</TableHead>
                            <TableHead className={tableHeadStyle}>Image</TableHead>
                            <TableHead className={tableHeadStyle}>Priority</TableHead>
                            <TableHead className={tableHeadStyle}>Published on</TableHead>
                            <TableHead className={tableHeadStyle}>Status</TableHead>
                            <TableHead className={tableHeadStyle}>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tableData.map((tableData) => (
                            <TableRow key={tableData.no}>
                                <TableCell className={tableHeadStyle}>{tableData.no}</TableCell>
                                <TableCell className={tableCellStyle}>{tableData.title}</TableCell>
                                <TableCell className={tableCellStyle}>{tableData.image}</TableCell>
                                <TableCell className={tableCellStyle}>{tableData.priority}</TableCell>
                                <TableCell className={tableCellStyle}>{tableData.publishedOn}</TableCell>
                                <TableCell className={tableCellStyle}>{tableData.status}</TableCell>
                                <TableCell className={tableCellStyle}>{tableData.action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </>
    )
}

export default Gallery