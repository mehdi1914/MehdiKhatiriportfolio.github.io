import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}