"use client";
import Image from "next/image";
import MotionTransition from "./transition-component";


const Avatar = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/avatarCafe.png" alt="My Avatar" width={150} height={150} className=" w-full h-full"/>
        </MotionTransition>
    );
}
export default Avatar;