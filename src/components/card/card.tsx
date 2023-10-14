import { Weapon } from "@/api/interfaces/weapons.interface";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
interface CardProps {
  weapon: Weapon; // Weapon tipinde bir prop
}
const Card: NextPage<CardProps> = ({ weapon }) => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center mt-12">
        <a className="relative block w-1/2 bg-gray-100 group" href="##">
          <h6>{weapon.displayName}</h6>
          {weapon.displayIcon && (
            <Image
              src={weapon.displayIcon}
              className="object-contain"
              key={weapon.shopData?.category}
              width={500}
              height={500}
              alt="weapons-image"
            />
          )}

          <div className="relative p-5">
            <div className="mt-10">
              {/* Hidden content */}
              <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="p-2">
                  <p className="text-lg text-white">
                    Welcome to GeeksforGeeks.
                  </p>
                  <button className="px-4 py-2 text-sm text-white bg-green-600">
                    Visit site
                  </button>
                </div>
              </div>
              {/* End of hidden content */}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
