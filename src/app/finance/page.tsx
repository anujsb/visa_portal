
// app/finance/page.tsx - Finance Page
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Finance() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Finance & Travel</h1>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Advance Payment Request</CardTitle>
              <CardDescription>For FTR001 - Germany Work Permit</CardDescription>
            </div>
            <Badge className="bg-yellow-500">Pending Approval</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="advanceAmount">Advance Amount</Label>
              <div className="flex">
                <Select defaultValue="eur">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                    <SelectItem value="inr">INR</SelectItem>
                  </SelectContent>
                </Select>
                <Input id="advanceAmount" placeholder="1000.00" className="flex-1" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="approvalStatus">Approval Status</Label>
              <div className="flex items-center space-x-2 h-10 px-3 border rounded-md bg-gray-50">
                <Clock className="h-5 w-5 text-yellow-500" />
                <span>Pending Finance Manager Approval</span>
              </div>
            </div>
            
            <div className="space-y-2 col-span-2">
              <Label htmlFor="purpose">Purpose of Advance</Label>
              <Textarea id="purpose" placeholder="Travel expenses, accommodation, and local transportation" />
            </div>
            
            <div className="space-y-2 col-span-2">
              <Label htmlFor="bankDetails">Bank Details</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input id="accountNumber" placeholder="Account Number" />
                <Input id="bankName" placeholder="Bank Name" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Travel Arrangements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert className="bg-blue-50 text-blue-800 border-blue-200">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Travel arrangements will be processed after visa approval and finance clearance.
              </AlertDescription>
            </Alert>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-md bg-gray-50">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">Flight Arrangements</span>
                </div>
                <p className="text-sm text-gray-500">Pending visa approval</p>
              </div>
              
              <div className="p-4 border rounded-md bg-gray-50">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">Accommodation</span>
                </div>
                <p className="text-sm text-gray-500">Pending visa approval</p>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button disabled>Confirm Travel Details</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
