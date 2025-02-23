import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import MagicCursor from "@/components/MagicCursor";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative">
        <MagicCursor />
        <Navbar />
        <main>
          <AppRouter />
        </main>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;