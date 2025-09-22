import AvatarService from "@/components/avatar-service";
import CircleImage from "@/components/circle-image";
import CoverParticles from "@/components/cover-particles";
import SliderService from "@/components/slider-service";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
        <TransitionPage/>
        <CoverParticles/>
        <CircleImage/>
        <AvatarService/>
        <div className="grid items-center justify-center h-screen max-w-5xl 
        gap-6 mx-auto md:grid-cols-2 md:px-20">
            <div className="max-w-[450px] mt-20 md:mt-0">
                <h1 className="text-2xl  leading-tight text-center md:text-left md:text-4xl md:mb-5">
                    Mis {" "}
                     <span className="font-bold text-secondary">
                        Servicios.
                        </span>
                </h1>
                    <p className="mb-3 text-l font-semibold text-gray-300">
                        Ofrezco  servicios de desarrollo web frontend. especializados en la creasion de 
                        sitios atractivos y funcionales. 
                        Diseño interfaces de usuario intuitivas y responsivas,
                        que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.
                        Si buscas un desarrollador frontend comprometido con la calidad y la
                        satisfacción del cliente con conocimiento de backend, no dudes en contactarme.

                    </p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-pink-300"  >Contactame</button>
              
            </div>

            {/* right side */}
            <div>
                <SliderService/>

            </div>

        </div>
        
        </>

    );
}

export default ServicesPage;