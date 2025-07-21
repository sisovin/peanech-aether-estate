import { motion } from 'framer-motion';
import { Mail, TrendingUp, Home, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    
    setEmail('');
    setIsLoading(false);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Weekly market analysis and investment opportunities"
    },
    {
      icon: Home,
      title: "New Listings",
      description: "Be the first to know about premium properties"
    },
    {
      icon: Users,
      title: "Expert Tips",
      description: "Professional advice from our top agents"
    }
  ];

  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stay Ahead of the Market
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Get exclusive access to market insights, new listings, and expert advice delivered to your inbox
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-primary-foreground/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Join 50,000+ Subscribers</h3>
                    <p className="text-primary-foreground/70">
                      Get weekly market updates and exclusive property alerts
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                    />
                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Subscribing...' : 'Subscribe Now'}
                    </Button>
                  </form>

                  <p className="text-xs text-primary-foreground/60 text-center mt-4">
                    By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;