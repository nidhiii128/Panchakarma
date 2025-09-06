import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Activity, Bell, Menu, X, Home, Stethoscope } from 'lucide-react';

interface NavigationProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function Navigation({ activeView, onViewChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'therapies', label: 'Therapies', icon: Stethoscope },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <>
     {/* Desktop Navigation */}
<nav className="hidden md:flex items-center justify-between p-4 therapy-card fixed top-0 left-0 w-full z-50 bg-white shadow">
  <div className="flex items-center space-x-2">
    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
      <span className="text-primary-foreground font-bold text-lg">🕉</span>
    </div>
    <div>
      <h1 className="text-xl font-bold text-gradient-primary">Panchakarma</h1>
      <p className="text-xs text-muted-foreground">Ayurvedic Healing</p>
    </div>
  </div>

  <div className="flex items-center space-x-2">
    {navItems.map((item) => {
      const Icon = item.icon;
      const isActive = activeView === item.id;
      return (
        <Button
          key={item.id}
          variant={isActive ? "healing" : "ghost"}
          size="sm"
          onClick={() => onViewChange(item.id)}
          className="transition-healing"
        >
          <Icon className="w-4 h-4" />
          {item.label}
        </Button>
      );
    })}
  </div>

  <div className="flex items-center space-x-3">
    <Button variant="outline" size="sm">
      Sign In
    </Button>
    <Button variant="sacred" size="sm">
      Book Therapy
    </Button>
  </div>
</nav>

      {/* Mobile Navigation */}
<nav className="md:hidden fixed top-0 left-0 w-full z-50 bg-white shadow">
  <div className="flex items-center justify-between p-4 therapy-card">
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold">🕉</span>
      </div>
      <h1 className="text-lg font-bold text-gradient-primary">Panchakarma</h1>
    </div>

    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </Button>
  </div>

  {isMobileMenuOpen && (
    <div className="therapy-card mx-4 mt-2 p-4 space-y-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeView === item.id;
        return (
          <Button
            key={item.id}
            variant={isActive ? "healing" : "ghost"}
            size="sm"
            onClick={() => {
              onViewChange(item.id);
              setIsMobileMenuOpen(false);
            }}
            className="w-full justify-start"
          >
            <Icon className="w-4 h-4" />
            {item.label}
          </Button>
        );
      })}
      <div className="pt-2 space-y-2">
        <Button variant="outline" size="sm" className="w-full">
          Sign In
        </Button>
        <Button variant="sacred" size="sm" className="w-full">
          Book Therapy
        </Button>
      </div>
    </div>
  )}
</nav>
    </>
  );
}