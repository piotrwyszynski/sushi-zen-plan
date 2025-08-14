
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RestaurantClosedBanner } from "./components/RestaurantClosedBanner";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { CheckoutAddress } from "./pages/CheckoutAddress";
import { CheckoutPayment } from "./pages/CheckoutPayment";
import { CheckoutSummary } from "./pages/CheckoutSummary";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./hooks/useAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-background text-foreground">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/checkout/address" element={<CheckoutAddress />} />
                  <Route path="/checkout/payment" element={<CheckoutPayment />} />
                  <Route path="/checkout/summary" element={<CheckoutSummary />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <RestaurantClosedBanner />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
