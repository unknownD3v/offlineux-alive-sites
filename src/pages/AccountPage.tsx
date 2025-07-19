import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { User, CreditCard, Bell, Shield, Trash2, AlertTriangle } from "lucide-react";
import AuthenticatedLayout from "@/components/AuthenticatedLayout";

const AccountPage = () => {
  return (
    <AuthenticatedLayout>
      <div className="p-6 lg:p-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Account Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account, billing, and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-foreground" />
                  <CardTitle>Profile Information</CardTitle>
                </div>
                <CardDescription>Update your personal information and account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" defaultValue="CTO" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Company Website</Label>
                  <Input id="website" defaultValue="https://techcompany.com" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6 mt-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-foreground" />
                  <CardTitle>Subscription & Billing</CardTitle>
                </div>
                <CardDescription>Manage your subscription plan and billing information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Plan */}
                <div className="p-6 bg-gradient-card border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">Pro Plan</h3>
                        <Badge>Active</Badge>
                      </div>
                      <p className="text-muted-foreground">$29/month • Renews on February 15, 2024</p>
                    </div>
                    <Button variant="outline">Change Plan</Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <p className="text-2xl font-bold text-foreground">5</p>
                      <p className="text-sm text-muted-foreground">Active Projects</p>
                      <p className="text-xs text-muted-foreground">of 10 included</p>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <p className="text-2xl font-bold text-foreground">8.2K</p>
                      <p className="text-sm text-muted-foreground">Monthly Visits</p>
                      <p className="text-xs text-muted-foreground">of 25K included</p>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <p className="text-2xl font-bold text-foreground">524</p>
                      <p className="text-sm text-muted-foreground">Leads Captured</p>
                      <p className="text-xs text-muted-foreground">Unlimited</p>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Payment Method</h4>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">•••• •••• •••• 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/26</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                </div>

                {/* Billing History */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Billing History</h4>
                  <div className="space-y-2">
                    {[
                      { date: "Jan 15, 2024", amount: "$29.00", status: "Paid" },
                      { date: "Dec 15, 2023", amount: "$29.00", status: "Paid" },
                      { date: "Nov 15, 2023", amount: "$29.00", status: "Paid" }
                    ].map((invoice, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">{invoice.date}</p>
                          <p className="text-sm text-muted-foreground">Pro Plan</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-foreground">{invoice.amount}</p>
                          <Badge variant="secondary" className="text-xs">{invoice.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6 mt-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-foreground" />
                  <CardTitle>Notification Preferences</CardTitle>
                </div>
                <CardDescription>Choose what notifications you'd like to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">New Lead Notifications</p>
                      <p className="text-sm text-muted-foreground">Get notified immediately when new leads are captured</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-sm text-foreground">Email</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Weekly Reports</p>
                      <p className="text-sm text-muted-foreground">Receive weekly performance summaries and insights</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-sm text-foreground">Email</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Product Updates</p>
                      <p className="text-sm text-muted-foreground">Stay informed about new features and improvements</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm text-foreground">Email</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">System Alerts</p>
                      <p className="text-sm text-muted-foreground">Important notifications about service status</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-sm text-foreground">Email</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Marketing Communications</p>
                      <p className="text-sm text-muted-foreground">Tips, case studies, and best practices</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-sm text-foreground">Email</span>
                    </div>
                  </div>
                </div>
                
                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6 mt-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-foreground" />
                  <CardTitle>Security Settings</CardTitle>
                </div>
                <CardDescription>Manage your account security and access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Change Password */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Change Password</h4>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button>Update Password</Button>
                  </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>
                </div>

                {/* Active Sessions */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Active Sessions</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">MacBook Pro • Chrome</p>
                        <p className="text-sm text-muted-foreground">San Francisco, CA • Current session</p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">iPhone • Safari</p>
                        <p className="text-sm text-muted-foreground">San Francisco, CA • 2 hours ago</p>
                      </div>
                      <Button variant="outline" size="sm">Revoke</Button>
                    </div>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-destructive">Danger Zone</h4>
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Once you delete your account, there is no going back. Please be certain.
                    </AlertDescription>
                  </Alert>
                  <Button variant="destructive" className="w-full">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AuthenticatedLayout>
  );
};

export default AccountPage;