export const NumberSection = () => {
  return (
    <>
      <section className="relative pt-28 pb-32 bg-primary overflow-hidden">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="mb-24 border-b border-white border-opacity-10">
            <h2 className="pb-24 text-6xl md:text-7xl xl:text-8xl text-white font-bold tracking-tight leading-none md:max-w-3xl">
              Experiencia en Transición Gubernamental
            </h2>
          </div>
          <div className="flex flex-wrap -m-8">
            {[
              {
                label: "Gobiernos atendidos",
                value: "2+",
                desc: "Gobiernos estatales de Puebla y Tamaulipas en procesos de transición.",
              },
              {
                label: "Años de experiencia",
                value: "10+",
                desc: "Especialización en transición gubernamental y desarrollo institucional.",
              },
              {
                label: "Servicios integrales",
                value: "7+",
                desc: "Contables, financieros, administrativos, fiscales, legales, económicos y políticos.",
              },
            ].map((stat, idx) => (
              <div key={idx} className="w-full md:w-1/3 p-8">
                <p className="mb-6 text-gray-200 font-semibold leading-normal">
                  {stat.label}
                </p>
                <h3 className="mb-4 text-6xl md:text-7xl xl:text-8xl text-white font-bold tracking-tight leading-none">
                  {stat.value}
                </h3>
                <p className="text-gray-300 font-medium leading-relaxed md:w-56">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
