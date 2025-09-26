"use client";
import Image from "next/image";
import MotionTransition from "./transition-component";


const AvatarService = () => {
    return (
        <MotionTransition position="right" 
        className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/avatarSentado1.png" alt="My Avatar" width={200} height={200} className="fixed bottom-5 left-5 w-[200px] h-auto pointer-events-none select-none"/>
        </MotionTransition>
    );
}
export default AvatarService;