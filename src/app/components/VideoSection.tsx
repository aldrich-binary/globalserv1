export const VideoSection = () => {
  return (
    <section className="relative pt-28 pb-40 bg-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      />
      <div className="absolute inset-0 bg-[var(--color-primary-900)] opacity-45"></div>

      <div className="relative z-10 container px-4 mx-auto">
        <h2 className="mb-20 text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-none text-white">
          Tranquilidad jurídica para tu negocio y patrimonio
        </h2>
        <div className="flex flex-wrap xl:items-center -m-8 xl:-m-10">
          <div className="w-full md:w-1/2 xl:w-auto p-8 xl:p-10">
            <a className="block overflow-hidden rounded-3xl" href="#">
              <div className="w-full h-96 bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-primary-800)] transform hover:scale-105 transition ease-in-out duration-1000"></div>
            </a>
          </div>
          <div className="w-full md:w-1/2 xl:flex-1 p-8 xl:p-10">
            <div className="md:max-w-xl">
              <div className="mb-11 pb-32 border-b border-white border-opacity-30">
                <h3 className="text-lg font-semibold md:max-w-lg text-white">
                  Asesoría estratégica y representación litigiosa con enfoque
                  preventivo y resultados medibles.
                </h3>
              </div>
              <div className="flex flex-wrap -m-8">
                <div className="w-auto md:w-1/2 p-8">
                  <div className="md:max-w-xs">
                    <h3 className="mb-4 text-lg text-white font-semibold">
                      Respuesta inmediata 24/7
                    </h3>
                    <p className="text-white text-opacity-90 font-medium">
                      Canales de contacto urgentes para medidas cautelares y
                      asesoría inmediata.
                    </p>
                  </div>
                </div>
                <div className="w-auto md:w-1/2 p-8">
                  <div className="md:max-w-xs">
                    <h3 className="mb-4 text-lg text-white font-semibold">
                      Transparencia y seguimiento
                    </h3>
                    <p className="text-white text-opacity-90 font-medium">
                      Actualizaciones del estado del caso, cronogramas y
                      documentos en un solo lugar.
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
