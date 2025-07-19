import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Globe, Settings, BarChart3, Trash2, Edit, Eye } from "lucide-react";
import AuthenticatedLayout from "@/components/AuthenticatedLayout";

const ProjectsPage = () => {
  const [showNewProject, setShowNewProject] = useState(false);

  const projects = [
    {
      id: 1,
      domain: "company-website.com",
      projectName: "Company Main Site",
      fallbackType: "Game + Lead Form",
      status: "Active",
      visits: 2847,
      leads: 89,
      conversionRate: "3.1%",
      lastActive: "2 hours ago",
      createdAt: "Jan 15, 2024"
    },
    {
      id: 2,
      domain: "blog.startup.io",
      projectName: "Startup Blog",
      fallbackType: "Memory Match + Chatbot",
      status: "Active",
      visits: 1856,
      leads: 34,
      conversionRate: "1.8%",
      lastActive: "5 minutes ago",
      createdAt: "Jan 12, 2024"
    },
    {
      id: 3,
      domain: "ecommerce-store.com",
      projectName: "E-commerce Store",
      fallbackType: "Offline Form",
      status: "Active",
      visits: 1245,
      leads: 67,
      conversionRate: "5.4%",
      lastActive: "1 hour ago",
      createdAt: "Jan 10, 2024"
    },
    {
      id: 4,
      domain: "portfolio.design.com",
      projectName: "Design Portfolio",
      fallbackType: "Not configured",
      status: "Setup Required",
      visits: 0,
      leads: 0,
      conversionRate: "0%",
      lastActive: "Never",
      createdAt: "Jan 8, 2024"
    },
    {
      id: 5,
      domain: "news.media.com",
      projectName: "News Portal",
      fallbackType: "Chatbot",
      status: "Paused",
      visits: 892,
      leads: 12,
      conversionRate: "1.3%",
      lastActive: "3 days ago",
      createdAt: "Jan 5, 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "default";
      case "Setup Required":
        return "secondary";
      case "Paused":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <AuthenticatedLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground mt-1">Manage your website integrations and fallback content</p>
          </div>
          <Dialog open={showNewProject} onOpenChange={setShowNewProject}>
            <DialogTrigger asChild>
              <Button size="lg">
                <Plus className="h-4 w-4 mr-2" />
                Add New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add New Project</DialogTitle>
                <DialogDescription>
                  Connect a new website to OfflineUX and configure your offline experience.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="projectName">Project Name</Label>
                  <Input id="projectName" placeholder="My Awesome Website" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="domain">Website Domain</Label>
                  <Input id="domain" placeholder="https://mywebsite.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fallbackType">Fallback Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fallback experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="game">Game</SelectItem>
                      <SelectItem value="form">Form</SelectItem>
                      <SelectItem value="chatbot">Chatbot</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowNewProject(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setShowNewProject(false)}>
                  Create Project
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Projects Table */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>All Projects</CardTitle>
            <CardDescription>
              {projects.length} projects configured
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Project</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Domain</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Fallback Type</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Performance</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Last Active</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="border-b border-border hover:bg-secondary/30">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-card border border-border flex items-center justify-center">
                            <Globe className="h-4 w-4 text-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{project.projectName}</p>
                            <p className="text-sm text-muted-foreground">Created {project.createdAt}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-foreground">{project.domain}</p>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline" className="text-xs">
                          {project.fallbackType}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant={getStatusColor(project.status) as any}>
                          {project.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm">
                          <p className="text-foreground">{project.visits.toLocaleString()} visits</p>
                          <p className="text-muted-foreground">{project.leads} leads ({project.conversionRate})</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-muted-foreground">{project.lastActive}</p>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <BarChart3 className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
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
    </AuthenticatedLayout>
  );
};

export default ProjectsPage;