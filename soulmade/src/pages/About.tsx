
import { Heart, Award, Users, Wrench } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">О нас</h1>
              <p className="text-lg text-muted-foreground mb-6">
                SoulMade – это место, где искусство встречается с душой. Мы создаем уникальные изделия ручной работы,
                которые не только украсят ваш дом, но и передадут тепло и энергию, вложенные в каждое творение.
              </p>
              <p className="text-lg text-muted-foreground">
                Наша миссия – сохранить и развивать традиции ручного ремесла, создавая изделия, которые будут радовать
                вас долгие годы и нести в себе частичку души мастера.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1617142137869-325955e2d3cb?auto=format&fit=crop&w=800&q=80" 
                alt="SoulMade craftspeople" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Наша история</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-medium mb-4">Начало пути</h3>
              <p className="text-muted-foreground mb-6">
                История SoulMade началась в 2015 году, когда группа друзей, увлеченных ручным творчеством, решила объединить свои таланты и создавать уникальные изделия, которые бы несли в себе душу и характер мастера.
              </p>
              <p className="text-muted-foreground mb-6">
                Начав с небольшой мастерской в Минске, мы постепенно расширялись, привлекая новых талантливых мастеров и расширяя ассортимент наших изделий.
              </p>
              <p className="text-muted-foreground">
                Сегодня SoulMade – это сплоченная команда профессионалов, каждый из которых вкладывает душу в свое ремесло, создавая по-настоящему уникальные вещи.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1518707617582-2937332060e4?auto=format&fit=crop&w=800&q=80" 
                alt="SoulMade workshop" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values" className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Наши ценности</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 rounded-full bg-soulmade-orange/10 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-soulmade-orange" />
              </div>
              <h3 className="text-xl font-medium mb-2">Любовь к делу</h3>
              <p className="text-muted-foreground">
                Мы делаем то, что любим, и любим то, что делаем. Каждое изделие создается с вдохновением и страстью.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 rounded-full bg-soulmade-orange/10 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-soulmade-orange" />
              </div>
              <h3 className="text-xl font-medium mb-2">Качество</h3>
              <p className="text-muted-foreground">
                Мы не признаем компромиссов в вопросах качества. Каждое изделие проходит строгий контроль.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 rounded-full bg-soulmade-orange/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-soulmade-orange" />
              </div>
              <h3 className="text-xl font-medium mb-2">Команда</h3>
              <p className="text-muted-foreground">
                Мы верим в силу команды, где каждый является экспертом в своей области и вносит вклад в общее дело.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 rounded-full bg-soulmade-orange/10 flex items-center justify-center mb-4">
                <Wrench className="h-8 w-8 text-soulmade-orange" />
              </div>
              <h3 className="text-xl font-medium mb-2">Мастерство</h3>
              <p className="text-muted-foreground">
                Мы постоянно совершенствуем наши навыки и техники, чтобы создавать изделия высочайшего уровня.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Наша команда</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" 
                  alt="Екатерина Петрова" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Екатерина Петрова</h3>
              <p className="text-muted-foreground mb-2">Основатель, Керамист</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80" 
                  alt="Александр Иванов" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Александр Иванов</h3>
              <p className="text-muted-foreground mb-2">Столяр, Резьба по дереву</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" 
                  alt="Мария Сидорова" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Мария Сидорова</h3>
              <p className="text-muted-foreground mb-2">Ювелир</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80" 
                  alt="Дмитрий Козлов" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Дмитрий Козлов</h3>
              <p className="text-muted-foreground mb-2">Текстиль, Вышивка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section id="workshop" className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Наша мастерская</h2>
              <p className="text-muted-foreground mb-6">
                Наша мастерская – это место, где творчество не знает границ. Здесь объединяются традиционные техники и современные подходы, создавая уникальные изделия с душой.
              </p>
              <p className="text-muted-foreground mb-6">
                Мы работаем с разнообразными материалами – от глины и дерева до металла и текстиля, воплощая в жизнь самые смелые идеи и задумки.
              </p>
              <p className="text-muted-foreground">
                Вы всегда можете посетить нашу мастерскую, чтобы увидеть процесс создания изделий своими глазами или заказать индивидуальный мастер-класс.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1588539543889-f57ce5249615?auto=format&fit=crop&w=400&q=80" 
                alt="SoulMade workshop" 
                className="rounded-lg w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1605641532626-3b0ee6eaec8c?auto=format&fit=crop&w=400&q=80" 
                alt="SoulMade workshop" 
                className="rounded-lg w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1543965860-0a2585bdbd09?auto=format&fit=crop&w=400&q=80" 
                alt="SoulMade workshop" 
                className="rounded-lg w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1565022536102-f7645c84354a?auto=format&fit=crop&w=400&q=80" 
                alt="SoulMade workshop" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
