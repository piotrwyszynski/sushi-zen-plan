
import { useState, useEffect } from "react";
import { Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RestaurantClosedBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRestaurantClosed, setIsRestaurantClosed] = useState(false);

  useEffect(() => {
    const checkIfRestaurantClosed = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTime = currentHour * 60 + currentMinute; // w minutach od północy
      
      // Godziny otwarcia: 11:00 - 22:00 (zgodnie z Contact.tsx)
      const openTime = 11 * 60; // 11:00 w minutach
      const closeTime = 22 * 60; // 22:00 w minutach
      
      const isClosed = currentTime < openTime || currentTime >= closeTime;
      
      console.log("Sprawdzanie godzin:", {
        currentTime: `${currentHour}:${currentMinute.toString().padStart(2, '0')}`,
        currentTimeMinutes: currentTime,
        openTime,
        closeTime,
        isClosed
      });
      
      setIsRestaurantClosed(isClosed);
      setIsVisible(isClosed);
    };

    // Sprawdź od razu
    checkIfRestaurantClosed();
    
    // Sprawdzaj co minutę
    const interval = setInterval(checkIfRestaurantClosed, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || !isRestaurantClosed) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-destructive text-destructive-foreground shadow-lg border-t">
      <div className="container flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Clock className="h-5 w-5" />
          <div>
            <p className="font-semibold">Restauracja jest obecnie zamknięta</p>
            <p className="text-sm opacity-90">
              Otwarte: Poniedziałek - Niedziela 11:00 - 22:00
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="text-destructive-foreground hover:bg-destructive/10"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
