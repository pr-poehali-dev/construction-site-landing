import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const projects = [
    {
      title: 'Бизнес-центр "Синергия"',
      description: 'Современный офисный комплекс класса А площадью 15 000 м²',
      image: 'https://cdn.poehali.dev/projects/6e4850bb-cef3-432c-a996-9c202820c804/files/809283c4-3c6c-4f9f-8afe-6da7ae1f9929.jpg',
      year: '2024'
    },
    {
      title: 'ЖК "Современный квартал"',
      description: 'Жилой комплекс на 350 квартир с развитой инфраструктурой',
      image: 'https://cdn.poehali.dev/projects/6e4850bb-cef3-432c-a996-9c202820c804/files/29a54dd9-b5ee-4796-ac8e-1bad727becd7.jpg',
      year: '2023'
    },
    {
      title: 'Торговый центр "Атлант"',
      description: 'Многофункциональный торговый комплекс площадью 8 000 м²',
      image: 'https://cdn.poehali.dev/projects/6e4850bb-cef3-432c-a996-9c202820c804/files/fe4c7a3a-37de-4894-b49a-6fa0760b9304.jpg',
      year: '2023'
    }
  ];

  const partners = [
    { name: 'ГазпромСтрой', icon: 'Building2' },
    { name: 'РосНефтьСтрой', icon: 'Factory' },
    { name: 'СтройТехМонтаж', icon: 'HardHat' },
    { name: 'ПромИнвестГрупп', icon: 'Wrench' },
    { name: 'ТехноБилдинг', icon: 'Building' },
    { name: 'МегаСтройКомплекс', icon: 'Hammer' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-accent/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
              Первая Строительная<br />Компания Регион 23
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональное строительство объектов любой сложности. 
              Реализуем проекты под ключ с гарантией качества и соблюдением сроков.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Icon name="Phone" size={20} />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="FileText" size={20} />
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Более 15 лет успешной работы на строительном рынке
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Trophy', title: '150+ проектов', desc: 'Реализовано за последние годы' },
              { icon: 'Users', title: '500+ сотрудников', desc: 'Квалифицированных специалистов' },
              { icon: 'Clock', title: '100%', desc: 'Соблюдение сроков выполнения' },
              { icon: 'Shield', title: '5 лет', desc: 'Гарантия на все работы' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Наши партнеры
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Сотрудничаем с ведущими компаниями отрасли
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-primary/5 rounded-lg flex items-center justify-center">
                    <Icon name={partner.icon as any} size={32} className="text-primary" />
                  </div>
                  <p className="text-xs font-medium text-secondary">{partner.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Реализованные проекты
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ за последние годы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" id="contacts">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Ваше имя
                      </label>
                      <Input 
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Телефон
                      </label>
                      <Input 
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Сообщение
                      </label>
                      <Textarea 
                        placeholder="Расскажите о вашем проекте"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Адрес офиса</h3>
                      <p className="text-muted-foreground text-sm">
                        г. Краснодар, ул. Красная, д. 123, офис 45
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Телефон</h3>
                      <p className="text-muted-foreground text-sm">
                        +7 (861) 123-45-67<br />
                        +7 (800) 555-35-35
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        info@psk-region23.ru<br />
                        office@psk-region23.ru
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Режим работы</h3>
                      <p className="text-muted-foreground text-sm">
                        Пн-Пт: 9:00 - 18:00<br />
                        Сб: 10:00 - 15:00
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Первая Строительная Компания Регион 23</h3>
            <p className="text-sm opacity-80">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
