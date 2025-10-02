export const TestimonialsSection = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="container px-6 py-32 mx-auto">
        <div className="grid items-center gap-8 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-6xl font-bold text-[var(--color-primary-800)] tracking-tight leading-tight">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-gray-600">
              Confianza, acompañamiento y resultados. Empresas y particulares
              nos eligen por nuestra atención personalizada y estrategia legal
              efectiva.
            </p>
          </div>
          <div className="p-0 xl:col-span-3">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded-2xl shadow-md bg-gray-50 border border-gray-100">
                  <p className="text-gray-700">
                    “El despacho nos acompañó en todo el proceso, explicando
                    cada paso con claridad. Resolvieron una disputa mercantil
                    clave para nuestro negocio.”
                  </p>
                  <div className="flex items-center mt-5 space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                      alt="María González"
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        María González
                      </p>
                      <p className="text-sm text-gray-500">
                        Directora General, Inversiones MG
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl shadow-md bg-gray-50 border border-gray-100">
                  <p className="text-gray-700">
                    “Actuaron con rapidez para obtener medidas cautelares y
                    proteger nuestros activos. Su seguimiento y comunicación
                    fueron impecables.”
                  </p>
                  <div className="flex items-center mt-5 space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop"
                      alt="Carlos Pérez"
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        Carlos Pérez
                      </p>
                      <p className="text-sm text-gray-500">Emprendedor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded-2xl shadow-md bg-gray-50 border border-gray-100">
                  <p className="text-gray-700">
                    “Excelente asesoría preventiva. Evitamos un conflicto
                    laboral costoso gracias a su estrategia y a la negociación
                    con la contraparte.”
                  </p>
                  <div className="flex items-center mt-5 space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
                      alt="Lucía Fernández"
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        Lucía Fernández
                      </p>
                      <p className="text-sm text-gray-500">
                        Recursos Humanos, Grupo Nova
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl shadow-md bg-gray-50 border border-gray-100">
                  <p className="text-gray-700">
                    “Profesionales, estratégicos y cercanos. Lograron un
                    resultado favorable en un caso penal complejo y siempre nos
                    mantuvieron informados.”
                  </p>
                  <div className="flex items-center mt-5 space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop"
                      alt="Javier Ortiz"
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        Javier Ortiz
                      </p>
                      <p className="text-sm text-gray-500">Particular</p>
                    </div>
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
