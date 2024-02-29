import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image src="/images/website/man-grande.jpg" width={1920} height={1080} alt="hero" className="w-full h-full object-cover opacity-80" />
      </div>
      <div className="relative grid grid-cols-1 place-items-center h-screen">
        <div className=" text-center text-white font-bold z-10">
          <div className="space-y-3 bg-[rgb(16,31,45)] p-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-7xl text-white font-bold">Consultoria Jurídica em Complice </h1>
            <p className="text-xl md:text-2xl xl:text-5xl text-white font-bold">Quer saber sobre complice e precisa de um advogado especialista para te ajudar?</p>
            <button className="uppercase rounded-lg bg-green-700 hover:bg-white hover:text-green-700 duration-500 py-2 px-6 text-white">
              Entre em contato agora mesmo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
