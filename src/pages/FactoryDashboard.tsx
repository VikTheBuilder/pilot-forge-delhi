import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp, Clock, DollarSign, Factory, CheckCircle } from "lucide-react";
import KPIChart from "@/components/KPIChart";
import { roiData, pilotProgress, challenges } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const FactoryDashboard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [challengeForm, setChallengeForm] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    timeline: ""
  });
  const { toast } = useToast();

  const handleSubmitChallenge = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Challenge Posted Successfully!",
      description: "Vendors will start bidding on your challenge within 24 hours.",
    });
    setIsFormOpen(false);
    setChallengeForm({
      title: "",
      description: "",
      category: "",
      budget: "",
      timeline: ""
    });
  };

  const kpiCards = [
    {
      title: "Active Pilots",
      value: "3",
      change: "+1 this month",
      icon: Factory,
      color: "text-primary"
    },
    {
      title: "Total Savings",
      value: "₹8.5L",
      change: "+₹2.1L this month",
      icon: DollarSign,
      color: "text-success"
    },
    {
      title: "Average ROI",
      value: "285%",
      change: "+15% improvement",
      icon: TrendingUp,
      color: "text-warning"
    },
    {
      title: "Success Rate",
      value: "92%",
      change: "Above average",
      icon: CheckCircle,
      color: "text-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-industrial-dark">Factory Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Okhla Garments</p>
          </div>
          <Button onClick={() => setIsFormOpen(true)} variant="industrial" size="lg">
            <Plus className="w-5 h-5 mr-2" />
            Post New Challenge
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiCards.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <Card key={index} className="shadow-industrial">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                  <Icon className={`w-4 h-4 ${kpi.color}`} />
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</div>
                  <p className="text-xs text-muted-foreground">{kpi.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          <KPIChart
            title="ROI Tracker"
            description="Real-time return on investment for active pilots"
            data={roiData}
            type="line"
            dataKey="roi"
            color="#f97316"
          />
          <KPIChart
            title="Pilot Progress"
            description="Weekly completion percentage for ongoing projects"
            data={pilotProgress}
            type="bar"
            dataKey="completion"
            color="#3b82f6"
          />
        </div>

        {/* Active Challenges */}
        <Card className="shadow-industrial">
          <CardHeader>
            <CardTitle>Your Challenges</CardTitle>
            <CardDescription>Track the status of your posted challenges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {challenges.slice(0, 3).map((challenge) => (
                <div key={challenge.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge variant={challenge.status === "Active" ? "success" : challenge.status === "In Progress" ? "warning" : "default"}>
                        {challenge.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{challenge.bids} bids</span>
                      <span className="text-sm text-muted-foreground">{challenge.budget}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Challenge Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-2xl mx-4">
              <CardHeader>
                <CardTitle>Post New Challenge</CardTitle>
                <CardDescription>
                  Describe your manufacturing challenge and let vendors propose solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitChallenge} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Challenge Title</Label>
                    <Input
                      id="title"
                      value={challengeForm.title}
                      onChange={(e) => setChallengeForm({...challengeForm, title: e.target.value})}
                      placeholder="e.g., Reduce energy consumption by 15%"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea
                      id="description"
                      value={challengeForm.description}
                      onChange={(e) => setChallengeForm({...challengeForm, description: e.target.value})}
                      placeholder="Describe your current process, pain points, and desired outcomes..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={challengeForm.category} onValueChange={(value) => setChallengeForm({...challengeForm, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="waste-reduction">Waste Reduction</SelectItem>
                          <SelectItem value="predictive-maintenance">Predictive Maintenance</SelectItem>
                          <SelectItem value="quality-control">Quality Control</SelectItem>
                          <SelectItem value="energy-optimization">Energy Optimization</SelectItem>
                          <SelectItem value="automation">Automation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select value={challengeForm.timeline} onValueChange={(value) => setChallengeForm({...challengeForm, timeline: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-12-months">6-12 months</SelectItem>
                          <SelectItem value="12-months-plus">12+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={challengeForm.budget} onValueChange={(value) => setChallengeForm({...challengeForm, budget: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="up-to-1l">Up to ₹1 Lakh</SelectItem>
                        <SelectItem value="1l-5l">₹1-5 Lakhs</SelectItem>
                        <SelectItem value="5l-10l">₹5-10 Lakhs</SelectItem>
                        <SelectItem value="10l-plus">₹10+ Lakhs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="industrial">
                      Post Challenge
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default FactoryDashboard;