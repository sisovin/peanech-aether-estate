import { motion } from 'framer-motion';
import { Code, Database, Cloud, Lock, Cpu, Palette } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: Code,
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      icon: Database,
      tech: ["Node.js", "PostgreSQL", "Redis", "GraphQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Cloud",
      icon: Cloud,
      tech: ["AWS", "Docker", "Kubernetes", "CDN"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      category: "Security",
      icon: Lock,
      tech: ["OAuth 2.0", "JWT", "SSL/TLS", "2FA"],
      color: "from-red-500 to-pink-500"
    },
    {
      category: "AI/ML",
      icon: Cpu,
      tech: ["TensorFlow", "Python", "OpenAI", "ML Pipeline"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      category: "Design",
      icon: Palette,
      tech: ["Figma", "Responsive", "Accessibility", "UX/UI"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge technologies to deliver exceptional performance and reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-luxury transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{tech.category}</h3>
                
                <div className="space-y-2">
                  {tech.tech.map((item, techIndex) => (
                    <div 
                      key={techIndex}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground inline-block mr-2 mb-2"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;