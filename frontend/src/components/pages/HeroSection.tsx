import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import TherapyScene from '@/components/3d/TherapyScene';
import heroImage from '@/assets/hero-therapy-room.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-secondary">
              
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#2F5249] to-[#748873] bg-clip-text text-transparent">Panchakarma</span>
              <br />
              <span className="text-foreground">Therapy</span>
<br />
              <span className="bg-gradient-to-r text-4xl lg:text-5xl font-bold leading-tigh from-[#DEAA79] to-[#DEAA79] bg-clip-text text-transparent">Your Therapy, Your Way</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Experience the ancient wisdom of Ayurvedic healing through personalized Panchakarma therapies. 
              Book sessions, track progress, and achieve holistic wellness with our comprehensive platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="healing" size="xl" className="group">
              Book Your Therapy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="therapy" size="xl">
              <Calendar className="w-5 h-5" />
              View Schedule
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#2F5249]">500+</div>
              <div className="text-sm text-muted-foreground">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#2F5249]">50+</div>
              <div className="text-sm text-muted-foreground">Expert Practitioners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#2F5249]">15+</div>
              <div className="text-sm text-muted-foreground">Therapy Types</div>
            </div>
          </div>
        </div>

        {/* 3D Scene */}
        <div className="animate-slide-up">
          <TherapyScene />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
}