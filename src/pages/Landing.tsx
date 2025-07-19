import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad, Mail, MessageCircle, Zap, Star, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Landing = () => {
  const features = [
    {
      icon: Gamepad,
      title: "Offline Games",
      description: "Lightweight games to keep users engaged when connectivity is lost"
    },
    {
      icon: Mail,
      title: "Lead Capture Forms",
      description: "Collect user information even when your main site is unreachable"
    },
    {
      icon: MessageCircle,
      title: "Branded Chatbots",
      description: "Maintain customer support with offline-capable chat experiences"
    },
    {
      icon: Zap,
      title: "1-line SDK Integration",
      description: "Deploy in minutes with our simple JavaScript integration"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechFlow",
      content: "OfflineUX turned our connectivity issues into engagement opportunities. Our bounce rate dropped 40%.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO at StartupCo",
      content: "The integration was seamless. Now our users actually enjoy our offline pages instead of leaving.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Marketing Director at GrowthLab",
      content: "We've collected more leads from our offline fallbacks than our main forms. Incredible ROI.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-bold text-foreground">OfflineUX</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors">Login</Link>
            <Link to="/signup">
              <Button>Start Free</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Engage your visitors, even when they're offline.
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Turn lost connections into branded experiences — games, chatbots, and lead forms when your site goes offline.
            </p>
            <Link to="/signup">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="mt-16 max-w-5xl mx-auto">
            <img 
              src={heroImage} 
              alt="OfflineUX Platform" 
              className="rounded-xl shadow-large mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything you need for offline engagement
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform connectivity issues into opportunities with our comprehensive offline experience platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by growing companies
            </h2>
            <p className="text-xl text-muted-foreground">
              See how teams are turning offline moments into growth opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border shadow-soft bg-background">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                  <span className="text-foreground font-bold text-sm">O</span>
                </div>
                <span className="text-xl font-bold">OfflineUX</span>
              </div>
              <p className="text-muted-foreground">
                Turning offline moments into engagement opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-muted-foreground">
                hello@offlineux.com
              </p>
            </div>
          </div>
          <div className="border-t border-muted-foreground mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 OfflineUX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;