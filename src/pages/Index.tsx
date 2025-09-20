import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeSection, setActiveSection] = useState('home')

  const portfolioItems = [
    {
      id: 1,
      title: 'Корпоративный фильм',
      category: 'Видео',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Рекламная кампания',
      category: 'Реклама',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Музыкальный клип',
      category: 'Музыка',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Документальный проект',
      category: 'Документалистика',
      image: 'https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Социальная реклама',
      category: 'Социальные проекты',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Промо ролик',
      category: 'Промо',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop'
    }
  ]

  const teamMembers = [
    {
      id: 1,
      name: 'Алексей Волков',
      role: 'Режиссёр',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Мария Петрова',
      role: 'Продюсер',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Дмитрий Козлов',
      role: 'Оператор',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Елена Смирнова',
      role: 'Монтажёр',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
    }
  ]

  const services = [
    {
      icon: 'Video',
      title: 'Видеопродакшн',
      description: 'Полный цикл производства видеоконтента от идеи до финального монтажа'
    },
    {
      icon: 'Camera',
      title: 'Съёмка',
      description: 'Профессиональная съёмка на современном оборудовании'
    },
    {
      icon: 'Edit3',
      title: 'Монтаж',
      description: 'Креативный монтаж и постпродакшн любой сложности'
    },
    {
      icon: 'Lightbulb',
      title: 'Креатив',
      description: 'Разработка концепций и творческих решений для ваших проектов'
    }
  ]

  const renderNavigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary tracking-wider">MEDIA</h1>
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'portfolio', label: 'Портфолио' },
              { id: 'about', label: 'О нас' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-background">
            Связаться
          </Button>
        </div>
      </div>
    </nav>
  )

  const renderHero = () => (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up tracking-wider">
          MEDIA
          <span className="block text-primary">SERVICES</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up">
          Создаём визуальные истории, которые захватывают внимание и остаются в памяти
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="bg-primary text-background hover:bg-primary/90 px-8 py-4 text-lg">
            Смотреть работы
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-background px-8 py-4 text-lg">
            Обсудить проект
          </Button>
        </div>
      </div>
    </section>
  )

  const renderServices = () => (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wider">
          НАШИ <span className="text-primary">УСЛУГИ</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 group animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const renderPortfolio = () => (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wider">
          НАШЕ <span className="text-primary">ПОРТФОЛИО</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300 animate-fade-in">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Play" size={16} className="mr-2" />
                      Смотреть
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <span className="text-primary text-sm font-medium">{item.category}</span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const renderAbout = () => (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wider">
              О <span className="text-primary">НАС</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Мы — команда креативных профессионалов, объединённых страстью к созданию 
              качественного видеоконтента. Наш опыт охватывает все сферы медиапроизводства: 
              от корпоративных фильмов до музыкальных клипов.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              За годы работы мы реализовали более 200 проектов, каждый из которых 
              отражает наш индивидуальный подход и внимание к деталям.
            </p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Клиентов</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
              alt="Наша команда"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 tracking-wider">
            НАША <span className="text-primary">КОМАНДА</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="bg-card border-border text-center group hover:border-primary transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 mx-auto rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{member.name}</h4>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

  const renderFooter = () => (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4 tracking-wider">MEDIA</h3>
            <p className="text-muted-foreground">
              Создаём визуальные истории, которые вдохновляют и запоминаются.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@mediaservices.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Творческая, 1</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Icon name="Instagram" size={16} />
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Icon name="Youtube" size={16} />
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Icon name="Facebook" size={16} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Media Services. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      {renderNavigation()}
      
      {activeSection === 'home' && (
        <>
          {renderHero()}
          {renderServices()}
          {renderPortfolio()}
        </>
      )}
      
      {activeSection === 'portfolio' && renderPortfolio()}
      
      {activeSection === 'about' && renderAbout()}
      
      {renderFooter()}
    </div>
  )
}

export default Index