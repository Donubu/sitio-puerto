import Link from 'next/link';
import { Facebook, Instagram, Linkedin, X } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative w-full bg-gray-100 text-gray-600 z-50">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-gray-900 text-2xl font-bold mb-4">
              <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold text-gray-900">
                <Image src="https://static.puer.to/videos/logo.png" alt="Logo puerto" width="150" height="38" />
              </Link>  
            </h2>
            <p className="text-sm">
              La mejor agencia de marketing en Chile, especializada en publicidad integrada y estrategias digitales.
            </p>
            <p className="text-sm mt-2">
              <Link 
                className="text-blue-500 hover:underline" 
                href="https://www.google.com/maps/place/Av.+del+Valle+Nte.+945,+oficina+5612,+8580710+Huechuraba,+Regi%C3%B3n+Metropolitana/@-33.388266,-70.6177466,958m/data=!3m1!1e3!4m5!3m4!1s0x9662c8aa34ab372f:0x487fda8220dc881f!8m2!3d-33.3882571!4d-70.6178931?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank"
              >
                Avenida del Valle Norte 945, oficina 5612. Huechuraba, Santiago. CHILE.
              </Link>
            </p>
          </div>
          <div>
          </div>
         
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="hover:text-[#1877F2] transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-7 w-7" />
              </a>
              <a 
                href="#" 
                className="hover:text-[#E4405F] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-7 w-7" />
              </a>
              <a 
                href="#" 
                className="hover:text-[#000000] transition-all duration-300 transform hover:scale-110"
                aria-label="X (Twitter)"
              >
                <X className="h-7 w-7" />
              </a>
              <a 
                href="#" 
                className="hover:text-[#0A66C2] transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Agencia de Publicidad Puerto.</p>
        </div>
      </div>
    </footer>
  );
}