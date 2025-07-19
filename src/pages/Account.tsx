import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, CreditCard, Key, User, Bell } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Account = () => {
  return (
    <DashboardLayout>
      <div className="p-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Account Settings</h1>
          <p className="text-muted-foreground">Manage your account, billing, and API access</p>
        </div>

        {/* Profile Settings */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-foreground" />
              <CardTitle>Profile Information</CardTitle>
            </div>
            <CardDescription>Update your personal information and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="john@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" defaultValue="Tech Company Inc." />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        {/* Subscription Plan */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-foreground" />
              <CardTitle>Subscription Plan</CardTitle>
            </div>
            <CardDescription>Your current plan and usage details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-gradient-card border border-border rounded-lg mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">Pro Plan</h3>
                  <Badge>Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">$29/month • Renews on Feb 15, 2024</p>
              </div>
              <Button variant="outline">Manage Billing</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-secondary rounded-lg">
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Active Projects</p>
                <p className="text-xs text-muted-foreground">of 10 included</p>
              </div>
              <div className="text-center p-3 bg-secondary rounded-lg">
                <p className="text-2xl font-bold text-foreground">2.8K</p>
                <p className="text-sm text-muted-foreground">Monthly Visits</p>
                <p className="text-xs text-muted-foreground">of 10K included</p>
              </div>
              <div className="text-center p-3 bg-secondary rounded-lg">
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-sm text-muted-foreground">Leads Collected</p>
                <p className="text-xs text-muted-foreground">Unlimited</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Keys */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Key className="h-5 w-5 text-foreground" />
              <CardTitle>API Keys</CardTitle>
            </div>
            <CardDescription>Manage your API keys for integrations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Production Key</p>
                  <p className="text-sm text-muted-foreground">Created Jan 1, 2024</p>
                </div>
                <div className="flex items-center space-x-2">
                  <code className="text-sm font-mono text-foreground bg-background px-2 py-1 rounded border">
                    oux_live_••••••••••••••••
                  </code>
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Test Key</p>
                  <p className="text-sm text-muted-foreground">For development and testing</p>
                </div>
                <div className="flex items-center space-x-2">
                  <code className="text-sm font-mono text-foreground bg-background px-2 py-1 rounded border">
                    oux_test_••••••••••••••••
                  </code>
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <Button variant="outline">Generate New Key</Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="shadow-soft">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-foreground" />
              <CardTitle>Notification Preferences</CardTitle>
            </div>
            <CardDescription>Choose what notifications you'd like to receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Lead Notifications</p>
                  <p className="text-sm text-muted-foreground">Get notified when new leads are captured</p>
                </div>
                <Button variant="outline" size="sm">Enabled</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Weekly Reports</p>
                  <p className="text-sm text-muted-foreground">Receive weekly performance summaries</p>
                </div>
                <Button variant="outline" size="sm">Enabled</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Product Updates</p>
                  <p className="text-sm text-muted-foreground">Stay informed about new features</p>
                </div>
                <Button variant="outline" size="sm">Disabled</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Account;