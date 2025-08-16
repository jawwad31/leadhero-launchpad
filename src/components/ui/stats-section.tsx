const stats = [{
  number: "50K+",
  label: "Active Users",
  description: "Service businesses trust Lead Hero"
}, {
  number: "2M+",
  label: "Leads Generated",
  description: "Successfully captured and converted"
}, {
  number: "300%",
  label: "ROI Increase",
  description: "Average improvement for our clients"
}, {
  number: "99.9%",
  label: "Uptime",
  description: "Reliable platform you can count on"
}];
const StatsSection = () => {
  return <section className="py-20 bg-gradient-card relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 animate-pulse-slow"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Trusted by Thousands of{" "}
            <span className="bg-gradient-hero bg-clip-text text-slate-50">
              Service Businesses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the service businesses that have transformed their client acquisition and management with Lead Hero
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => <div key={index} className="text-center group">
              <div className="mb-4">
                <div className="text-4xl sm:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
              </div>
              <div className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {stat.label}
              </div>
              <div className="text-muted-foreground">
                {stat.description}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default StatsSection;