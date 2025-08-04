import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Factory, Users, Brain, Shield, Settings } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Factory },
    { path: "/factory-dashboard", label: "Factory Dashboard", icon: Factory },
    { path: "/vendor-portal", label: "Vendor Portal", icon: Users },
    { path: "/ai-matchmaking", label: "AI Matchmaking", icon: Brain },
    { path: "/admin", label: "Admin Panel", icon: Settings },
  ];

  return (
    <nav className="bg-card border-b border-border shadow-industrial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <Factory className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-foreground">RPM Delhi</span>
            </Link>
            <Badge variant="guarantee" className="hidden sm:inline-flex">
              <Shield className="w-3 h-3 mr-1" />
              Pay Only If It Works
            </Badge>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                >
                  <Link to={item.path} className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="industrial" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;