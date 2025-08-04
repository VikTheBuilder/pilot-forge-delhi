import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Factory, Users, Brain, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import KPIChart from "@/components/KPIChart";
import { successMetrics, factories, vendors } from "@/data/mockData";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Risk-Free Trials",
      description: "Pay only when solutions deliver measurable results"
    },
    {
      icon: Factory,
      title: "Delhi Factory Network",
      description: "Connect with verified Industry 4.0 vendors"
    },
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Smart vendor-challenge matching algorithms"
    }
  ];

  const stats = [
    { label: "Active Factories", value: "150+", color: "text-primary" },
    { label: "Verified Vendors", value: "80+", color: "text-secondary" },
    { label: "Successful Pilots", value: "420+", color: "text-success" },
    { label: "Average ROI", value: "250%", color: "text-warning" }
  ];

  return (
    <div className="min-h-screen bg-gradient-industrial">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="guarantee" className="mb-6 text-lg px-6 py-3">
            <Shield className="w-5 h-5 mr-2" />
            Pay Only If It Works - Guaranteed!
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-industrial-dark mb-6">
            Delhi's Industry 4.0
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Pilot Marketplace
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect Delhi factories with cutting-edge tech vendors for risk-free Industry 4.0 pilots. 
            Test IoT, AI, and automation solutions - pay only when they deliver measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="industrial" asChild>
              <Link to="/factory-dashboard">
                <Factory className="w-5 h-5 mr-2" />
                Post Challenge
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/vendor-portal">
                <Users className="w-5 h-5 mr-2" />
                Browse Opportunities
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-industrial-dark mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to transform your factory
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-industrial hover:shadow-glow transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-industrial-dark mb-4">
              Success Metrics
            </h2>
            <p className="text-xl text-muted-foreground">
              Track our platform's impact on Delhi's manufacturing sector
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <KPIChart
              title="Project Success Rate"
              description="Successful project completions over time"
              data={successMetrics}
              type="bar"
              dataKey="success"
              color="#3b82f6"
            />
            <KPIChart
              title="Total Projects"
              description="Growth in pilot project volume"
              data={successMetrics}
              type="line"
              dataKey="projects"
              color="#f97316"
            />
          </div>
        </div>
      </section>

      {/* Factory Network */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-industrial-dark mb-4">
              Trusted by Delhi's Leading Factories
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {factories.map((factory) => (
              <Card key={factory.id} className="shadow-industrial">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {factory.name}
                    <Badge variant="outline">{factory.type}</Badge>
                  </CardTitle>
                  <CardDescription>{factory.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Active Pilots:</span>
                      <span className="font-semibold">{factory.activePilots}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Savings:</span>
                      <span className="font-semibold text-success">{factory.savings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Factory?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 150+ Delhi factories already using our risk-free pilot marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/factory-dashboard">
                Start Your First Pilot
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/ai-matchmaking">
                Browse Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;