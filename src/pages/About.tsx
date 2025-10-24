import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About FoodyFlow</h1>
          <p className="text-lg text-muted-foreground">
            Your trusted partner for delicious food delivery
          </p>
        </div>

        <Card className="mb-8 animate-fade-in">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              FoodyFlow was founded with a simple mission: to bring restaurant-quality food
              directly to your doorstep. We believe that everyone deserves access to
              delicious, fresh meals without the hassle of cooking or dining out.
            </p>
            <p className="text-muted-foreground">
              Our carefully curated menu features a wide variety of dishes, desserts, drinks,
              and ice cream, all prepared by expert chefs using the finest ingredients. Whether
              you're craving comfort food, healthy options, or sweet treats, we've got you covered.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center animate-fade-in">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">10,000+ Customers</h3>
              <p className="text-sm text-muted-foreground">
                Serving happy customers every day
              </p>
            </CardContent>
          </Card>

          <Card className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Made with Love</h3>
              <p className="text-sm text-muted-foreground">
                Every dish prepared with care
              </p>
            </CardContent>
          </Card>

          <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Award Winning</h3>
              <p className="text-sm text-muted-foreground">
                Recognized for quality and service
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Fresh ingredients sourced daily from trusted suppliers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Expert chefs with years of culinary experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Hygienic preparation and packaging standards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Fast and reliable delivery service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Customer satisfaction guarantee</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
