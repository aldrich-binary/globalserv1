import { Card } from "@/components/ui/card";
import { Scale, TrendingUp, Users } from "lucide-react";

export const FeatureSection = () => {
  const features = [
    {
      icon: Scale,
      title: "Consultoría Gubernamental",
      description:
        "Asesoría a Gobiernos Estatales y Municipales en proyectos de diseño institucional, análisis de transición y creación de procedimientos.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: TrendingUp,
      title: "Auditoría Legal y Financiera",
      description:
        "Auditoría Legal a Fideicomisos y recursos públicos, con enfoque en el cumplimiento normativo y la transparencia.",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      icon: Users,
      title: "Transición Gubernamental",
      description:
        "Capacitación a servidores públicos en procesos de entrega-recepción y metodologías para cumplimiento normativo.",
      color: "from-amber-500 to-amber-700",
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="mb-6 text-5xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            Despacho boutique con valor diferenciado en la funcionalidad de las
            Ciencias Sociales (Derecho-Economía-Política), especializado en
            transición gubernamental y servicios al sector público y privado.
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
