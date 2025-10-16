import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative z-20 overflow-hidden pt-12 pb-28">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap xl:items-center -m-8">
          <div className="w-full md:w-1/2 xl:flex-1 p-8 xl:p-12">
            <div className="md:inline-block relative">
              <div className="overflow-hidden rounded-lg bg-gray-100 animate__animated animate__fadeInLeft">
                <div className="relative w-full ">
                  <Image
                    src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Imagen"
                    className="object-contain "
                    priority
                    width={500}
                    height={900}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:flex-1 p-8 xl:p-12">
            <div className="xl:max-w-2xl">
              <h1 className="animate__animated animate__fadeInRight mb-7 text-6xl md:text-7xl xl:text-7xl font-bold tracking-tight leading-none">
                Asesoría integral en Ciencias Sociales: Derecho, Economía y
                Política
              </h1>
              <p className="mb-9 animate__animated animate__fadeInUp animate__delay-1s text-lg text-gray-900 font-medium md:max-w-md">
                Despacho boutique especializado en servicios contables,
                financieros, administrativos, fiscales, legales, económicos y
                políticos para el desarrollo del país.
              </p>
              <div className="mb-16 p-1.5 xl:pl-7 inline-block md:max-w-xl w-full  rounded-3xl ">
                <div className="animate__animated animate__fadeInUp animate__delay-2s flex flex-wrap items-center gap-3 ">
                  <div className="w-full xl:flex-1 ">
                    <Input
                      className="p-7 rounded-lg w-full"
                      type="text"
                      placeholder="Ingresa tu e-mail y te contactaremos"
                    />
                  </div>
                  <div className="w-full xl:w-auto">
                    <Button
                      variant={"outline"}
                      className="p-7 bg-[var(--color-primary-900)] text-white text-md hover:bg-[var(--color-primary-800)] focus:ring focus:ring-[var(--color-primary-300)]"
                      type="button"
                    >
                      Agenda una cita
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex flex-col animate__animated animate__fadeInUp animate__delay-2s">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.16159 1.21266C7.48271 0.224341 8.88091 0.224342 9.20203 1.21266L10.3494 4.74386C10.493 5.18585 10.9049 5.48509 11.3696 5.48509H15.0825C16.1217 5.48509 16.5538 6.81486 15.7131 7.42568L12.7093 9.60808C12.3333 9.88124 12.176 10.3654 12.3196 10.8074L13.4669 14.3386C13.788 15.3269 12.6569 16.1488 11.8162 15.538L8.81234 13.3556C8.43637 13.0824 7.92725 13.0824 7.55128 13.3556L4.54746 15.538C3.70675 16.1488 2.57558 15.3269 2.8967 14.3386L4.04406 10.8074C4.18767 10.3654 4.03034 9.88124 3.65437 9.60808L0.650549 7.42567C-0.190162 6.81486 0.241906 5.48509 1.28108 5.48509H4.99401C5.45874 5.48509 5.87062 5.18585 6.01423 4.74386L7.16159 1.21266Z"
                          fill="#00B67A"
                        />
                      </svg>
                    ))}
                  </div>
                  <div className="flex gap-2 mb-2.5">
                    <p className="text-gray-900 font-bold">4.2/5</p>
                    <p className="text-gray-600 font-medium">(45k Reseñas)</p>
                  </div>
                  <p className="text-sm text-gray-500">Google Reviews</p>
                </div>
                <div className="h-16 w-px bg-gray-200"></div>
                <div className="flex flex-col animate__animated animate__fadeInUp animate__delay-2s">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.707 1.21266C8.02812 0.224341 9.42632 0.224342 9.74744 1.21266L10.8948 4.74386C11.0384 5.18585 11.4503 5.48509 11.915 5.48509H15.6279C16.6671 5.48509 17.0992 6.81486 16.2585 7.42568L13.2547 9.60808C12.8787 9.88124 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.3269 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.3269 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88124 4.19978 9.60808L1.19596 7.42567C0.355248 6.81486 0.787317 5.48509 1.82649 5.48509H5.53942C6.00415 5.48509 6.41603 5.18585 6.55964 4.74386L7.707 1.21266Z"
                          fill="#FF9D28"
                        />
                      </svg>
                    ))}
                  </div>
                  <div className="flex gap-2 mb-4">
                    <p className="text-gray-900 font-bold">4.1/5</p>
                    <p className="text-gray-600 font-medium">(18k Reseñas)</p>
                  </div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
