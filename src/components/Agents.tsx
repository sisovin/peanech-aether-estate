import { motion } from 'framer-motion';
import { Star, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior Real Estate Agent",
      specialization: "Luxury Properties",
      rating: 4.9,
      reviews: 127,
      phone: "+1 (555) 123-4567",
      email: "sarah.chen@peanechestate.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b55c?w=150&h=150&fit=crop&crop=face",
      properties: 45,
      experience: "8 years"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Investment Specialist",
      specialization: "Commercial Real Estate",
      rating: 4.8,
      reviews: 89,
      phone: "+1 (555) 234-5678",
      email: "marcus.rodriguez@peanechestate.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      properties: 32,
      experience: "12 years"
    },
    {
      id: 3,
      name: "Emily Johnson",
      title: "Residential Expert",
      specialization: "Family Homes",
      rating: 4.9,
      reviews: 156,
      phone: "+1 (555) 345-6789",
      email: "emily.johnson@peanechestate.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      properties: 67,
      experience: "6 years"
    },
    {
      id: 4,
      name: "David Kim",
      title: "Market Analyst",
      specialization: "Investment Properties",
      rating: 4.7,
      reviews: 73,
      phone: "+1 (555) 456-7890",
      email: "david.kim@peanechestate.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      properties: 28,
      experience: "10 years"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="agents">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Expert Agents
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with our certified real estate professionals who are committed to making your property dreams a reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-luxury transition-all duration-300 bg-card border-border group">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                      <AvatarImage src={agent.avatar} alt={agent.name} />
                      <AvatarFallback className="text-xl font-bold bg-gradient-primary text-primary-foreground">
                        {agent.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">{agent.name}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{agent.title}</p>
                  <p className="text-sm text-muted-foreground mb-3">{agent.specialization}</p>

                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center text-accent mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(agent.rating) ? 'fill-current' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">{agent.rating}</span>
                    <span className="text-sm text-muted-foreground ml-1">({agent.reviews})</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="font-medium text-foreground">{agent.properties}</div>
                      <div className="text-muted-foreground">Properties</div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{agent.experience}</div>
                      <div className="text-muted-foreground">Experience</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Chat
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
            View All Agents
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Agents;