import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProposalPage from "./pages/ProposalPage";
import LoveLetterPage from "./pages/LoveLetterPage";
import SongsPage from "./pages/SongsPage";
import MemoriesPage from "./pages/MemoriesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProposalPage />} />
          <Route path="/letter" element={<LoveLetterPage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
