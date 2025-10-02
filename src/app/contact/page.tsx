import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { FooterSection } from "../components/FooterSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Pin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="antialiased bg-white text-gray-900">
      <Navbar />

      {/* Hero Section with Background */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-[var(--color-primary-900)] via-[var(--color-primary-800)] to-[var(--color-primary-700)]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="animate__animated animate__fadeInDown text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Contáctanos
            </h1>
            <p className="animate__animated animate__fadeInUp animate__delay-1s text-xl md:text-2xl text-blue-100 font-medium max-w-2xl mx-auto">
              Estamos aquí para brindarle la mejor asesoría jurídica, económica
              y política para su proyecto
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 -mt-20 relative z-20 pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Information Cards */}
              <div className="lg:col-span-2 space-y-6">
                {/* Main Contact Card */}
                <Card className="animate__animated animate__fadeInLeft p-8 shadow-xl  hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Información de Contacto
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start group">
                      <Button variant={"outline"} className="w-14 h-14">
                        <Phone />
                      </Button>
                      <div className="ml-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Teléfono
                        </h4>
                        <a
                          href="tel:+525512345678"
                          className="text-lg font-bold text-gray-900 hover:text-[var(--color-primary-700)] transition-colors"
                        >
                          +52 55 1234-5678
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <Button variant={"outline"} className="w-14 h-14">
                        <Mail />
                      </Button>
                      <div className="ml-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Correo
                        </h4>
                        <a
                          href="mailto:contacto@globalserv.com"
                          className="text-lg font-bold text-gray-900 hover:text-[var(--color-primary-700)] transition-colors break-all"
                        >
                          contacto@globalserv.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <Button variant={"outline"} className="w-14 h-14">
                        <MapPin />
                      </Button>
                      <div className="ml-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Dirección
                        </h4>
                        <p className="text-lg font-bold text-gray-900">
                          Av. Reforma 123, Col. Centro
                          <br />
                          Ciudad de México, 06000
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Hours Card */}
                <Card className="animate__animated animate__fadeInLeft animate__delay-1s p-8 shadow-xl  border-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Horario de Atención
                  </h3>
                  <div className="space-y-2 text-gray-800">
                    <p className="flex justify-between">
                      <span className="font-semibold">Lunes - Viernes:</span>
                      <span>9:00 - 18:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-semibold">Sábado:</span>
                      <span>10:00 - 14:00</span>
                    </p>
                    <p className="flex justify-between text-gray-600">
                      <span className="font-semibold">Domingo:</span>
                      <span>Cerrado</span>
                    </p>
                  </div>
                </Card>

                {/* Image Card */}
                <div className="animate__animated animate__fadeInLeft animate__delay-2s hidden lg:block">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1170&auto=format&fit=crop"
                      alt="Oficina GlobalServ"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="animate__animated animate__fadeInRight p-8 md:p-12 shadow-2xl ">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      Envíanos un Mensaje
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Complete el formulario y nos pondremos en contacto con
                      usted a la brevedad
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Nombre Completo *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Juan Pérez"
                          className="h-12 text-base"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Empresa / Organización
                        </label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Nombre de la empresa"
                          className="h-12 text-base"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Correo Electrónico *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="correo@ejemplo.com"
                          className="h-12 text-base"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Teléfono *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+52 55 1234-5678"
                          className="h-12 text-base"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Área de Interés *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { id: "legal", label: "Asesoría Jurídica" },
                          { id: "economic", label: "Consultoría Económica" },
                          { id: "political", label: "Gestión Política" },
                        ].map((area) => (
                          <label
                            key={area.id}
                            className="relative flex items-center justify-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[var(--color-primary-700)] hover:bg-blue-50 transition-all duration-200 has-[:checked]:border-[var(--color-primary-900)] has-[:checked]:bg-blue-50"
                          >
                            <input
                              type="radio"
                              name="area"
                              id={area.id}
                              className="sr-only peer"
                            />
                            <span className="text-sm font-medium text-gray-700 peer-checked:text-[var(--color-primary-900)]">
                              {area.label}
                            </span>
                            <svg
                              className="absolute right-3 w-5 h-5 text-[var(--color-primary-900)] hidden peer-checked:block"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Método de Comunicación Preferido *
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {[
                          {
                            id: "email-contact",
                            label: "Correo electrónico",
                            icon: "✉️",
                          },
                          {
                            id: "phone-contact",
                            label: "Teléfono",
                            icon: "📞",
                          },
                          { id: "whatsapp", label: "WhatsApp", icon: "💬" },
                        ].map((method) => (
                          <label
                            key={method.id}
                            className="relative flex items-center gap-2 px-5 py-3 border-2 border-gray-300 rounded-full cursor-pointer hover:border-[var(--color-primary-700)] hover:bg-blue-50 transition-all duration-200 has-[:checked]:border-[var(--color-primary-900)] has-[:checked]:bg-blue-50"
                          >
                            <input
                              type="radio"
                              name="contact-method"
                              id={method.id}
                              className="sr-only peer"
                            />
                            <span className="text-lg">{method.icon}</span>
                            <span className="text-sm font-medium text-gray-700 peer-checked:text-[var(--color-primary-900)] peer-checked:font-bold">
                              {method.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Describe tu Consulta *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent resize-none"
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        required
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <svg
                        className="w-5 h-5 text-[var(--color-primary-700)] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm text-gray-700">
                        Sus datos personales están protegidos conforme a nuestra
                        política de privacidad. Nos pondremos en contacto en un
                        plazo máximo de 24 horas.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 text-lg font-bold bg-[var(--color-primary-900)] hover:bg-[var(--color-primary-800)] text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                      Enviar Consulta
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Visítanos
              </h2>
              <p className="text-xl text-gray-600">
                Estamos ubicados en el corazón de la Ciudad de México
              </p>
            </div>
            <Card className="overflow-hidden shadow-2xl">
              <div className="relative h-96 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5089729904634!2d-99.1673!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sAv.%20Paseo%20de%20la%20Reforma%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
