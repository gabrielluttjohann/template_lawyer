import { ArrowRight, Menu } from 'lucide-react';
import Link from 'next/link';

const navbarItems = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Como trabalhamos',
    href: '#como-trabalhamos',
  },
  {
    label: 'Serviços',
    href: '#servicos',
  },

  {
    label: 'FAQ',
    href: '#faq',
  },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-10">
        <nav className="py-4 flex justify-between items-center">
          <Link href="#">
            <img
              src="/logo.png"
              alt="Logo da L&S Advocacia"
              className="w-30 h-14"
            />
          </Link>
          <ul className="hidden lg:flex ul">
            {navbarItems.map((item, index) => (
              <li key={index} className='hover:text-primary hover:font-semibold'>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <Link
            href="#"
            className="hidden  lg:inline-flex items-center bg-accent tracking-wide text-white border  rounded-sm px-3 py-3 font-bold gap-2"
          >
            Fale Conosco <ArrowRight size={16} />
          </Link>

          <Menu className="lg:hidden" />
        </nav>
      </div>
    </header>
  );
};
