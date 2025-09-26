import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'


const topCountries = [
    { country: "Country 1", flag: "🇺🇸", count: 123 },
    { country: "Country 2", flag: "🇮🇳", count: 98 },
    { country: "Country 3", flag: "🇬🇧", count: 76 },
    { country: "Country 4", flag: "🇨🇦", count: 53 },
    { country: "Country 5", flag: "🇦🇺", count: 42 },
  ]


export const UsersGeography = () => {
  return (
      <Card className="p-5 border-0 flex-1/2">
          <CardHeader className="pb-4 ">
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
                      {topCountries.map((country, index) => (
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
  )
}
