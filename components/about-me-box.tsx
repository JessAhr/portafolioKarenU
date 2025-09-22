"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface AboutMeBoxpro {
    data: {
        id: number;
        logo:ReactNode;
        title: string;
        description: string;
    };
}

const AbouMeBox = (props: AboutMeBoxpro) => {
    const { data } = props;
    const { id,logo, title, description} = data;
    return (
        <div className="p-4 border border-teal-50 rounded-xl w-full bg-purple-400">

            <h3 className="mb-4 text-xl text-center font-bold">{title}</h3>
            <div className="flex gap-5 mt-5">
                <div
                 className="p-2 transition duration-150 
                rounded-lg bg-pink-400 hover:bg-indigo-300">
                    {logo}
                </div>
                <div 
                 className="p-2 transition duration-150 
                rounded-lg bg-purple-900 hover:bg-indigo-300">
                  {description}
                </div>
            </div>

        </div>
    );
}
export default AbouMeBox; 