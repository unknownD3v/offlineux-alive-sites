import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gamepad2, MessageCircle, Mail, Play, Settings, Palette, Upload } from "lucide-react";
import AuthenticatedLayout from "@/components/AuthenticatedLayout";

const TemplatesPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const gameTemplates = [
    {
      id: "dino-runner",
      name: "Dino Runner",
      description: "Classic endless runner game that keeps users engaged while offline",
      category: "Game",
      popularity: "Most Popular",
      features: ["Endless gameplay", "Score tracking", "Mobile optimized", "Customizable themes"],
      demoUrl: "/demos/dino-runner.gif",
      usageCount: 1247
    },
    {
      id: "memory-match",
      name: "Memory Match",
      description: "Card matching game with customizable branding and difficulty levels",
      category: "Game",
      popularity: "Popular",
      features: ["Brand colors", "Logo placement", "Multiple difficulty levels", "Progress tracking"],
      demoUrl: "/demos/memory-match.gif",
      usageCount: 856
    },
    {
      id: "puzzle-game",
      name: "Puzzle Game",
      description: "Simple sliding puzzle to maintain user attention and engagement",
      category: "Game",
      popularity: "New",
      features: ["Multiple levels", "Progress saving", "Hint system", "Responsive design"],
      demoUrl: "/demos/puzzle-game.gif",
      usageCount: 234
    }
  ];

  const otherTemplates = [
    {
      id: "lead-form",
      name: "Lead Capture Form",
      description: "Collect user information while offline with smart form validation",
      icon: Mail,
      category: "Form",
      features: ["Custom fields", "Email validation", "Offline storage", "Auto-sync when online"],
      usageCount: 892
    },
    {
      id: "chatbot",
      name: "Branded Chatbot",
      description: "Automated chat responses for common questions and support",
      icon: MessageCircle,
      category: "Chat",
      features: ["Custom responses", "FAQ integration", "Escalation options", "Brand customization"],
      usageCount: 567
    }
  ];

  const templateSettings = {
    "dino-runner": {
      themeColor: "#3B82F6",
      logoUrl: "",
      headline: "Connection Lost? Let's Play!",
      ctaText: "Start Game",
      difficulty: "medium"
    },
    "memory-match": {
      themeColor: "#8B5CF6",
      logoUrl: "",
      headline: "Challenge Your Memory",
      ctaText: "Play Now",
      cardCount: 16
    },
    "lead-form": {
      themeColor: "#10B981",
      logoUrl: "",
      headline: "Stay Connected With Us",
      ctaText: "Submit",
      fields: ["name", "email", "company"]
    },
    "chatbot": {
      themeColor: "#F59E0B",
      logoUrl: "",
      headline: "How can we help?",
      ctaText: "Start Chat",
      responses: []
    }
  };

  return (
    <AuthenticatedLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Fallback Templates</h1>
          <p className="text-muted-foreground mt-1">Choose and customize templates for your offline experiences</p>
        </div>

        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="games">Interactive Games</TabsTrigger>
            <TabsTrigger value="forms">Forms & Chat</TabsTrigger>
          </TabsList>

          <TabsContent value="games" className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-foreground">Interactive Games</h2>
              <Badge variant="secondary">{gameTemplates.length} Templates</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gameTemplates.map((template) => (
                <Card key={template.id} className="shadow-soft hover:shadow-medium transition-shadow">
                  <div className="aspect-video bg-gradient-card border-b border-border relative overflow-hidden">
                    <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                      <div className="text-center">
                        <Gamepad2 className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Interactive Demo</p>
                      </div>
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
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Used by {template.usageCount.toLocaleString()} sites</span>
                      </div>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="flex-1">Select & Customize</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                              <DialogTitle>Customize {template.name}</DialogTitle>
                              <DialogDescription>
                                Personalize this template to match your brand and requirements.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-6 py-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="themeColor">Theme Color</Label>
                                  <div className="flex items-center space-x-2">
                                    <Input 
                                      id="themeColor" 
                                      type="color" 
                                      defaultValue="#3B82F6"
                                      className="w-16 h-10 p-1"
                                    />
                                    <Input defaultValue="#3B82F6" className="flex-1" />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="logo">Logo Upload</Label>
                                  <Button variant="outline" className="w-full">
                                    <Upload className="h-4 w-4 mr-2" />
                                    Upload Logo
                                  </Button>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="headline">Headline Text</Label>
                                <Input 
                                  id="headline" 
                                  defaultValue="Connection Lost? Let's Play!"
                                  placeholder="Enter your headline"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cta">Call-to-Action Text</Label>
                                <Input 
                                  id="cta" 
                                  defaultValue="Start Game"
                                  placeholder="Enter button text"
                                />
                              </div>
                            </div>
                            <div className="flex justify-end space-x-2">
                              <Button variant="outline">Preview Changes</Button>
                              <Button>Save Template</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="forms" className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-foreground">Forms & Chat Templates</h2>
              <Badge variant="secondary">{otherTemplates.length} Templates</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherTemplates.map((template) => (
                <Card key={template.id} className="shadow-soft hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                          <template.icon className="h-6 w-6 text-accent-foreground" />
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
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Used by {template.usageCount.toLocaleString()} sites</span>
                      </div>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="flex-1">Select & Customize</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                              <DialogTitle>Customize {template.name}</DialogTitle>
                              <DialogDescription>
                                Configure this template for your specific needs.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-6 py-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="themeColor">Theme Color</Label>
                                  <div className="flex items-center space-x-2">
                                    <Input 
                                      type="color" 
                                      defaultValue="#10B981"
                                      className="w-16 h-10 p-1"
                                    />
                                    <Input defaultValue="#10B981" className="flex-1" />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label>Logo Upload</Label>
                                  <Button variant="outline" className="w-full">
                                    <Upload className="h-4 w-4 mr-2" />
                                    Upload Logo
                                  </Button>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="headline">Headline Text</Label>
                                <Input 
                                  defaultValue="Stay Connected With Us"
                                  placeholder="Enter your headline"
                                />
                              </div>
                              {template.id === "lead-form" && (
                                <div className="space-y-2">
                                  <Label>Form Fields</Label>
                                  <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                      <input type="checkbox" defaultChecked />
                                      <span className="text-sm">Name</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <input type="checkbox" defaultChecked />
                                      <span className="text-sm">Email</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <input type="checkbox" defaultChecked />
                                      <span className="text-sm">Company</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <input type="checkbox" />
                                      <span className="text-sm">Phone</span>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {template.id === "chatbot" && (
                                <div className="space-y-2">
                                  <Label htmlFor="responses">Pre-defined Responses</Label>
                                  <Textarea 
                                    id="responses"
                                    placeholder="Enter common questions and responses..."
                                    rows={4}
                                  />
                                </div>
                              )}
                            </div>
                            <div className="flex justify-end space-x-2">
                              <Button variant="outline">Preview Changes</Button>
                              <Button>Save Template</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AuthenticatedLayout>
  );
};

export default TemplatesPage;