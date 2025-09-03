import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function F1StyleWebsite() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-black text-white flex items-center justify-between px-6 py-4 shadow-md">
        <div className="flex items-center gap-4">
          <div className="text-red-600 font-bold text-xl">F1</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-red-500">Schedule</a>
            <a href="#" className="hover:text-red-500">Power Rankings</a>
            <a href="#" className="hover:text-red-500">News</a>
            <a href="#" className="hover:text-red-500">Teams</a>
          </nav>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </Button>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-black text-white flex flex-col p-4 md:hidden">
          <a href="#" className="py-2 hover:text-red-500">Schedule</a>
          <a href="#" className="py-2 hover:text-red-500">Power Rankings</a>
          <a href="#" className="py-2 hover:text-red-500">News</a>
          <a href="#" className="py-2 hover:text-red-500">Teams</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Power Rankings: Zandvoort Drama</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Who impressed our judges amid the chaos at the Dutch Grand Prix?
        </p>
      </section>

      {/* Articles */}
      <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="rounded-2xl shadow-lg hover:shadow-xl transition">
            <CardContent className="p-4">
              <img
                src={`https://picsum.photos/seed/${item}/400/200`}
                alt="article"
                className="rounded-xl mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Article Title {item}</h2>
              <p className="text-sm text-gray-600">
                Short preview of the article goes here. Click to read more.
              </p>
            </CardContent>
          </Card>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-sm text-center py-6 mt-10">
        © 2025 F1 Clone Website. Built with React & Tailwind.
      </footer>
    </div>
  );
}

