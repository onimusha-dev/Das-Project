import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, FileText, MessageSquare, Heart } from "lucide-react"
import { RecentlyAddedResourcesTable } from "@/sections/overView/RecentlyAddedResourcesTable"
import { UsersGeography } from "@/sections/overView/UsersGeography"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

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

}

const Overview = () => {
  const [selectedCountry, setSelectedCountry] = useState("IND")
  const [currentBanner, setCurrentBanner] = useState(0)

  return (
    <section className="px-8 my-10">
      <div className="min-h-screen">
        <div className="mx-auto">
          <h2 className="text-3xl font-semibold pb-5">
            Good Evening, Oorja Mount
          </h2>
          <p className="text-gray-400 pb-5">
            Wellcome Back Oorja Mount
          </p>
        </div>
        <div className="space-y-6">
          {/* Header Section - Total Downloads with Country Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <Card className="lg:col-span-1 gap-1 p-5 rounded-xl shadow-none border-gray-100">
              <CardHeader className="gap-0 px-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium ">Total Downloads</CardTitle>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-24 h-8 bg-[#F7F9FB]">
                      <SelectValue/>
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
              <CardContent className="px-0">
                <div className="text-3xl font-bold">{mockData.totalDownloads}</div>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="bg-green-100 w-[55px] h-[27px] border border-[#26640074] text-green-800">
                    {"10%"}
                  </Badge>
                  <p className="text-xs pl-3">Than last month</p>
                </div>

                {/* Android/iOS Tabs */}
                <Tabs defaultValue="android" className="mt-4">
                  <TabsList className="grid w-full px-0 gap-2 bg-white grid-cols-2">
                    <TabsTrigger className="px-5 py-3 text-xs rounded-[4px] border border-[#023E8440] data-[state=active]:bg-[#023E84] data-[state=active]:text-white" value="android">Android</TabsTrigger>
                    <TabsTrigger className="px-5 py-3 text-xs rounded-[4px] border border-[#023E8440] data-[state=active]:bg-[#023E84] data-[state=active]:text-white" value="ios">iOS</TabsTrigger>
                  </TabsList>
                  <TabsContent value="android" className="space-y-3 mt-4">
                    <div className="grid grid-cols-3 text-center bg-[#023E8408] py-5 px-3 border border-[#023E8440] rounded-[4px]">
                      <div>
                        <div className="text-xs ">Total Users</div>
                        <div className="font-semibold">{mockData.metrics.totalUsers}</div>
                      </div>
                      <div className="border-x">
                        <div className="text-xs ">Active Users</div>
                        <div className="font-semibold">{mockData.metrics.activeUsers}</div>
                      </div>
                      <div>
                        <div className="text-xs ">PDF Views</div>
                        <div className="font-semibold">{mockData.metrics.pdfViews}</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="ios" className="space-y-3 mt-4 ">
                    <div className="grid grid-cols-3 text-center bg-[#023E8408] px-3 py-5 border border-[#023E8440] rounded-[4px]">
                      <div>
                        <div className="text-xs ">Total Users</div>
                        <div className="font-semibold">{mockData.metrics.totalUsers}</div>
                      </div>
                      <div className="border-x">
                        <div className="text-xs ">Active Users</div>
                        <div className="font-semibold">{mockData.metrics.activeUsers}</div>
                      </div>
                      <div>
                        <div className="text-xs ">PDF Views</div>
                        <div className="font-semibold">{mockData.metrics.pdfViews}</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Small Metric Cards */}
            <div className="lg:col-span-1 grid grid-cols-2 p-5 gap-4 bg-white border border-gray-100 rounded-lg">
              <Card className="bg-[#023E8408] rounded-[4px]">
                <CardContent className="px-4 py-6 flex-1">
                  <div className="flex items-center h-full justify-between">
                    <div className="h-full flex-1 flex flex-col justify-between">
                      <div className="text-sm ">Total Downloads</div>
                      <div className="text-2xl flex justify-between  font-bold">{mockData.metrics.totalDownloads}
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <FileText className="w-4 h-4 text-[#023E84]" />
                        </div></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#023E8408] rounded-[4px]">
                <CardContent className="px-4 py-6 flex-1">
                  <div className="flex items-center h-full justify-between ">
                    <div className="h-full flex-1 flex flex-col justify-between">
                      <div className="text-sm ">Total Bookmarks</div>
                      <div className="text-2xl flex justify-between font-bold">{mockData.metrics.totalBookmarks}
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Heart className="w-4 h-4 text-[#023E84]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#023E8408] rounded-[4px]">
                <CardContent className="p-px-4 py-6 flex-1">
                  <div className="flex items-center h-full justify-between">
                    <div className="h-full flex-1 flex flex-col justify-between">
                      <div className="text-sm ">Feedback Received</div>
                      <div className="text-2xl flex justify-between  font-bold">{mockData.metrics.feedbackReceived}
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-[#023E84]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#023E8408] rounded-[4px]">
                <CardContent className="p-px-4 py-6 flex-1">
                  <div className="flex items-center h-full justify-between">
                    <div className="h-full flex-1 flex flex-col justify-between">
                      <div className="text-sm ">Volunteers</div>
                      <div className="text-2xl flex justify-between  font-bold">{mockData.metrics.volunteers}
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-[#023E84]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* App Banners Carousel */}
            <Card className="lg:col-span-1 rounded-xl border-gray-100 py-5">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-medium">App Banners</CardTitle>
                  <Button variant="ghost" size="sm" className="text-[#023E84]">
                    View
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="h-full">
                <div className="relative h-full">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
            <RecentlyAddedResourcesTable/>
            <UsersGeography />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview