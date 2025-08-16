import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "14-day free trial",
  "No credit card required",
  "Cancel anytime",
  "24/7 support included"
];

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Lead Generation?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of businesses that have revolutionized their sales process with Lead Hero. Start your free trial today and see the difference.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            variant="gradient"
            size="lg" 
            className="glow-primary group text-lg px-8 py-4"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/20 hover:bg-primary/10 text-lg px-8 py-4"
          >
            Schedule Demo
          </Button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;