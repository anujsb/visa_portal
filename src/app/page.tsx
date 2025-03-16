
// app/page.tsx - Employee Dashboard Page
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { BellIcon, ChevronRightIcon } from "lucide-react";

export default function Dashboard() {
  // Mock data for demonstration
  const existingFTRs = [
    { id: "FTR001", visaType: "Work Permit", status: "Approved", projectName: "Client XYZ Integration", travelDate: "2025-04-15" },
    { id: "FTR002", visaType: "Business Visa", status: "Pending", projectName: "ABC Corp Migration", travelDate: "2025-05-10" },
    { id: "FTR003", visaType: "Residence Permit", status: "Rejected", projectName: "System Upgrade Project", travelDate: "2025-03-22" },
  ];

  const notifications = [
    { id: 1, message: "Your visa for FTR001 has been approved", time: "2 hours ago" },
    { id: 2, message: "Please upload additional documents for FTR002", time: "1 day ago" },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Welcome, John Doe</CardTitle>
            <p className="text-sm text-slate-500">Department: Software Engineering</p>
          </div>
          <Link href="/create-ftr">
            <Button>Create New FTR</Button>
          </Link>
        </CardHeader>
      </Card>

      {/* FTR Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle>FTR Status Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-3">
            <div className="p-3 text-center bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <div className="font-semibold">FTR Submission</div>
              <Badge className="mt-2 bg-green-500">Completed</Badge>
            </div>
            <div className="p-3 text-center bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <div className="font-semibold">Manager Approvals</div>
              <Badge className="mt-2 bg-yellow-500">In Progress</Badge>
            </div>
            <div className="p-3 text-center bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <div className="font-semibold">Document Review</div>
              <Badge className="mt-2 bg-gray-500">Not Started</Badge>
            </div>
            <div className="p-3 text-center bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <div className="font-semibold">Visa Approval</div>
              <Badge className="mt-2 bg-gray-500">Not Started</Badge>
            </div>
            <div className="p-3 text-center bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <div className="font-semibold">Travel Tickets</div>
              <Badge className="mt-2 bg-gray-500">Not Started</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Existing FTRs */}
      <Card>
        <CardHeader>
          <CardTitle>Your FTR Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">FTR ID</th>
                  <th className="px-4 py-2 text-left">Visa Type</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Project Name</th>
                  <th className="px-4 py-2 text-left">Travel Date</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {existingFTRs.map((ftr) => (
                  <tr key={ftr.id} className="border-b">
                    <td className="px-4 py-2">{ftr.id}</td>
                    <td className="px-4 py-2">{ftr.visaType}</td>
                    <td className="px-4 py-2">
                      <Badge variant="outline" className={getStatusColor(ftr.status)}>
                        {ftr.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-2">{ftr.projectName}</td>
                    <td className="px-4 py-2">{ftr.travelDate}</td>
                    <td className="px-4 py-2">
                      <Link href={`/ftr/${ftr.id}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="flex items-center">
            <BellIcon className="mr-2 h-5 w-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start justify-between border-b pb-2">
                <div>
                  <p>{notification.message}</p>
                  <p className="text-sm text-slate-500">{notification.time}</p>
                </div>
                <ChevronRightIcon className="h-5 w-5 text-slate-400" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
