"use client"

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";


const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center justify-center h-full p-6 py-20 md:py-0 md:grid-cols-2 md:justify-items-center-start gap-x-20 lg:gap-x-40">
                <Image src="/myAvatar.png" priority width="300" height="300" alt="Profile pic" className="mx-auto md:mx-0"/>

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left
                    md:text-3xl md:mb-10">
                        Si puedes imaginarlo, <br/>
                    <TypeAnimation
                        sequence={[
                            1000,
                            'puedes programarlo.',
                            1000,
                            '-ATS',
                            1000,
                        ]}
                        wrapper='span'
                        speed={30}
                        cursor={true}
                        repeat={Infinity}
                        className="font-bold text-secondary"
                    />
                    </h1>
                    <h2 className="font-bold text-xl text-center mx-auto mb-2 md:mx-0 md:mb-8">
                        Hola... soy Karen Ulcue </h2>
                    <p className="font-semibold text-justify mx-auto mb-2  md:mx-0 md:mb-8 ">
                       Desarrolladora Full Stack Java, apasionada por crear soluciones tecnológicas innovadoras y eficientes.
                       He trabajado con diversas tecnologías y frameworks, como <br></br> 
                       HTML | JavaScript | Bootstrap | PHP | MySQL | React | Next.js | Node.js | Java <br></br>
                       Mi experiencia abarca desde el desarrollo frontend hasta la integración con backend, 
                       siempre buscando crear soluciones eficientes y escalables. 
                       Actualmente me especializo en el desarrollo de web modernas.
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="/portfolio" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit 
                        rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </Link>
                        <Link href="https://api.whatsapp.com/send?phone=573126668300&text=Hola%20Karen%20vi%20tu%20portafolio,%20y%20me%20interesa%20hablar%20contigo..." className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary w-fit 
                        rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Contacta conmigo
                        </Link>
                    </div>

                </div>
            </div>
           
        </div>
    );
}

export default Introduction;