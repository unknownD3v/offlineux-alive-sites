import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, TrendingUp, Users, Eye, MousePointer, ArrowUpRight } from "lucide-react";
import AuthenticatedLayout from "@/components/AuthenticatedLayout";
import { Link } from "react-router-dom";

const DashboardMain = () => {
  const stats = [
    {
      name: "Total Fallback Visits",
      value: "8,247",
      change: "+18%",
      changeType: "increase",
      icon: Eye
    },
    {
      name: "Total Leads Captured",
      value: "524",
      change: "+23%",
      changeType: "increase",
      icon: Users
    },
    {
      name: "Offline Engagements This Week",
      value: "1,389",
      change: "+12%",
      changeType: "increase",
      icon: MousePointer
    },
    {
      name: "Active Projects",
      value: "5",
      change: "+1",
      changeType: "increase",
      icon: TrendingUp
    }
  ];

  const recentActivity = [
    {
      type: "lead",
      message: "New lead captured from company-website.com",
      time: "2 minutes ago",
      email: "sarah.chen@techflow.com"
    },
    {
      type: "visit",
      message: "Fallback page activated on blog.startup.io",
      time: "15 minutes ago",
      count: "12 users engaged"
    },
    {
      type: "project",
      message: "New project added: ecommerce-store.com",
      time: "1 hour ago"
    }
  ];

  const topPerformingProjects = [
    {
      domain: "company-website.com",
      visits: 2847,
      leads: 89,
      conversionRate: "3.1%"
    },
    {
      domain: "blog.startup.io",
      visits: 1856,
      leads: 34,
      conversionRate: "1.8%"
    },
    {
      domain: "ecommerce-store.com",
      visits: 1245,
      leads: 67,
      conversionRate: "5.4%"
    }
  ];

  return (
    <AuthenticatedLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back, John</h1>
            <p className="text-muted-foreground mt-1">Here's what's happening with your offline experiences today.</p>
          </div>
          <Link to="/dashboard/projects">
            <Button size="lg">
              <Plus className="h-4 w-4 mr-2" />
              Create New Project
            </Button>
          </Link>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.name} className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-1">{stat.name}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <div className="flex items-center text-sm text-primary">
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                        {stat.change}
                      </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/50">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      {activity.email && (
                        <p className="text-xs text-primary mt-1">{activity.email}</p>
                      )}
                      {activity.count && (
                        <p className="text-xs text-primary mt-1">{activity.count}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Performing Projects */}
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Top Performing Projects</CardTitle>
                  <CardDescription>Your highest converting domains</CardDescription>
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
                {topPerformingProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div>
                      <p className="font-medium text-foreground">{project.domain}</p>
                      <p className="text-sm text-muted-foreground">
                        {project.visits.toLocaleString()} visits • {project.leads} leads
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{project.conversionRate}</p>
                      <p className="text-xs text-muted-foreground">conversion</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default DashboardMain;