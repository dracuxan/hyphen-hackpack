import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import StateDetails from "@/pages/StateDetails";
import ContactUs from "@/pages/ContactUs";
import CustomerSegmentationPage from "@/pages/CustomerSegmentation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/campaign/details" component={StateDetails} />
      <Route path="/campaign/customer-segmentation" component={CustomerSegmentationPage} />
      <Route path="/contact" component={ContactUs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
