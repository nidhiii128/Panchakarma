import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/layout/Navigation";
import HeroSection from "./components/pages/HeroSection";
import Dashboard from "./components/pages/Dashboard";
import TherapiesView from "./components/pages/TherapiesView";

const queryClient = new QueryClient();

const App = () => {
  const [activeView, setActiveView] = useState('home');

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HeroSection />;
      case 'dashboard':
        return <Dashboard />;
      case 'therapies':
        return <TherapiesView />;
      case 'schedule':
        return <div className="container mx-auto p-6"><div className="therapy-card p-12 text-center"><h2 className="text-2xl font-bold text-gradient-primary mb-4">Schedule View</h2><p className="text-muted-foreground">Coming soon - Comprehensive scheduling system</p></div></div>;
      case 'patients':
        return <div className="container mx-auto p-6"><div className="therapy-card p-12 text-center"><h2 className="text-2xl font-bold text-gradient-secondary mb-4">Patient Management</h2><p className="text-muted-foreground">Coming soon - Patient tracking and management</p></div></div>;
      case 'notifications':
        return <div className="container mx-auto p-6"><div className="therapy-card p-12 text-center"><h2 className="text-2xl font-bold text-gradient-primary mb-4">Notifications</h2><p className="text-muted-foreground">Coming soon - Real-time notifications system</p></div></div>;
      default:
        return <HeroSection />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-earth">
          <Navigation activeView={activeView} onViewChange={setActiveView} />
          <main>
            {renderView()}
          </main>
        </div>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
