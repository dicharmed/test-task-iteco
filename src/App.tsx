import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TransportPage } from "./pages/transport-page.component";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TransportPage />
    </QueryClientProvider>
  );
}

export default App;
