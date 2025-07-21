import { motion } from 'framer-motion';
import { Brain, TrendingUp, Smartphone, Shield, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Search",
      description: "Advanced machine learning algorithms to match you with perfect properties based on your preferences and behavior."
    },
    {
      icon: TrendingUp,
      title: "Market Analytics",
      description: "Real-time market insights, price trends, and investment opportunities powered by big data analysis."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Seamlessly browse, schedule viewings, and manage your property search on any device, anywhere."
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-level security and encryption for all your transactions and personal information."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to premium properties worldwide with local expertise in every market."
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Get notified immediately when properties matching your criteria become available."
    }
  ];

  return (
    <section className="py-20 bg-background" id="features">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Core Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of real estate with our cutting-edge technology and personalized service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-card border-border hover:shadow-luxury transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;