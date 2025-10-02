export const StatsSection = () => {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="xl:pt-12">
              <h2 className="mb-7 text-6xl md:text-7xl text-white font-bold tracking-tight leading-tight">
                Confianza legal desde 2014
              </h2>
              <p className="text-white text-opacity-80">
                Acompañamos a empresas y particulares con estrategia jurídica,
                confidencialidad y resultados comprobables en litigio y
                consultoría.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="flex flex-wrap justify-center">
              <div className="relative inline-block rounded-3xl overflow-hidden shadow-2xl">
                <div
                  className="w-80 h-96 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="flex flex-wrap h-full xl:pb-12">
              <div className="flex flex-wrap self-end -m-10">
                <div className="w-full p-10">
                  <div className="md:max-w-sm">
                    <h3 className="mb-5 text-2xl text-white font-bold leading-snug">
                      Defensa estratégica
                    </h3>
                    <p className="text-white text-opacity-70 font-medium leading-relaxed">
                      Diseñamos la mejor ruta legal para tu caso: análisis de
                      riesgos, negociación y litigio con enfoque en resultados.
                    </p>
                  </div>
                </div>
                <div className="w-full px-10">
                  <div className="h-px bg-[var(--color-primary-500)]"></div>
                </div>
                <div className="w-full p-10">
                  <div className="md:max-w-sm">
                    <h3 className="mb-5 text-2xl text-white font-bold leading-snug">
                      Atención 24/7
                    </h3>
                    <p className="text-white text-opacity-70 font-medium leading-relaxed">
                      Respuesta inmediata para medidas cautelares, urgencias y
                      consultas prioritarias cuando más lo necesitas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
