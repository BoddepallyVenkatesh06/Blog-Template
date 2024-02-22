import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="w-full bg-bodyColor font-bodyFont text-white px-4">
        <div className="max-w-screen-xl mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
