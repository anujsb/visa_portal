
// app/visa-status/page.tsx - Visa Status Page
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, FileTextIcon, PaperclipIcon, ClockIcon, AlertCircle, Upload, Check } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function VisaStatus() {
  // Mock data
  const visaApplication = {
    id: "FTR001",
    visaType: "Work Permit",
    country: "Germany",
    status: "In Progress",
    progress: 40,
    appointmentDate: "2025-04-10",
    appointmentTime: "10:30 AM",
    appointmentLocation: "German Embassy, Downtown",
    documents: [
      { name: "Company Cover Letter", uploaded: true, date: "2025-03-15" },
      { name: "Travel Itinerary", uploaded: true, date: "2025-03-15" },
      { name: "Invite Letter", uploaded: false, date: null },
      { name: "Travel Insurance", uploaded: false, date: null },
    ],
    timeline: [
      { step: "FTR Submitted", date: "2025-03-01", completed: true },
      { step: "Line Manager Approval", date: "2025-03-03", completed: true },
      { step: "Delivery Manager Approval", date: "2025-03-05", completed: true },
      { step: "Documents Uploaded", date: "2025-03-08", completed: true },
      { step: "Visa Team Review", date: "2025-03-12", completed: true },
      { step: "Pre-appointment Docs", date: "2025-03-15", completed: false },
      { step: "Visa Appointment", date: "2025-04-10", completed: false },
      { step: "Visa Issuance", date: null, completed: false },
      { step: "Finance Approval", date: null, completed: false },
      { step: "Travel Arrangement", date: null, completed: false },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Visa Status</h1>
        <div className="flex items-center space-x-2">
          <Badge className="bg-blue-500">{visaApplication.visaType}</Badge>
          <Badge className="bg-yellow-500">{visaApplication.status}</Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Visa Application FTR001</CardTitle>
          <CardDescription>Travel to {visaApplication.country}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Application Progress</span>
                <span>{visaApplication.progress}%</span>
              </div>
              <Progress value={visaApplication.progress} className="h-2" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center p-3 bg-slate-50 rounded-md">
                <CalendarIcon className="h-5 w-5 text-slate-500 mr-2" />
                <div>
                  <div className="text-sm text-slate-500">Appointment Date</div>
                  <div>{visaApplication.appointmentDate || "Not Scheduled"}</div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded-md">
                <ClockIcon className="h-5 w-5 text-slate-500 mr-2" />
                <div>
                  <div className="text-sm text-slate-500">Appointment Time</div>
                  <div>{visaApplication.appointmentTime || "Not Scheduled"}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="timeline">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="timeline">Application Timeline</TabsTrigger>
          <TabsTrigger value="documents">Pre-appointment Documents</TabsTrigger>
          <TabsTrigger value="upload-visa">Upload Visa Copy</TabsTrigger>
        </TabsList>
        
        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Application Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="relative border-l border-gray-200 ml-3">
                {visaApplication.timeline.map((item, index) => (
                  <li key={index} className="mb-6 ml-6">
                    <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white ${
                      item.completed ? "bg-green-500" : "bg-gray-300"
                    }`}>
                      {item.completed && <Check className="w-3 h-3 text-white" />}
                    </span>
                    <h3 className="font-medium">{item.step}</h3>
                    <p className="text-sm text-gray-500">
                      {item.date || "Pending"}
                    </p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Pre-appointment Documents</CardTitle>
              <CardDescription>Documents to be uploaded by visa team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {visaApplication.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <FileTextIcon className="h-5 w-5 text-slate-500 mr-2" />
                      <span>{doc.name}</span>
                    </div>
                    <div className="flex items-center">
                      {doc.uploaded ? (
                        <>
                          <Badge className="bg-green-500 mr-2">Uploaded</Badge>
                          <span className="text-sm text-slate-500">{doc.date}</span>
                        </>
                      ) : (
                        <>
                          <Badge variant="outline">Pending</Badge>
                          <Button variant="ghost" size="sm" className="ml-2">
                            <PaperclipIcon className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="upload-visa">
          <Card>
            <CardHeader>
              <CardTitle>Upload Visa Copy</CardTitle>
              // app/visa-status/page.tsx (continued)
              <CardTitle>Upload Visa Copy</CardTitle>
              <CardDescription>Upload your approved visa copy after embassy processing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <Alert className="bg-yellow-50 text-yellow-800 border-yellow-200">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Your appointment is scheduled. Please upload your visa copy after approval from the embassy.
                  </AlertDescription>
                </Alert>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-4" />
                    <h3 className="mb-2 text-lg font-medium">Upload Visa Copy</h3>
                    <p className="mb-4 text-sm text-gray-500">
                      Drag and drop your visa document or click to browse
                    </p>
                    <Button>Select Document</Button>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button disabled>Submit Visa Copy</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
