import Link from 'next/link';
import Wp from '../Wp';

const Contact = () => {
  return (
    <>
      <span id="contact"></span>

      <div className="min-h-screen flex justify-center  items-center 
      bg-opacity-80"
        style={{
          backgroundImage:
            " url('/images/website/martelo-sem.png')",
          backgroundAttachment: 'fixed',
          opacity: 0.9
        }}
      >
        <div className="container bg-opacity-25  bg-gray-400 py-20 border rounded-md shadow-lg">
          <div className="col-span-2 space-y-3 ">
            <h1 className="text-5xl font-bold text-[rgb(16,31,45)]">
              Precisando  de<p className="text-cyan-600 ">
                Peritos Contadores</p>
              para o seu caso?
            </h1>
            <p className="text-gray-400">
              {" "}
            </p>
          </div>
          <div className="grid place-items-center pt-12">
            <Wp />
          </div>
        </div>
      </div >

    </>
  );
};

export default Contact;
