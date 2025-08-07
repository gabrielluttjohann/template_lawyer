import { Button } from './ui/Button';
import heroImg from '@/public/hero.png';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-40 pb-24 bg-black text-white"
    >
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight font-light">
          Advocacia Especializada
          <br />
          em <span className="text-accent font-semibold">Direito Bancário</span>
        </h1>

        <p className='mt-4 text-lg lg:text-xl'>Por 15 anos trabalhamos para os Bancos. Hoje, colocamos esse conhecimento a serviço da defesa dos nossos clientes.</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="https://wa.me/5551989905849?text=Olá,%20por%20favor,%20vim%20do%20site%20e%20gostaria%20de%20consultar%20agora%20com%20um%20advogado"
            variant="primary"
            size="md"
            className="max-sm:w-full"
          >
            Consultar agora
          </Button>

          <Button
            href="https://wa.me/5551989905849?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20um%20advogado"
            variant="outline"
            size="md"
            className="max-sm:w-full"
          >
            Agendar consulta
          </Button>
        </div>

        <img
          src={heroImg.src}
          alt="Advogadas do escritório"
          className="hidden md:block mt-16 w-full max-w-4xl mx-auto object-cover rounded-xl shadow-md"
        />
      </div>
    </section>
  );
};
