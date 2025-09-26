import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


// type Resource = {
//     title: string;
//     category: string;
//     views: number;
//     downloads: number;
// };
const recentResources = [
    { title: "HINDI", category: "ACTIVITY", views: 1, downloads: 1 },
    { title: "HINDI", category: "ACTIVITY", views: 3, downloads: 3 },
    { title: "HINDI", category: "LIBRARY", views: 32, downloads: 29 },
    { title: "HINDI", category: "LIBRARY", views: 362, downloads: 362 },
    { title: "HINDI", category: "LIBRARY", views: 245, downloads: 245 },
]
export const RecentlyAddedResourcesTable = () => {


    return (
        <Card className="lg:col-span-1 py-5 border-0 ">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Recently Added Resources</CardTitle>
                    <Button variant="ghost" size="sm" className="text-xs text-[#023E84]">
                        View All
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader className="bg-[#F7F9FB]">
                        <TableRow>
                            <TableHead className="p-5 border-r">Title</TableHead>
                            <TableHead className="p-5 border-r">Category</TableHead>
                            <TableHead className="p-5 border-r">Views</TableHead>
                            <TableHead className="p-5 ">Downloads</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentResources.map((resource, index) => (
                            <TableRow key={index}>
                                <TableCell className="p-5 border-r">{resource.title}</TableCell>
                                <TableCell className="p-5 border-r">{resource.category}</TableCell>
                                <TableCell className="p-5 border-r">{resource.views}</TableCell>
                                <TableCell>{resource.downloads}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
