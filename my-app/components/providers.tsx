import { CartProvider } from "@/components/cart/cart-provider";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}
