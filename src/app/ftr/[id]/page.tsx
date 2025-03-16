
// app/ftr/[id]/page.tsx - FTR Detail Page
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Calendar, Clock, AlertCircle, User, Briefcase, MapPin, 
  FileText, Building, CheckCircle, XCircle
} from "lucide-react";

export default function FTRDetail({ params }: { params: { id: string } }) {
  // Mock data
  const ftr = {
    id: params.id,
    status: "Pending",
    visaType: "Work Permit",
    employeeName: "John Doe",
    designation: "Senior Developer",
    department: "Software Engineering",
    projectName: "Client XYZ Integration",
    clientName: "XYZ Corporation",
    country: "Germany",
    travelDate: "2025-04-15",
    returnDate: "2025-05-15",
    reasonForTravel: "On-site implementation and knowledge transfer",
    approvals: [
      { level: "Line Manager", name: "Jane Smith", status: "Approved", date: "2025-03-03" },
      { level: "Delivery Manager", name: "Mike Johnson", status: "Pending", date: null },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">FTR Details: {ftr.id}</h1>
          <p className="text-slate-500">Visa Type: {ftr.visaType}</p>
        </div>
        <Badge className={ftr.status === "Approved" ? "bg-green-500" : "bg-yellow-500"}>
          {ftr.status}
        </Badge>
      </div>

      <Tabs defaultValue="details">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">FTR Details</TabsTrigger>
          <TabsTrigger value="approvals">Approval Status</TabsTrigger>
          <TabsTrigger value="actions">Available Actions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Foreign Travel Request Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-slate-50 rounded-md">
                  <User className="h-5 w-5 text-slate-500 mr-2" />
                  <div>
                    <div className="text-sm text-slate-500">Employee</div>
                    <div>{ftr.employeeName}</div>
                    <div className="text-sm text-slate-500">{ftr.designation}, {ftr.department}</div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-slate-50 rounded-md">
                  <Briefcase className="h-5 w-5 text-slate-500 mr-2" />
                  <div>
                    <div className="text-sm text-slate-500">Project & Client</div>
                    <div>{ftr.projectName}</div>
                    <div className="text-sm text-slate-500">{ftr.clientName}</div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-slate-50 rounded-md">
                  <MapPin className="h-5 w-5 text-slate-500 mr-2" />
                  <div>
                    <div className="text-sm text-slate-500">Destination</div>
                    <div>{ftr.country}</div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-slate-50 rounded-md">
                  <Calendar className="h-5 w-5 text-slate-500 mr-2" />
                  <div>
                    <div className="text-sm text-slate-500">Travel Period</div>
                    <div>{ftr.travelDate} to {ftr.returnDate}</div>
                  </div>
                </div>
                
                <div className="flex items-start p-3 bg-slate-50 rounded-md col-span-2">
                  <FileText className="h-5 w-5 text-slate-500 mr-2 mt-0.5" />
                  <div>
                    <div className="text-sm text-slate-500">Reason for Travel</div>
                    <div>{ftr.reasonForTravel}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="approvals">
          <Card>
            <CardHeader>
              <CardTitle>Approval Workflow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {ftr.approvals.map((approval, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-slate-500 mr-2" />
                      <div>
                        <div>{approval.level}</div>
                        <div className="text-sm text-slate-500">{approval.name}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {approval.status === "Approved" ? (
                        <>
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <div>
                            <div className="text-green-500">Approved</div>
                            <div className="text-sm text-slate-500">{approval.date}</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                          <div className="text-yellow-500">Pending</div>
                        </>
                      )}
                    </div>
                  </div>
                ))}

                <Alert className="bg-blue-50 text-blue-800 border-blue-200">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    If approvals are not received within 24 hours, they will be automatically escalated to the next level.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="actions">
          <Card>
            <CardHeader>
              <CardTitle>Available Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Upload Documents
                  </Button>
                  
                  <Button className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Appointment Details
                  </Button>
                  
                  <Button variant="outline" className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Track Application Status
                    <Clock className="h-4 w-4 mr-2" />
                    Track Application Status
                  </Button>
                  
                  <Button variant="outline" className="flex items-center">
                    <XCircle className="h-4 w-4 mr-2" />
                    Cancel Application
                  </Button>
                </div>
                
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Need assistance? Contact the visa team at visa-help@company.com
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
