import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, DollarSign, Building, Eye, Send } from "lucide-react";
import { challenges } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const VendorPortal = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null);
  const [isBidFormOpen, setIsBidFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [bidForm, setBidForm] = useState({
    solution: "",
    cost: "",
    timeline: "",
    successFee: "",
    guarantee: ""
  });
  const { toast } = useToast();

  const filteredChallenges = challenges.filter(challenge =>
    challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    challenge.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    challenge.factory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmitBid = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bid Submitted Successfully!",
      description: "The factory will review your proposal and contact you within 48 hours.",
    });
    setIsBidFormOpen(false);
    setSelectedChallenge(null);
    setBidForm({
      solution: "",
      cost: "",
      timeline: "",
      successFee: "",
      guarantee: ""
    });
  };

  const vendorStats = [
    { label: "Available Challenges", value: "12", icon: Building },
    { label: "Your Active Bids", value: "5", icon: Send },
    { label: "Success Rate", value: "88%", icon: Clock },
    { label: "Avg. Project Value", value: "₹3.2L", icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-industrial-dark">Vendor Portal</h1>
            <p className="text-muted-foreground">Browse challenges and submit risk-free proposals</p>
          </div>
          <Badge variant="guarantee" className="text-lg px-4 py-2">
            Pay-Only-If-Successful Model
          </Badge>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendorStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-industrial">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                  <Icon className="w-4 h-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Search */}
        <Card className="shadow-industrial">
          <CardHeader>
            <CardTitle>Find Challenges</CardTitle>
            <CardDescription>Search for challenges that match your expertise</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by category, factory, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => (
            <Card key={challenge.id} className="shadow-industrial hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant={challenge.status === "Active" ? "success" : challenge.status === "Bidding" ? "warning" : "default"}>
                    {challenge.status}
                  </Badge>
                  <Badge variant="outline">{challenge.category}</Badge>
                </div>
                <CardTitle className="text-lg">{challenge.title}</CardTitle>
                <CardDescription className="flex items-center space-x-2">
                  <Building className="w-4 h-4" />
                  <span>{challenge.factory}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {challenge.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>Budget:</span>
                    </span>
                    <span className="font-semibold">{challenge.budget}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Timeline:</span>
                    </span>
                    <span className="font-semibold">{challenge.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Current Bids:</span>
                    <span className="font-semibold">{challenge.bids}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => setSelectedChallenge(challenge)}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                  <Button 
                    variant="industrial" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => {
                      setSelectedChallenge(challenge);
                      setIsBidFormOpen(true);
                    }}
                  >
                    <Send className="w-4 h-4 mr-1" />
                    Submit Bid
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Challenge Detail Modal */}
        {selectedChallenge && !isBidFormOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{selectedChallenge.title}</CardTitle>
                    <CardDescription className="flex items-center space-x-2 mt-2">
                      <Building className="w-4 h-4" />
                      <span>{selectedChallenge.factory}</span>
                      <Badge variant="outline">{selectedChallenge.category}</Badge>
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedChallenge(null)}>
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Challenge Description</h3>
                  <p className="text-muted-foreground">{selectedChallenge.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Budget Range</h4>
                    <p className="text-lg font-semibold text-primary">{selectedChallenge.budget}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Timeline</h4>
                    <p className="text-lg font-semibold">{selectedChallenge.timeline}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Success Criteria</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Measurable improvement in target metrics</li>
                    <li>• Solution must be scalable across production lines</li>
                    <li>• 24/7 technical support during pilot period</li>
                    <li>• Training for factory staff included</li>
                  </ul>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setSelectedChallenge(null)}>
                    Close
                  </Button>
                  <Button 
                    variant="industrial"
                    onClick={() => setIsBidFormOpen(true)}
                  >
                    Submit Proposal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Bid Form Modal */}
        {isBidFormOpen && selectedChallenge && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Submit Proposal - {selectedChallenge.title}</CardTitle>
                <CardDescription>
                  Create a compelling pay-for-success proposal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitBid} className="space-y-6">
                  <div>
                    <Label htmlFor="solution">Solution Overview</Label>
                    <Textarea
                      id="solution"
                      value={bidForm.solution}
                      onChange={(e) => setBidForm({...bidForm, solution: e.target.value})}
                      placeholder="Describe your proposed solution, technology stack, and implementation approach..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cost">Upfront Cost</Label>
                      <Input
                        id="cost"
                        value={bidForm.cost}
                        onChange={(e) => setBidForm({...bidForm, cost: e.target.value})}
                        placeholder="₹50,000"
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Minimal upfront for setup/hardware
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="successFee">Success Fee</Label>
                      <Input
                        id="successFee"
                        value={bidForm.successFee}
                        onChange={(e) => setBidForm({...bidForm, successFee: e.target.value})}
                        placeholder="₹2,00,000"
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Paid only upon achieving targets
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="timeline">Implementation Timeline</Label>
                    <Input
                      id="timeline"
                      value={bidForm.timeline}
                      onChange={(e) => setBidForm({...bidForm, timeline: e.target.value})}
                      placeholder="8 weeks"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="guarantee">Success Guarantee</Label>
                    <Textarea
                      id="guarantee"
                      value={bidForm.guarantee}
                      onChange={(e) => setBidForm({...bidForm, guarantee: e.target.value})}
                      placeholder="We guarantee a minimum 20% improvement in the target metric within 3 months, or you pay nothing..."
                      rows={3}
                      required
                    />
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Proposal Summary</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Total Investment:</span>
                        <span className="font-semibold ml-2">
                          {bidForm.cost || "₹0"} + {bidForm.successFee || "₹0"} (on success)
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Risk to Factory:</span>
                        <span className="font-semibold ml-2 text-success">Minimal</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => {
                        setIsBidFormOpen(false);
                        setSelectedChallenge(null);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="industrial">
                      Submit Proposal
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

export default VendorPortal;