import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import Monitoring from "@/pages/Monitoring";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Redirect root to /ru */}
      <Route path="/">
        {() => <Redirect to="/ru" />}
      </Route>
      
      {/* Language-specific routes */}
      <Route path="/ru" component={Home} />
      <Route path="/kk" component={Home} />
      
      {/* Monitoring dashboard */}
      <Route path="/new" component={Monitoring} />
      
      {/* Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Router />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
