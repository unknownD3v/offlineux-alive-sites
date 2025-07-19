import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad, MessageCircle, Mail, Play, Settings } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Templates = () => {
  const gameTemplates = [
    {
      id: 1,
      name: "Dino Runner",
      description: "Classic endless runner game that keeps users engaged",
      image: "/api/placeholder/300/200",
      category: "Game",
      popularity: "Most Popular",
      features: ["Endless gameplay", "Score tracking", "Mobile optimized"]
    },
    {
      id: 2,
      name: "Memory Match",
      description: "Card matching game with customizable branding",
      image: "/api/placeholder/300/200",
      category: "Game",
      popularity: "Popular",
      features: ["Brand colors", "Logo placement", "Difficulty levels"]
    },
    {
      id: 3,
      name: "Puzzle Game",
      description: "Simple puzzle to maintain user attention",
      image: "/api/placeholder/300/200",
      category: "Game",
      popularity: "New",
      features: ["Multiple levels", "Progress saving", "Hint system"]
    }
  ];

  const otherTemplates = [
    {
      id: 4,
      name: "Lead Capture Form",
      description: "Collect user information while offline",
      icon: Mail,
      category: "Form",
      features: ["Custom fields", "Email validation", "Data sync when online"]
    },
    {
      id: 5,
      name: "Branded Chatbot",
      description: "Automated chat responses for common questions",
      icon: MessageCircle,
      category: "Chat",
      features: ["Custom responses", "FAQ integration", "Escalation options"]
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Fallback Templates</h1>
            <p className="text-muted-foreground">Choose and customize templates for your offline experiences</p>
          </div>
        </div>

        {/* Game Templates */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Interactive Games</h2>
            <Badge variant="secondary">3 Templates</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameTemplates.map((template) => (
              <Card key={template.id} className="shadow-soft hover:shadow-medium transition-shadow">
                <div className="aspect-video bg-gradient-card border-b border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                    <Gamepad className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant={template.popularity === "Most Popular" ? "default" : "secondary"}>
                      {template.popularity}
                    </Badge>
                  </div>
                  <Button 
                    size="sm" 
                    className="absolute bottom-4 right-4"
                    variant="secondary"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <Badge variant="outline">{template.category}</Badge>
                  </div>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {template.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex space-x-2">
                      <Button className="flex-1">Select Template</Button>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Templates */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Lead Generation & Support</h2>
            <Badge variant="secondary">2 Templates</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherTemplates.map((template) => (
              <Card key={template.id} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <template.icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <Badge variant="outline" className="mt-1">{template.category}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {template.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex space-x-2">
                      <Button className="flex-1">Select Template</Button>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Templates;
