import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,850,000",
      beds: 5,
      baths: 4,
      area: "4,200 sqft",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
      featured: true,
      status: "For Sale"
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: "$4,200,000",
      beds: 3,
      baths: 3,
      area: "2,800 sqft",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
      featured: true,
      status: "For Sale"
    },
    {
      id: 3,
      title: "Waterfront Estate",
      location: "Miami Beach, FL",
      price: "$6,750,000",
      beds: 6,
      baths: 5,
      area: "6,500 sqft",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&h=300&fit=crop",
      featured: true,
      status: "For Sale"
    },
    {
      id: 4,
      title: "Mountain Retreat",
      location: "Aspen, CO",
      price: "$3,500,000",
      beds: 4,
      baths: 3,
      area: "3,800 sqft",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      featured: false,
      status: "For Sale"
    },
    {
      id: 5,
      title: "Urban Loft",
      location: "San Francisco, CA",
      price: "$1,950,000",
      beds: 2,
      baths: 2,
      area: "1,600 sqft",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop",
      featured: false,
      status: "For Sale"
    },
    {
      id: 6,
      title: "Historic Mansion",
      location: "Charleston, SC",
      price: "$2,300,000",
      beds: 7,
      baths: 6,
      area: "5,200 sqft",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
      featured: false,
      status: "For Sale"
    }
  ];

  return (
    <section className="py-20 bg-background" id="properties">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exceptional properties curated by our expert team and AI-powered recommendations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-luxury transition-all duration-300 bg-card border-border">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={property.featured ? "default" : "secondary"}
                      className={property.featured ? "bg-accent text-accent-foreground" : ""}
                    >
                      {property.featured ? "Featured" : property.status}
                    </Badge>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="absolute top-4 right-4 bg-card/80 hover:bg-card"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">{property.price}</div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      Tour
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
            View All Properties
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Properties;