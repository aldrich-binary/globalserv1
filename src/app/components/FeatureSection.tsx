import { Card } from "@/components/ui/card";
import { Scale, TrendingUp, Users } from "lucide-react";

export const FeatureSection = () => {
  const features = [
    {
      icon: Scale,
      title: "Soluciones Legales y Financieras",
      description:
        "Acceda a soluciones legales y financieras con visión estratégica.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: TrendingUp,
      title: "Proyectos de Inversión",
      description:
        "Estructure y optimice proyectos de inversión y obligaciones a largo plazo",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      icon: Users,
      title: "Gestión Pública",
      description:
        "Aproveche nuestra experiencia en transición y gestión para el sector público.",
      color: "from-amber-500 to-amber-700",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="mb-6 text-5xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            Ofrecemos servicios integrales de asesoría legal, financiera y
            política para la gestión y transición gubernamental.
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap -m-6">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div key={idx} className="w-full md:w-1/3 p-6">
                <Card className="group h-full p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div
                      className={`inline-flex items-center  border-1 justify-center w-16 h-16 rounded-2xl  shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect Line */}
                  <div
                    className={`mt-6 h-1 w-0 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500 rounded-full`}
                  ></div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
};
