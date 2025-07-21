import { ArrowRight, CheckCheck } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '+850', label: 'Clientes Atendidos' },
  { value: '+550', label: 'Milhões renegociados' },
  { value: '+760', label: 'Processos' },
];

export const Hero = () => {
  return (
    <section className="min-h-screen pt-32 lg:pt-20 flex items-center ">
      <div className=" max-w-screen-xl mx-auto px-4 flex items-center">
        <div className="w-full lg:max-w-1/2 flex flex-col items-center lg:text-left text-center lg:justify-start lg:items-start">
          <span className="uppercase text-primary font-semibold mb-4 flex items-center gap-2">
            <CheckCheck
              fill="bg-primary"
              className="w-5 h-5"
            />
            Mais de 15 anos de experiência
          </span>
          <h1 className="heading-1 mb-4">
            Especialistas em Dívidas Bancárias e Proteção Patrimonial
          </h1>
          <p className="lead mb-8">
            Soluções jurídicas rápidas e seguras para quem está em situação de endividamento.
          </p>

          <Link
            href="#"
            className="inline-flex items-center bg-primary tracking-wide text-white border  rounded-sm px-3 py-3 font-bold gap-2"
          >
            Fale Com um Advogado
            <ArrowRight size={16} />
          </Link>

          <div className="mt-8 w-full md:w-auto">
            <div>
              <div className="bg-white rounded-2xl shadow-md p-6 flex">
                <div className="grid w-full grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center px-4 py-4 text-center min-w-[150px]"
                    >
                      <div>
                        <span className="paragraph font-semibold">{stat.value}</span>
                      </div>
                      <div>
                        <span className="muted">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src="/hero-bg.jpg"
                alt=""
                className='lg:hidden rounded-lg w-full bg-cover mt-8'
              />
            </div>
          </div>
        </div>

        <img
          src="/hero-bg.jpg"
          alt="Imagem principal: Advogada fazendo uma apresentação"
          className="hidden lg:block w-[45%] h-full object-cover object-center absolute top-0 right-0"
        />
      </div>
    </section>
  );
};
