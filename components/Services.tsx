import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import cardImage01 from '@/public/cards/revisionais.jpeg';
import cardImage02 from '@/public/cards/defesa.jpeg';
import cardImage03 from '@/public/cards/negociacao.jpeg';
import cardImage04 from '@/public/cards/superendividamento.jpeg';
import cardImage05 from '@/public/cards/blindagem-patrimonio.jpeg';
import cardImage06 from '@/public/cards/auditoria.jpeg';

const cardContent = [
  {
    title: 'Ações revisionais de contratos bancários',
    image: cardImage01.src,
  },
  {
    title: 'Defesa técnica em ações de cobrança, execuções e busca e apreensão',
    image: cardImage02.src,
  },
  {
    title: 'Negociação judicial e extrajudicial de dívidas',
    image: cardImage03.src,
  },
  {
    title: 'Propositura de ação de superendividamento (Lei nº 14.181/2021)',
    image: cardImage04.src,
  },
  {
    title: 'Planejamento e proteção patrimonial contra riscos e bloqueios judiciais',
    image: cardImage05.src,
  },
  {
    title: 'Auditoria contratual e pedidos de restituição de valores pagos indevidamente',
    image: cardImage06.src,
  },
];

export const Services = () => {
  return (
    <section
      id="servicos"
      className="scroll-my-24 py-24 bg-[#565656] text-white"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-light text-center mb-16">Nossas Soluções</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardContent.map((card, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl overflow-hidden shadow-lg transition hover:scale-105"
            >
              <div className="relative w-full h-64">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover h-full fill"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-[240px]">
                <h3 className="text-xl font-light mb-6">{card.title}</h3>
                <Link
                  href="https://wa.me/5551989905849?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Falar com um especialista sobre: ${card.title}`}
                  className="text-accent flex items-center gap-2 hover:underline"
                >
                  Falar com um especialista
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
