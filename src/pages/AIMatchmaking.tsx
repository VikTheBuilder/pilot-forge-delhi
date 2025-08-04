import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Brain, Star, TrendingUp, Award, Search, Filter, Users, Target } from "lucide-react";
import { vendors, challenges } from "@/data/mockData";

const AIMatchmaking = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Categories", count: 12 },
    { id: "waste-reduction", name: "Waste Reduction", count: 3 },
    { id: "predictive-maintenance", name: "Predictive Maintenance", count: 4 },
    { id: "quality-control", name: "Quality Control", count: 2 },
    { id: "automation", name: "Automation", count: 3 }
  ];

  const algorithmMetrics = [
    { label: "Vendor Success Rate", value: "88%", description: "Average success rate across platform" },
    { label: "Match Accuracy", value: "94%", description: "AI-predicted successful partnerships" },
    { label: "Time to Match", value: "2.3 days", description: "Average time from challenge to match" },
    { label: "Satisfaction Score", value: "4.7/5", description: "Factory feedback on AI matches" }
  ];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getMatchScore = (vendor: any, challengeType: string) => {
    // Simulate AI matching algorithm
    const baseScore = vendor.successRate;
    const specialtyBonus = vendor.specialization.toLowerCase().includes(challengeType.toLowerCase()) ? 10 : 0;
    const experienceBonus = vendor.completedProjects > 15 ? 5 : 0;
    return Math.min(100, baseScore + specialtyBonus + experienceBonus);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Brain className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-industrial-dark">AI Matchmaking Engine</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our advanced algorithm analyzes vendor performance, factory requirements, and success patterns 
            to create optimal matches for Industry 4.0 pilot projects.
          </p>
        </div>

        {/* Algorithm Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {algorithmMetrics.map((metric, index) => (
            <Card key={index} className="shadow-industrial text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-primary">{metric.value}</CardTitle>
                <CardDescription className="font-medium">{metric.label}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filter */}
        <Card className="shadow-industrial">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Smart Vendor Discovery</span>
            </CardTitle>
            <CardDescription>
              Use AI-powered search to find the perfect vendor for your specific challenge
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search vendors by expertise, technology, or industry focus..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-1"
                >
                  <span>{category.name}</span>
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Recommended Vendors */}
        <Card className="shadow-industrial">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-warning" />
              <span>AI Recommended Vendors</span>
            </CardTitle>
            <CardDescription>
              Vendors ranked by our AI algorithm based on success rates and specialization match
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVendors.map((vendor, index) => {
                const matchScore = getMatchScore(vendor, "predictive maintenance");
                return (
                  <Card key={vendor.id} className="shadow-sm hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{vendor.name}</CardTitle>
                          <CardDescription>{vendor.specialization}</CardDescription>
                        </div>
                        <Badge variant="success" className="font-bold">
                          {matchScore}% Match
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Success Rate:</span>
                          <div className="font-semibold text-success">{vendor.successRate}%</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Projects:</span>
                          <div className="font-semibold">{vendor.completedProjects}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Avg. Savings:</span>
                          <div className="font-semibold text-primary">{vendor.avgSavings}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Rating:</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-warning fill-current" />
                            <span className="font-semibold">{vendor.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xs text-muted-foreground">Why AI recommends this vendor:</div>
                        <ul className="text-xs space-y-1">
                          <li className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-success rounded-full"></div>
                            <span>High success rate in similar projects</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-success rounded-full"></div>
                            <span>Specializes in {vendor.specialization}</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-success rounded-full"></div>
                            <span>Proven track record with {vendor.completedProjects} projects</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Profile
                        </Button>
                        <Button variant="industrial" size="sm" className="flex-1">
                          Contact Vendor
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* How AI Matching Works */}
        <Card className="shadow-industrial">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-secondary" />
              <span>How Our AI Matching Works</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Data Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Analyzes vendor performance history, success rates, and specialization areas
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold">Challenge Matching</h3>
                <p className="text-sm text-muted-foreground">
                  Matches factory challenges with vendor expertise using machine learning algorithms
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-warning" />
                </div>
                <h3 className="font-semibold">Success Prediction</h3>
                <p className="text-sm text-muted-foreground">
                  Predicts project success probability based on historical patterns and vendor fit
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIMatchmaking;