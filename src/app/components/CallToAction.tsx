import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl dark:text-white">
        Transforme la Protección de sus Empresas
      </h2>

      <p className="mx-auto mt-4 max-w-sm text-gray-500 dark:text-gray-400">
        Obtenga escenarios viables y soluciones sólidas en materia **jurídica y
        financiera** para sus proyectos estratégicos.
      </p>

      <Button asChild className="p-7 mt-10">
        <Link href={"/"}>Solicitar una Asesoría</Link>
      </Button>
    </div>
  );
};
