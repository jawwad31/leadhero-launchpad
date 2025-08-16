import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart3, Zap, MessageSquare, Calendar, Target, Globe, Shield, Smartphone } from "lucide-react";
const features = [{
  icon: Users,
  title: "Lead Management",
  description: "Capture and organize leads from multiple channels automatically. Never lose a potential customer again."
}, {
  icon: BarChart3,
  title: "Advanced Analytics",
  description: "Get deep insights into your sales pipeline with real-time reporting and performance metrics."
}, {
  icon: Zap,
  title: "Smart Automation",
  description: "Automate follow-ups, email sequences, and workflows to maximize conversion rates."
}, {
  icon: MessageSquare,
  title: "Multi-Channel Communication",
  description: "Connect with leads via SMS, email, voice calls, and social media from one platform."
}, {
  icon: Calendar,
  title: "Appointment Scheduling",
  description: "Let customers book appointments automatically with integrated calendar management."
}, {
  icon: Target,
  title: "Sales Funnels",
  description: "Build high-converting sales funnels with drag-and-drop landing page builder."
}, {
  icon: Globe,
  title: "Website Builder",
  description: "Create professional websites and landing pages without coding skills."
}, {
  icon: Shield,
  title: "Service Management",
  description: "Manage your service offerings, track project progress, and deliver exceptional client experiences."
}, {
  icon: Smartphone,
  title: "Mobile App",
  description: "Manage your business on the go with our native mobile applications."
}];
const FeaturesSection = () => {
  return <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-white">
            Everything Your Service Business Needs to{" "}
            <span className="bg-gradient-hero bg-clip-text text-slate-50">
              Thrive and Grow
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lead Hero combines powerful CRM capabilities with advanced automation tools designed specifically for service businesses to capture more leads, manage client relationships, and scale operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/20 transition-all duration-300 group hover:shadow-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;