
// app/documents/page.tsx - Document Upload Page
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Upload, X, Check, AlertCircle } from "lucide-react";

export default function DocumentUpload() {
  // Mock data
  const documents = [
    { name: "Payslips (Last 3 months)", status: "uploaded", id: "doc1" },
    { name: "Job Description", status: "approved", id: "doc2" },
    { name: "Resume/CV", status: "pending", id: "doc3" },
    { name: "Passport Copy", status: "rejected", id: "doc4" },
    { name: "Transfer Letter (if applicable)", status: "not-uploaded", id: "doc5" },
    { name: "Project Code Document", status: "not-uploaded", id: "doc6" },
    { name: "Data Protection Consent", status: "not-uploaded", id: "doc7" },
    { name: "Signed Assignment Letter", status: "not-uploaded", id: "doc8" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "uploaded":
        return <Badge className="bg-blue-500">Uploaded</Badge>;
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500">Under Review</Badge>;
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>;
      case "not-uploaded":
        return <Badge variant="outline">Not Uploaded</Badge>;
      default:
        return <Badge variant="outline">Not Uploaded</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "uploaded":
        return <Upload className="h-5 w-5 text-blue-500" />;
      case "approved":
        return <Check className="h-5 w-5 text-green-500" />;
      case "pending":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case "rejected":
        return <X className="h-5 w-5 text-red-500" />;
      case "not-uploaded":
        return <Upload className="h-5 w-5 text-gray-400" />;
      default:
        return <Upload className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Document Upload</h1>
        <Button>Submit All Documents</Button>
      </div>

      <Alert className="bg-blue-50 text-blue-800 border-blue-200">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Please upload all required documents in PDF or image format. All documents must be clearly legible.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Required Documents for FTR001</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc) => (
              <div 
                key={doc.id} 
                className={`p-4 rounded-md border ${
                  doc.status === "rejected" ? "border-red-300 bg-red-50" : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {getStatusIcon(doc.status)}
                    <span className="ml-2">{doc.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(doc.status)}
                    <Button variant="outline" size="sm">
                      {doc.status === "not-uploaded" ? "Upload" : "Re-upload"}
                    </Button>
                  </div>
                </div>
                {doc.status === "rejected" && (
                  <p className="text-sm text-red-600 mt-2">
                    Document rejected: Please provide a clearer copy.
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
