import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import Timeline from "@/components/time-line";
import CoverParticles from "@/components/cover-particles";
import AboutMeBox from "@/components/about-me-box";
import { boxAboutMe } from "@/data";


const AboutMePage = () => {
    return (
        <>
            <TransitionPage/>
            <CoverParticles/>
            <ContainerPage>
                <Avatar/>
                <div className="relative z-10 grid max-w-5xl gap-6 
                                mx-auto mt-4 sm:grid-cols-2 md:grid-cols-2">
                    {boxAboutMe.map((data) => (
                    <AboutMeBox key={data.id} data={data} />
                    ))}
                
                </div>
                <h1 className="text-2xl leading-tight text-center 
                md:text-left md:text-5xl md:mt-10">Toda mi {" "}
                    <span className="font-bold text-secondary">trayectoria profesional</span>

                </h1>
                
                <CounterServices/>
                <Timeline/>
            
            </ContainerPage>
        </>
    );
}

export default AboutMePage;



