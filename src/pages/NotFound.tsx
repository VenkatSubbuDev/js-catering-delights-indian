import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-warm">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="bg-gradient-primary w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-elegant">
          <Search className="h-12 w-12 text-primary-foreground" />
        </div>
        
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Oops! The page you're looking for seems to have wandered off like a lost samosa. 
          Let's get you back to our delicious menu!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-muted-foreground">
          <p>Tried path: <code className="bg-muted px-2 py-1 rounded text-foreground">{location.pathname}</code></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
