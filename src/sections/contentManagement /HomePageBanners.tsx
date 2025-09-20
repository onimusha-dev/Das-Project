import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

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


const HomePageBanners = () => {
    
    const tableHeadStyle = "p-4 text-lg font-medium border-x-1"
    const tableCellStyle = "p-4 border-x-1"

    return (
        <section className="bg-white rounded-md shadow-xs border-1">
            <Table className="p">
                <TableHeader>
                    <TableRow>
                        <TableHead className={tableHeadStyle}>no</TableHead>
                        <TableHead className={tableHeadStyle}>Title</TableHead>
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
    )
}

export default HomePageBanners