import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Download, Users, FileText, ChevronLeft, ChevronRight } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

// Mock data for analytics
const analyticsData = {
  metrics: {
    totalAppDownloads: 12345,
    totalAppDownloadsIOS: 24,
    totalResourceDownloads: 234,
    newUsersRegistered: 193,
    activeUsers: 850,
    totalUsers: 850,
    pdfViews: 850,
    totalBookmarks: 850,
  },
  chartData: [
    { month: "Jan", android: 200, ios: 150 },
    { month: "Feb", android: 300, ios: 200 },
    { month: "Mar", android: 250, ios: 180 },
    { month: "Apr", android: 400, ios: 300 },
    { month: "May", android: 350, ios: 250 },
    { month: "Jun", android: 500, ios: 400 },
    { month: "Jul", android: 450, ios: 350 },
    { month: "Aug", android: 600, ios: 500 },
    { month: "Sep", android: 550, ios: 450 },
    { month: "Oct", android: 400, ios: 300 },
    { month: "Nov", android: 350, ios: 250 },
    { month: "Dec", android: 300, ios: 200 },
  ],
}

// Mock data for resource engagement
const resourceEngagementData = [
  { id: 1, title: "Effective Communication", category: "Networking", viewsCount: 12, bookmarks: 123, downloads: 12 },
  { id: 2, title: "Effective Communication", category: "Networking", viewsCount: 22, bookmarks: 123, downloads: 123 },
  { id: 3, title: "Effective Communication", category: "Networking", viewsCount: 23, bookmarks: 3, downloads: 123 },
  { id: 4, title: "Effective Communication", category: "Networking", viewsCount: 234, bookmarks: 123, downloads: 1234 },
  { id: 5, title: "Effective Communication", category: "Networking", viewsCount: 232, bookmarks: 123, downloads: 123 },
  { id: 6, title: "Effective Communication", category: "Networking", viewsCount: 1234, bookmarks: 123, downloads: 123 },
  { id: 7, title: "Effective Communication", category: "Networking", viewsCount: 123, bookmarks: 123, downloads: 1234 },
  { id: 8, title: "Effective Communication", category: "Networking", viewsCount: 123, bookmarks: 123, downloads: 123 },
  { id: 9, title: "Effective Communication", category: "Networking", viewsCount: 123, bookmarks: 123, downloads: 123 },
  { id: 10, title: "Effective Communication", category: "Networking", viewsCount: 123, bookmarks: 1234, downloads: 23 },
]


const AnalyticsAndReports = () => {

  const [selectedCountry, setSelectedCountry] = useState("IND")
  const [selectedYear, setSelectedYear] = useState("2024")
  const [selectedMonth, setSelectedMonth] = useState("Jan")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const totalPages = Math.ceil(resourceEngagementData.length / itemsPerPage)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Analytics & Reports Section */}
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Analytics & Reports</h1>
            <div className="flex items-center space-x-4">
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IND">🇮🇳 IND</SelectItem>
                  <SelectItem value="USA">🇺🇸 USA</SelectItem>
                  <SelectItem value="UK">🇬🇧 UK</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Jan">Jan</SelectItem>
                  <SelectItem value="Feb">Feb</SelectItem>
                  <SelectItem value="Mar">Mar</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total App Downloads - Featured Card */}
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">Total App Downloads</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="bg-green-500 text-white text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +2.1% vs last month
                      </Badge>
                    </div>
                    <p className="text-3xl font-bold mt-2">
                      {analyticsData.metrics.totalAppDownloads.toLocaleString()}
                    </p>
                  </div>
                  <Download className="w-8 h-8 text-blue-200" />
                </div>
              </CardContent>
            </Card>

            {/* Total App Downloads iOS */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total App Downloads</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +2.1% vs last month
                      </Badge>
                    </div>
                    <p className="text-3xl font-bold mt-2">{analyticsData.metrics.totalAppDownloadsIOS}</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">🍎</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Total Resource Downloads */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Resource Downloads</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +3.2% vs last month
                      </Badge>
                    </div>
                    <p className="text-3xl font-bold mt-2">{analyticsData.metrics.totalResourceDownloads}</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Users Registered */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">New Users Registered</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +1.2% vs last month
                      </Badge>
                    </div>
                    <p className="text-3xl font-bold mt-2">{analyticsData.metrics.newUsersRegistered}</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chart and Activity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Total Resources Downloads Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Total Resources Downloads</CardTitle>
                  <Select defaultValue="2024">
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analyticsData.chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Line
                        type="monotone"
                        dataKey="android"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="Android"
                      />
                      <Line type="monotone" dataKey="ios" stroke="#3b82f6" strokeWidth={3} name="iOS" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-0.5 bg-blue-600" style={{ borderTop: "2px dashed #3b82f6" }}></div>
                    <span className="text-sm text-gray-600">Android</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-0.5 bg-blue-600"></div>
                    <span className="text-sm text-gray-600">iOS</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activity Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Activity</CardTitle>
                  <div className="flex space-x-2">
                    <Select defaultValue="2024">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="Jan">
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Jan">Jan</SelectItem>
                        <SelectItem value="Feb">Feb</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Active Users</span>
                    <span className="font-semibold">{analyticsData.metrics.activeUsers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Users</span>
                    <span className="font-semibold">{analyticsData.metrics.totalUsers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">PDF Views</span>
                    <span className="font-semibold">{analyticsData.metrics.pdfViews}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Bookmarks</span>
                    <span className="font-semibold">{analyticsData.metrics.totalBookmarks}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resource Engagement Breakdown Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Resource Engagement Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">S.no</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Views Count</TableHead>
                  <TableHead>Bookmarks</TableHead>
                  <TableHead>Downloads</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resourceEngagementData.map((resource, index) => (
                  <TableRow key={resource.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{resource.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-gray-50">
                        {resource.category}
                      </Badge>
                    </TableCell>
                    <TableCell>{resource.viewsCount}</TableCell>
                    <TableCell>{resource.bookmarks}</TableCell>
                    <TableCell>{resource.downloads}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600">Total: {resourceEngagementData.length}</div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-8 h-8"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Show Per Page:</span>
                  <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AnalyticsAndReports