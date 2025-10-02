export const NumberSection = () => {
  return (
    <>
      <section className="relative pt-28 pb-32 bg-primary overflow-hidden">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="mb-24 border-b border-white border-opacity-10">
            <h2 className="pb-24 text-6xl md:text-7xl xl:text-8xl text-white font-bold tracking-tight leading-none md:max-w-3xl">
              Defiende tus derechos con nuestro equipo jurídico
            </h2>
          </div>
          <div className="flex flex-wrap -m-8">
            {[
              {
                label: "Casos resueltos",
                value: "1,200+",
                desc: "Experiencia comprobada en litigio civil, mercantil y penal.",
              },
              {
                label: "Años de experiencia",
                value: "15+",
                desc: "Un equipo de abogados con trayectoria en firmas y tribunales.",
              },
              {
                label: "Clientes atendidos",
                value: "3,500+",
                desc: "Asesoría legal integral para empresas y particulares.",
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
