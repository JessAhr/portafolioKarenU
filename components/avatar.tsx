"use client";
import Image from "next/image";
import MotionTransition from "./transition-component";


const Avatar = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/avatarCafe.png" alt="My Avatar" width={150} height={150} className="fixed bottom-0 right-0 w-[300px] h-auto pointer-events-none select-none sm:w-[180px] md:w-[220px] lg:w-[300px]" />
        </MotionTransition>
    );
}
export default Avatar;