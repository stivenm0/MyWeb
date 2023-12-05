import { useEffect } from "react";

function Certifications() {
  useEffect(() => {
    document.title = "Formación - Stivenm";
  }, []);

  return (
    <div className="flex flex-col ">
      <article className="relative flex flex-col justify-end max-w-sm px-8 pt-40 pb-8 mx-auto mt-10 overflow-hidden bg-gray-900 isolate rounded-2xl">
        <img
          src="/lgU/unad.webp"
          alt="University of Southern California"
          className="absolute inset-0 object-contain w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">
          Ingeniería de Sistemas
        </h3>
        <div className="z-10 overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
          2021 - actualmente (UNAD)
        </div>
      </article>
      <article className="relative flex flex-col justify-end max-w-sm px-8 pt-40 pb-8 mx-auto mt-10 overflow-hidden bg-gray-900 isolate rounded-2xl">
        <img
          src="/lgU/one.webp"
          alt="University of Southern California"
          className="absolute inset-0 object-contain w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">
          Desarrollo Frontend React
        </h3>
        <div className="z-10 overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
          2022 - 2023 (Alura)
        </div>
      </article>
      <article className="relative flex flex-col justify-end max-w-sm px-8 pt-40 pb-8 mx-auto mt-10 overflow-hidden bg-gray-900 isolate rounded-2xl">
        <img
          src="/lgU/utp.webp"
          alt="University of Southern California"
          className="absolute inset-0 object-contain w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">
          Desarrollo de Aplicaciones Web
        </h3>
        <div className="z-10 overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
          2022 - 2022 (UTP)
        </div>
      </article>
    </div>
  );
}

export default Certifications;
