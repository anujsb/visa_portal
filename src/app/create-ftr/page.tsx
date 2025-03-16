"use client"
// app/create-ftr/page.tsx - FTR Creation Page
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/date-picker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CreateFTR() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Foreign Travel Request (FTR)</h1>
        <Button>Save Draft</Button>
      </div>

      <Tabs defaultValue="employee-info">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="employee-info">Employee Information</TabsTrigger>
          <TabsTrigger value="travel-info">Travel Information</TabsTrigger>
          <TabsTrigger value="passport-details">Passport Details</TabsTrigger>
        </TabsList>
        
        <TabsContent value="employee-info">
          <Card>
            <CardHeader>
              <CardTitle>Employee Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dasId">DAS ID</Label>
                <Input id="dasId" value="EMP123" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" placeholder="Software Engineering" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="designation">Designation</Label>
                <Input id="designation" placeholder="Senior Developer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="johndoe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input id="mobile" placeholder="+1 234 567 8901" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input id="nationality" placeholder="USA" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="123 Main St, Apt 4B" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="NY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input id="zipCode" placeholder="10001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <DatePicker />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projectName">Project Name/Code</Label>
                <Input id="projectName" placeholder="PROJ-2023" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clientName">Client Name</Label>
                <Input id="clientName" placeholder="XYZ Corporation" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="travel-info">
          <Card>
            <CardHeader>
              <CardTitle>Travel Information</CardTitle>
            </CardHeader>

            <CardContent className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="countryOfVisit">Country of Visit</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="typeOfTravel">Type of Travel</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="relocation">Relocation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="travelDate">Travel Date</Label>
                <DatePicker />
              </div>
              <div className="space-y-2">
                <Label htmlFor="returnDate">Return Date</Label>
                <DatePicker />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="reason">Reason for Trip</Label>
                <Textarea id="reason" placeholder="Describe the purpose of your travel" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="projectLocation">Project Location</Label>
                <Input id="projectLocation" placeholder="Client site, New York" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="passport-details">
          <Card>
            <CardHeader>
              <CardTitle>Passport Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="passportNumber">Passport Number</Label>
                <Input id="passportNumber" placeholder="A1234567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="placeOfIssue">Place of Issue</Label>
                <Input id="placeOfIssue" placeholder="New York" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfIssue">Date of Issue</Label>
                <DatePicker />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfExpiry">Date of Expiry</Label>
                <DatePicker />
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end mt-6 space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Submit FTR</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
