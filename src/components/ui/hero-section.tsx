import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/crm-dashboard-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                ⚡ Powered by Advanced AI
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with Lead Hero
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              The ultimate all-in-one CRM platform that captures, nurtures, and converts leads with intelligent automation and powerful analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 transition-all duration-300 glow-primary group"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 hover:bg-primary/10 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">14 Days</div>
                <div className="text-sm text-muted-foreground">Free Trial</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src="/LH-Dashboard.png" 
                alt="Lead Hero CRM Dashboard showcasing analytics, lead management, and business insights"
                className="w-full h-auto animate-float"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
