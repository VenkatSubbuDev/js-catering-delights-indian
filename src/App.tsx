import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WeddingCatering from "./pages/services/WeddingCatering";
import CorporateEvents from "./pages/services/CorporateEvents";
import PrivateParties from "./pages/services/PrivateParties";
import EventCatering from "./pages/services/EventCatering";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/wedding-catering" element={<WeddingCatering />} />
          <Route path="/services/corporate-events" element={<CorporateEvents />} />
          <Route path="/services/private-parties" element={<PrivateParties />} />
          <Route path="/services/event-catering" element={<EventCatering />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
