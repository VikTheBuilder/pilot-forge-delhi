import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, FileText, TrendingUp, Users, Factory, CheckCircle, Download, ExternalLink } from "lucide-react";
import KPIChart from "@/components/KPIChart";
import { successMetrics, factories, vendors, caseStudies } from "@/data/mockData";

const AdminPanel = () => {
  const platformStats = [
    { label: "Total Factories", value: "150", change: "+12 this month", icon: Factory, color: "text-primary" },
    { label: "Active Vendors", value: "80", change: "+8 this month", icon: Users, color: "text-secondary" },
    { label: "Completed Pilots", value: "420", change: "+45 this month", icon: CheckCircle, color: "text-success" },
    { label: "Platform GMV", value: "₹12.5Cr", change: "+₹2.1Cr this month", icon: TrendingUp, color: "text-warning" }
  ];

  const recentActivity = [
    { type: "Challenge Posted", description: "Mayapuri Steel Works posted 'Automated Quality Control'", time: "2 hours ago" },
    { type: "Bid Submitted", description: "AI Quality Labs bid on fabric waste reduction challenge", time: "4 hours ago" },
    { type: "Pilot Completed", description: "IoT Solutions completed predictive maintenance pilot", time: "1 day ago" },
    { type: "New Vendor", description: "Smart Analytics Co joined the platform", time: "2 days ago" }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-industrial-dark">Admin Dashboard</h1>
            <p className="text-muted-foreground">Platform analytics and case study management</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button variant="industrial">
              <Settings className="w-4 h-4 mr-2" />
              Platform Settings
            </Button>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-industrial">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          <KPIChart
            title="Platform Growth"
            description="Project volume and success rate over time"
            data={successMetrics}
            type="line"
            dataKey="projects"
            color="#f97316"
          />
          <KPIChart
            title="Success Rate Trend"
            description="Platform-wide project success rate"
            data={successMetrics.map(item => ({ ...item, successRate: Math.round((item.success / item.projects) * 100) }))}
            type="bar"
            dataKey="successRate"
            color="#22c55e"
          />
        </div>

        {/* Case Studies Management */}
        <Card className="shadow-industrial">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Auto-Generated Case Studies</span>
                </CardTitle>
                <CardDescription>
                  AI-generated case studies from successful pilot projects
                </CardDescription>
              </div>
              <Button variant="industrial" size="sm">
                Generate New Case Study
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="border rounded-lg p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{caseStudy.title}</h3>
                      <p className="text-muted-foreground">{caseStudy.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="success">{caseStudy.roi} ROI</Badge>
                      <Badge variant="outline">{caseStudy.timeline}</Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Vendor:</span>
                      <div className="font-semibold">{caseStudy.vendor}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Factory:</span>
                      <div className="font-semibold">{caseStudy.factory}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Savings:</span>
                      <div className="font-semibold text-success">{caseStudy.savings}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Solution:</span>
                      <div className="font-semibold">{caseStudy.solution}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Download PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Publish
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-industrial">
            <CardHeader>
              <CardTitle>Recent Platform Activity</CardTitle>
              <CardDescription>Latest actions across the marketplace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.type}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-industrial">
            <CardHeader>
              <CardTitle>Top Performing Vendors</CardTitle>
              <CardDescription>Vendors with highest success rates this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vendors.slice(0, 3).map((vendor, index) => (
                  <div key={vendor.id} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{vendor.name}</div>
                      <div className="text-sm text-muted-foreground">{vendor.specialization}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-success">{vendor.successRate}%</div>
                      <div className="text-sm text-muted-foreground">{vendor.completedProjects} projects</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;