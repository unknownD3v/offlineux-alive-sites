import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Download, Search, Filter, Mail } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Leads = () => {
  const leads = [
    {
      id: 1,
      email: "sarah.chen@techflow.com",
      name: "Sarah Chen",
      source: "company-website.com",
      template: "Dino Runner",
      submittedAt: "2024-01-15 14:30",
      status: "New"
    },
    {
      id: 2,
      email: "marcus.rodriguez@startup.co",
      name: "Marcus Rodriguez",
      source: "blog.startup.io",
      template: "Memory Match",
      submittedAt: "2024-01-15 13:45",
      status: "Contacted"
    },
    {
      id: 3,
      email: "emma.thompson@growthlab.io",
      name: "Emma Thompson",
      source: "company-website.com",
      template: "Lead Form",
      submittedAt: "2024-01-15 12:15",
      status: "New"
    },
    {
      id: 4,
      email: "david.kim@innovation.com",
      name: "David Kim",
      source: "blog.startup.io",
      template: "Chatbot",
      submittedAt: "2024-01-15 11:30",
      status: "Qualified"
    },
    {
      id: 5,
      email: "lisa.wang@techhub.org",
      name: "Lisa Wang",
      source: "company-website.com",
      template: "Dino Runner",
      submittedAt: "2024-01-15 10:45",
      status: "New"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "default";
      case "Contacted":
        return "secondary";
      case "Qualified":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Leads</h1>
            <p className="text-muted-foreground">Manage leads captured from your offline fallback pages</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button>
              <Mail className="h-4 w-4 mr-2" />
              Bulk Email
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8 shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search leads by name or email..." 
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Source
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Status
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Date
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leads Table */}
        <Card className="shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All Leads</CardTitle>
                <CardDescription>
                  {leads.length} leads collected from offline interactions
                </CardDescription>
              </div>
              <Badge variant="secondary">{leads.length} Total</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Contact</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Source</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Template</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Submitted</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-border hover:bg-secondary/50">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-foreground">{lead.name}</p>
                          <p className="text-sm text-muted-foreground">{lead.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-foreground">{lead.source}</p>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline" className="text-xs">
                          {lead.template}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-foreground">{lead.submittedAt}</p>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant={getStatusColor(lead.status) as any}>
                          {lead.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            View
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
      </div>
    </DashboardLayout>
  );
};

export default Leads;