import { BadgeCheck, FileText, HandCoins, Users } from 'lucide-react';

const experiences = [
  {
    icon: BadgeCheck,
    title: 'Experiência de 15 anos em instituições financeiras',
  },
  {
    icon: HandCoins,
    title: 'Mais de 850 milhões renegociados',
  },
  {
    icon: Users,
    title: 'Mais de 1200 clientes atendidos',
  },
  {
    icon: FileText,
    title: 'Atuação em mais de 780 processos',
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="pb-24 bg-black text-white"
    >
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {experiences.map((experience, index) => (
            <article
              key={index}
              className="flex flex-col items-center text-center gap-4"
            >
              <experience.icon
                className="w-10 h-10"
                aria-hidden="true"
              />
              <p className="font-light text-2xl mt-4">{experience.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
