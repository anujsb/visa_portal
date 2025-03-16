
// app/admin/visa-team/page.tsx - Visa Team Dashboard
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, FileText, Calendar, Search, Filter } from "lucide-react";

export default function VisaTeamDashboard() {
  // Mock data
  const pendingApplications = [
    { id: "FTR001", employee: "John Doe", visaType: "Work Permit", country: "Germany", status: "Document Review", urgency: "Medium" },
    { id: "FTR002", employee: "Jane Smith", visaType: "Business Visa", country: "USA", status: "Document Review", urgency: "High" },
    { id: "FTR003", employee: "Robert Johnson", visaType: "Residence Permit", country: "UK", status: "Pre-appointment", urgency: "Low" },
  ];
  
  const scheduledAppointments = [
    { id: "FTR004", employee: "Sarah Williams", embassy: "French Embassy", date: "2025-03-20", time: "10:30 AM" },
    { id: "FTR005", employee: "Michael Brown", embassy: "US Consulate", date: "2025-03-22", time: "02:15 PM" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Visa Team Dashboard</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Search applications..." className="pl-8 w-64" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 since yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Next: French Embassy (Tomorrow)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">31</div>
            <p className="text-xs text-muted-foreground">85% success rate</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Pending Applications</TabsTrigger>
          <TabsTrigger value="appointments">Scheduled Appointments</TabsTrigger>
          <TabsTrigger value="completed">Completed Applications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Applications Pending Review</CardTitle>
              <CardDescription>Applications that require document review or pre-appointment processing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left">FTR ID</th>
                      <th className="px-4 py-2 text-left">Employee</th>
                      <th className="px-4 py-2 text-left">Visa Type</th>
                      <th className="px-4 py-2 text-left">Country</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Urgency</th>
                      <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingApplications.map((app) => (
                      <tr key={app.id} className="border-b">
                        <td className="px-4 py-2">{app.id}</td>
                        <td className="px-4 py-2">{app.employee}</td>
                        <td className="px-4 py-2">{app.visaType}</td>
                        <td className="px-4 py-2">{app.country}</td>
                        <td className="px-4 py-2">
                          <Badge className="bg-blue-500">{app.status}</Badge>
                        </td>
                        <td className="px-4 py-2">
                          <Badge className={`${
                            app.urgency === "High" ? "bg-red-500" : 
                            app.urgency === "Medium" ? "bg-yellow-500" : "bg-green-500"
                          }`}>
                            {app.urgency}
                          </Badge>
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Calendar className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Visa Appointments</CardTitle>
              <CardDescription>Scheduled embassy appointments for visa processing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left">FTR ID</th>
                      <th className="px-4 py-2 text-left">Employee</th>
                      <th className="px-4 py-2 text-left">Embassy/Consulate</th>
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-left">Time</th>
                      <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduledAppointments.map((app) => (
                      <tr key={app.id} className="border-b">
                        <td className="px-4 py-2">{app.id}</td>
                        <td className="px-4 py-2">{app.employee}</td>
                        <td className="px-4 py-2">{app.embassy}</td>
                        <td className="px-4 py-2">{app.date}</td>
                        <td className="px-4 py-2">{app.time}</td>
                        <td className="px-4 py-2">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Applications</CardTitle>
              <CardDescription>Successfully processed visa applications</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Completed applications table similar to above */}
              <div className="flex justify-center items-center py-10">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
                    <FileText className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="mb-1 text-xl font-bold">Visa Processing History</h3>
                  <p className="text-sm text-gray-500">View detailed history of all completed visa applications</p>
                  <Button className="mt-4">View All History</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}