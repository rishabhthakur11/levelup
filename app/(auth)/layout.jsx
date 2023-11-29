import Footer from "@/components/LandingpageComponents/Footer/Footer";
import Navbar from "@/components/LandingpageComponents/NavBar/Navbar";

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="bg-backgroundColor h-fit w-full">
          <div className="max-w-7xl mx-auto">
            <Navbar />
          </div>
          <div className="flex items-center justify-center mb-32 mt-20">{children}</div>
          <div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
