  import { useState } from "react"
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import { Badge } from "@/components/ui/badge"
  import { TrendingUp, Users, FileText, MessageSquare, Heart } from "lucide-react"
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

  // Mock data
  const mockData = {
    totalDownloads: 1245,
    countries: [
      { code: "IND", name: "India", flag: "🇮🇳" },
      { code: "USA", name: "United States", flag: "🇺🇸" },
      { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
    ],
    metrics: {
      totalUsers: 850,
      activeUsers: 850,
      pdfViews: 850,
      totalDownloads: 850,
      totalBookmarks: 850,
      feedbackReceived: 850,
      volunteers: 850,
    },
    banners: [
      {
        id: 1,
        title: "Together, We're Changing Lives.",
        image: "image.png",
      },
    ],
    recentResources: [
      { title: "HINDI", category: "ACTIVITY", views: 1, downloads: 1 },
      { title: "HINDI", category: "ACTIVITY", views: 3, downloads: 3 },
      { title: "HINDI", category: "LIBRARY", views: 32, downloads: 29 },
      { title: "HINDI", category: "LIBRARY", views: 362, downloads: 362 },
      { title: "HINDI", category: "LIBRARY", views: 245, downloads: 245 },
    ],
    topCountries: [
      { country: "Country 1", flag: "🇺🇸", count: 123 },
      { country: "Country 2", flag: "🇮🇳", count: 98 },
      { country: "Country 3", flag: "🇬🇧", count: 76 },
      { country: "Country 4", flag: "🇨🇦", count: 53 },
      { country: "Country 5", flag: "🇦🇺", count: 42 },
    ],
  }

  const Overview = () => {
    const [selectedCountry, setSelectedCountry] = useState("IND")
    const [currentBanner, setCurrentBanner] = useState(0)

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header Section - Total Downloads with Country Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card className="lg:col-span-1">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Downloads</CardTitle>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-24 h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {mockData.countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{mockData.totalDownloads}</div>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    vs last month
                  </Badge>
                </div>

                {/* Android/iOS Tabs */}
                <Tabs defaultValue="android" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="android">Android</TabsTrigger>
                    <TabsTrigger value="ios">iOS</TabsTrigger>
                  </TabsList>
                  <TabsContent value="android" className="space-y-3 mt-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-sm text-gray-600">Total Users</div>
                        <div className="font-semibold">{mockData.metrics.totalUsers}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Active Users</div>
                        <div className="font-semibold">{mockData.metrics.activeUsers}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">PDF Views</div>
                        <div className="font-semibold">{mockData.metrics.pdfViews}</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="ios" className="space-y-3 mt-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-sm text-gray-600">Total Users</div>
                        <div className="font-semibold">{mockData.metrics.totalUsers}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Active Users</div>
                        <div className="font-semibold">{mockData.metrics.activeUsers}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">PDF Views</div>
                        <div className="font-semibold">{mockData.metrics.pdfViews}</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Small Metric Cards */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Total Downloads</div>
                      <div className="text-2xl font-bold">{mockData.metrics.totalDownloads}</div>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Total Bookmarks</div>
                      <div className="text-2xl font-bold">{mockData.metrics.totalBookmarks}</div>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Feedback Received</div>
                      <div className="text-2xl font-bold">{mockData.metrics.feedbackReceived}</div>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Volunteers</div>
                      <div className="text-2xl font-bold">{mockData.metrics.volunteers}</div>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* App Banners Carousel */}
            <Card className="lg:col-span-1">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">App Banners</CardTitle>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    View
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=120&width=200"
                    alt="App Banner"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="text-white text-xs font-medium bg-black/50 rounded px-2 py-1">
                      Together, We're Changing Lives.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recently Added Resources Table */}
            <Card className="lg:col-span-2">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Recently Added Resources</CardTitle>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Downloads</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockData.recentResources.map((resource, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{resource.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{resource.category}</Badge>
                        </TableCell>
                        <TableCell>{resource.views}</TableCell>
                        <TableCell>{resource.downloads}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Users Geography */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">Users Geography</CardTitle>
              </CardHeader>
              <CardContent>
                {/* World Map Placeholder */}
                <div className="mb-4">
                  <img
                    src="/placeholder.svg?height=120&width=280"
                    alt="World Map"
                    className="w-full h-24 object-cover rounded-lg bg-gray-100"
                  />
                </div>

                {/* Top Countries */}
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-3">Top Countries</h4>
                  <div className="space-y-2">
                    {mockData.topCountries.map((country, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{country.flag}</span>
                          <span className="text-sm">{country.country}</span>
                        </div>
                        <span className="text-sm font-medium">{country.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

export default Overview