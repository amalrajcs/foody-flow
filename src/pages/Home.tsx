import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Clock, ShieldCheck } from 'lucide-react';
import BgImg from '../assets/bg-hero.jpg'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className=" relative py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: `url(${BgImg})` }}>
        <div className="py-8 container mx-auto px-4" >
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Delicious Food, Delivered Fresh
            </h1>
            <p className="text-lg md:text-xl text-white text-muted-foreground mb-8">
              Explore our amazing menu of dishes, desserts, drinks, and ice cream. 
              Order now and enjoy restaurant-quality food at home!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button size="lg" className="w-full sm:w-auto group">
                  Browse Menu
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto hover:bg-orange-500">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose FoodyFlow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-secondary/50 transition-colors animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your food delivered hot and fresh within 30 minutes
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-secondary/50 transition-colors animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-muted-foreground">
                We're always open to serve you delicious meals anytime
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-secondary/50 transition-colors animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                Fresh ingredients and expert chefs ensure top quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Items</h2>
          <div className="text-center">
            <p className="text-muted-foreground mb-8">
              Check out our most loved dishes, desserts, and drinks
            </p>
            <Link to="/menu">
              <Button size="lg" variant="outline">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
