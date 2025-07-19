import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp, Users, Eye, MousePointer } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      name: "Fallback Visits",
      value: "2,847",
      change: "+12%",
      icon: Eye
    },
    {
      name: "Leads Collected",
      value: "156",
      change: "+23%",
      icon: Users
    },
    {
      name: "Active Sites",
      value: "3",
      change: "+1",
      icon: MousePointer
    },
    {
      name: "Conversion Rate",
      value: "5.5%",
      change: "+2.1%",
      icon: TrendingUp
    }
  ];

  const recentProjects = [
    {
      name: "company-website.com",
      status: "Active",
      visits: 1247,
      leads: 89
    },
    {
      name: "blog.startup.io",
      status: "Active",
      visits: 856,
      leads: 34
    },
    {
      name: "ecommerce-store.com",
      status: "Setup Required",
      visits: 0,
      leads: 0
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Monitor your offline engagement performance</p>
          </div>
          <Link to="/dashboard/projects">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create New Project
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.name} className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Projects */}
        <Card className="shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>Your latest website integrations</CardDescription>
              </div>
              <Link to="/dashboard/projects">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-card border border-border flex items-center justify-center">
                      <span className="text-sm font-medium text-foreground">
                        {project.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{project.name}</p>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant={project.status === "Active" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="text-center">
                      <p className="font-medium text-foreground">{project.visits.toLocaleString()}</p>
                      <p>Visits</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-foreground">{project.leads}</p>
                      <p>Leads</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;