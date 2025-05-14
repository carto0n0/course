
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Свяжитесь с нами</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            У вас есть вопросы или вы хотите обсудить индивидуальный заказ? Заполните форму ниже или свяжитесь с нами напрямую.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-soulmade-orange/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-soulmade-orange" />
              </div>
              <h3 className="text-xl font-medium mb-2">Телефон</h3>
              <a 
                href="tel:+375295673210" 
                className="text-muted-foreground hover:text-soulmade-orange transition-colors duration-300"
              >
                +375295673210
              </a>
            </div>
            
            <div className="bg-card p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-soulmade-orange/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-soulmade-orange" />
              </div>
              <h3 className="text-xl font-medium mb-2">Адрес</h3>
              <a 
                href="https://www.google.com/maps/place/Surganava+St+45,+Minsk,+Belarus" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-soulmade-orange transition-colors duration-300"
              >
                г. Минск ул. Сурганова 45
              </a>
            </div>
            
            <div className="bg-card p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-soulmade-orange/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-soulmade-orange" />
              </div>
              <h3 className="text-xl font-medium mb-2">Email</h3>
              <a 
                href="mailto:info@soulmade.com" 
                className="text-muted-foreground hover:text-soulmade-orange transition-colors duration-300"
              >
                info@soulmade.com
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Напишите нам</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground mb-2">Имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-soulmade-orange/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-soulmade-orange/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-foreground mb-2">Тема</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-soulmade-orange/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-foreground mb-2">Сообщение</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-soulmade-orange/50"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-soulmade-orange hover:bg-soulmade-orange/90 text-white px-8 py-6 text-base"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </div>
            
            {/* Opening Hours and Map */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6">Часы работы</h2>
                
                <div className="bg-card p-6 rounded-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <Clock className="h-5 w-5 text-soulmade-orange mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-2">Магазин</h3>
                      <p className="text-muted-foreground mb-1">Пн - Пт: 10:00 - 19:00</p>
                      <p className="text-muted-foreground mb-1">Сб: 11:00 - 17:00</p>
                      <p className="text-muted-foreground">Вс: Выходной</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-soulmade-orange mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-2">Мастерская</h3>
                      <p className="text-muted-foreground mb-1">Пн - Пт: 09:00 - 18:00</p>
                      <p className="text-muted-foreground mb-1">Сб - Вс: Закрыто</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-6">Мы на карте</h2>
              <div className="rounded-lg overflow-hidden border border-input h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.4086028853637!2d27.59503631589!3d53.91783088010513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf73a5b2e49f%3A0xccd054146244e285!2sSurhanava%20St%2045%2C%20Minsk%2C%20Belarus!5e0!3m2!1sen!2sus!4v1653556158675!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SoulMade location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Часто задаваемые вопросы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Как долго изготавливаются изделия?</h3>
              <p className="text-muted-foreground">
                Время изготовления зависит от сложности изделия и текущей загрузки мастеров. Обычно это занимает от 3 до 14 дней.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Можно ли заказать индивидуальное изделие?</h3>
              <p className="text-muted-foreground">
                Да, мы принимаем индивидуальные заказы. Свяжитесь с нами, чтобы обсудить детали вашего проекта.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Какие способы оплаты вы принимаете?</h3>
              <p className="text-muted-foreground">
                Мы принимаем наличные, банковские карты, а также онлайн-платежи через ЕРИП.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Есть ли у вас доставка?</h3>
              <p className="text-muted-foreground">
                Да, мы осуществляем доставку по всей Беларуси. Сроки и стоимость зависят от региона.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
