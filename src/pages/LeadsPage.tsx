import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Search, Filter, Mail, Eye, ExternalLink, Wifi, WifiOff } from "lucide-react";
import AuthenticatedLayout from "@/components/AuthenticatedLayout";

const LeadsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSource, setFilterSource] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const leads = [
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah.chen@techflow.com",
      company: "TechFlow Systems",
      source: "company-website.com",
      template: "Dino Runner",
      submittedAt: "2024-01-15 14:30:22",
      status: "New",
      syncStatus: "Synced",
      formData: {
        message: "Interested in your offline solutions",
        phone: "+1-555-0123"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      email: "marcus.rodriguez@startup.co",
      company: "StartupCo",
      source: "blog.startup.io",
      template: "Memory Match",
      submittedAt: "2024-01-15 13:45:18",
      status: "Contacted",
      syncStatus: "Synced",
      formData: {
        message: "Love the memory game feature",
        industry: "SaaS"
      }
    },
    {
      id: 3,
      name: "Emma Thompson",
      email: "emma.thompson@growthlab.io",
      company: "GrowthLab",
      source: "company-website.com",
      template: "Lead Form",
      submittedAt: "2024-01-15 12:15:44",
      status: "Qualified",
      syncStatus: "Synced",
      formData: {
        message: "Need demo for enterprise plan",
        employees: "50-100"
      }
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@innovation.com",
      company: "Innovation Labs",
      source: "blog.startup.io",
      template: "Chatbot",
      submittedAt: "2024-01-15 11:30:15",
      status: "New",
      syncStatus: "Offline → Synced",
      formData: {
        message: "Questions about API integration",
        role: "Developer"
      }
    },
    {
      id: 5,
      name: "Lisa Wang",
      email: "lisa.wang@techhub.org",
      company: "TechHub",
      source: "ecommerce-store.com",
      template: "Dino Runner",
      submittedAt: "2024-01-15 10:45:33",
      status: "New",
      syncStatus: "Synced",
      formData: {
        message: "Interested in e-commerce integration",
        website: "techhub.org"
      }
    },
    {
      id: 6,
      name: "Alex Turner",
      email: "alex@digitalagency.com",
      company: "Digital Agency Pro",
      source: "portfolio.design.com",
      template: "Lead Form",
      submittedAt: "2024-01-15 09:20:11",
      status: "Contacted",
      syncStatus: "Synced",
      formData: {
        message: "Looking for white-label solution",
        clients: "20+"
      }
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

  const getSyncIcon = (syncStatus: string) => {
    if (syncStatus.includes("Offline")) {
      return <WifiOff className="h-3 w-3 text-muted-foreground" />;
    }
    return <Wifi className="h-3 w-3 text-primary" />;
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSource = filterSource === "all" || lead.source === filterSource;
    const matchesStatus = filterStatus === "all" || lead.status === filterStatus;
    
    return matchesSearch && matchesSource && matchesStatus;
  });

  return (
    <AuthenticatedLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Leads</h1>
            <p className="text-muted-foreground mt-1">Manage leads captured from your offline fallback pages</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-4 lg:mt-0">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
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
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search leads by name, email, or company..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={filterSource} onValueChange={setFilterSource}>
                  <SelectTrigger className="w-[180px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="All Sources" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sources</SelectItem>
                    <SelectItem value="company-website.com">company-website.com</SelectItem>
                    <SelectItem value="blog.startup.io">blog.startup.io</SelectItem>
                    <SelectItem value="ecommerce-store.com">ecommerce-store.com</SelectItem>
                    <SelectItem value="portfolio.design.com">portfolio.design.com</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Contacted">Contacted</SelectItem>
                    <SelectItem value="Qualified">Qualified</SelectItem>
                  </SelectContent>
                </Select>
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
                  {filteredLeads.length} of {leads.length} leads shown
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">{leads.length} Total</Badge>
                <Badge variant="default">{leads.filter(l => l.status === "New").length} New</Badge>
              </div>
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
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Sync</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="border-b border-border hover:bg-secondary/30">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-foreground">{lead.name}</p>
                          <p className="text-sm text-muted-foreground">{lead.email}</p>
                          <p className="text-xs text-muted-foreground">{lead.company}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          <p className="text-sm text-foreground">{lead.source}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline" className="text-xs">
                          {lead.template}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div>
                          <p className="text-sm text-foreground">
                            {new Date(lead.submittedAt).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(lead.submittedAt).toLocaleTimeString()}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant={getStatusColor(lead.status) as any}>
                          {lead.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          {getSyncIcon(lead.syncStatus)}
                          <span className="text-xs text-muted-foreground">{lead.syncStatus}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredLeads.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No leads found matching your criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AuthenticatedLayout>
  );
};

export default LeadsPage;