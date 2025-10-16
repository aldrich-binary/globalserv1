import Image from "next/image";

export const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="bg-white text-gray-800">
      <div className="container px-6 py-32 mx-auto">
        <div className="grid items-center gap-8 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-6xl font-bold text-[var(--color-primary-800)] tracking-tight leading-tight">
              Nuestros Clientes
            </h2>
            <p className="text-gray-600">
              Atendemos a empresas nacionales, extranjeras, cámaras
              empresariales (sector privado), así como a Gobiernos Federal,
              Estatal, Municipal, empresas de participación estatal y partidos
              políticos (sector público).
            </p>
          </div>
          <div className="p-0 xl:col-span-3">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded-2xl shadow-md bg-gray-50 border border-gray-100">
                  <p className="text-gray-700">
                    &ldquo;Su experiencia en transición gubernamental fue
                    fundamental para el proceso de entrega-recepción. Su
                    metodología garantizó el cumplimiento normativo en todos los
                    documentos.&rdquo;
                  </p>
                  <div className="flex items-center mt-5 space-x-4">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                      alt="Gobierno de Puebla"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        Gobierno de Puebla
                      </p>
                      <p className="text-sm text-gray-500">
                        Proceso de Transición Gubernamental
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl shadow-md bg-gray-50 border border-gray-100">
                  <p className="text-gray-700">
                    &ldquo;Su asesoría en auditoría legal y financiera nos
                    permitió identificar y solucionar contingencias en la
                    gestión de recursos públicos. Su enfoque integral fue clave
                    para el éxito del proceso.&rdquo;
                  </p>
                  <div className="flex items-center mt-5 space-x-4">
                    <Image
                      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop"
                      alt="Gobierno de Tamaulipas"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        Gobierno de Tamaulipas
                      </p>
                      <p className="text-sm text-gray-500">
                        Auditoría Legal y Financiera
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded-2xl shadow-md bg-gray-50 border border-gray-100">
                  <p className="text-gray-700">
                    &ldquo;Su enfoque en Ciencias Sociales
                    (Derecho-Economía-Política) nos proporcionó una perspectiva
                    integral única. Su asesoría en políticas públicas fue
                    fundamental para nuestro desarrollo institucional.&rdquo;
                  </p>
                  <div className="flex items-center mt-5 space-x-4">
                    <Image
                      src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
                      alt="Cámara Empresarial"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        Cámara Empresarial
                      </p>
                      <p className="text-sm text-gray-500">
                        Consultoría en Políticas Públicas
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl shadow-md bg-gray-50 border border-gray-100">
                  <p className="text-gray-700">
                    &ldquo;Su trabajo pro bono con comunidades desfavorecidas
                    demuestra su compromiso social. Su asesoría jurídica
                    gratuita ha sido fundamental para resolver casos que
                    carecían de recursos suficientes.&rdquo;
                  </p>
                  <div className="flex items-center mt-5 space-x-4">
                    <Image
                      src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop"
                      alt="Responsabilidad Social"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        Responsabilidad Social
                      </p>
                      <p className="text-sm text-gray-500">
                        Servicios Pro Bono
                      </p>
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
