import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductsProvider } from "./context/ProductsContext.tsx";
import TheHeader from "./components/TheHeader.tsx";
import TheFooter from "./components/TheFooter.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { CardProvider } from "./context/CardContext.tsx";
import { WishlistProvider } from "./context/WishListContext.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ProductsProvider>
      <CardProvider>
        <WishlistProvider>
          <Router>
            <TheHeader />
            <App />
            <TheFooter />
          </Router>
        </WishlistProvider>
      </CardProvider>
    </ProductsProvider>
  </QueryClientProvider>
);
