'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BadgeCheck, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '@/public/logo.svg';

const footerLinks = [
  { label: 'Home', href: '#' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'FAQ', href: '#faq' },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo e descrição */}
        <div>
          <Image
            src={Logo}
            alt="Logo da L&S Advocacia"
            width={140}
            height={60}
            className="invert brightness-0 mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-300">
            Advocacia especializada em Direito Bancário, com atendimento em todo o Brasil.
          </p>

          <span className="mt-2 text-sm flex items-center gap-2">
            <BadgeCheck size={16} />
            OAB/RS 16.316
          </span>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Rua Tamandaré, 140, sala 901 - Novo Hamburgo, RS (mesmo prédio da
              receita estadual)
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> (51) 98990-5849
              <Phone size={16} /> (51) 98956-0443
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> contato@luttjohannsoares.com.br
            </li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} L&S Advocacia. Todos os direitos reservados.
      </div>
    </footer>
  );
};
