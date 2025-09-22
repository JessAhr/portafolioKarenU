"use client";
import Image from "next/image";
import MotionTransition from "./transition-component";


const AvatarService = () => {
    return (
        <MotionTransition position="right" 
        className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/avatarSentado1.png" alt="My Avatar" width={150} height={150} className=" w-full h-full"/>
        </MotionTransition>
    );
}
export default AvatarService;