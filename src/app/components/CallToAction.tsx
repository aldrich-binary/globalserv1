import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl dark:text-white">
        Transforme su Gestión Gubernamental
      </h2>

      <p className="mx-auto mt-4 max-w-sm text-gray-500 dark:text-gray-400">
        Obtenga asesoría integral en Ciencias Sociales: Derecho, Economía y
        Política para procesos de transición gubernamental y desarrollo
        institucional.
      </p>

      <Button asChild className="p-7 mt-10">
        <Link href={"/contact"}>Solicitar una Asesoría</Link>
      </Button>
    </div>
  );
};
