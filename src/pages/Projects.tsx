import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Globe, Settings, BarChart3, Copy } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";

const Projects = () => {
  const [showNewProject, setShowNewProject] = useState(false);

  const projects = [
    {
      id: 1,
      name: "company-website.com",
      domain: "https://company-website.com",
      status: "Active",
      visits: 1247,
      leads: 89,
      template: "Dino Runner + Lead Form",
      apiKey: "oux_live_abc123def456"
    },
    {
      id: 2,
      name: "blog.startup.io",
      domain: "https://blog.startup.io",
      status: "Active",
      visits: 856,
      leads: 34,
      template: "Memory Match + Chatbot",
      apiKey: "oux_live_xyz789ghi012"
    },
    {
      id: 3,
      name: "ecommerce-store.com",
      domain: "https://ecommerce-store.com",
      status: "Setup Required",
      visits: 0,
      leads: 0,
      template: "Not configured",
      apiKey: "oux_live_mno345pqr678"
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground">Manage your website integrations and fallback content</p>
          </div>
          <Button onClick={() => setShowNewProject(!showNewProject)}>
            <Plus className="h-4 w-4 mr-2" />
            Add New Project
          </Button>
        </div>

        {/* New Project Form */}
        {showNewProject && (
          <Card className="mb-8 shadow-soft">
            <CardHeader>
              <CardTitle>Add New Project</CardTitle>
              <CardDescription>Connect a new website to OfflineUX</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Project Name
                  </label>
                  <Input placeholder="My Awesome Website" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Website Domain
                  </label>
                  <Input placeholder="https://mywebsite.com" />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button>Create Project</Button>
                <Button variant="outline" onClick={() => setShowNewProject(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project) => (
            <Card key={project.id} className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-card border border-border flex items-center justify-center">
                      <Globe className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">{project.domain}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <p className="text-2xl font-bold text-foreground">{project.visits.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Fallback Visits</p>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <p className="text-2xl font-bold text-foreground">{project.leads}</p>
                    <p className="text-sm text-muted-foreground">Leads Collected</p>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <p className="text-sm font-medium text-foreground">{project.template}</p>
                    <p className="text-sm text-muted-foreground">Active Template</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Button variant="outline" size="sm">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </div>
                </div>

                {/* API Integration */}
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">SDK Integration</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <code className="flex-1 bg-background p-2 rounded text-sm font-mono text-foreground border">
                      {`<script src='https://cdn.offlineux.com/init.js' data-site='${project.apiKey}'></script>`}
                    </code>
                    <Button variant="outline" size="sm">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Add this script to your website's HTML head section
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;