"use client";
import React, { useState } from "react";
import { useGetWeapons } from "@/api/services/weapons.service";
import { NextPage } from "next";
import Image from "next/image";

const Maps: NextPage = () => {
  const { data } = useGetWeapons();
  const [weaponType, setWeaponType] = useState("");

  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      <select onChange={(e) => setWeaponType(e.target.value)}>
        <option value="">All Weapons</option>
        <option value="heavy weapons">Heavy Weapons</option>
        <option value="rifles">Rifles</option>
        <option value="shotguns">Shotguns</option>
        <option value="pistols">Pistols</option>
        <option value="sniper rifles">Sniper Rifles</option>
        <option value="smgs">SMGs</option>
        <option value="close fight">Close Fight</option>
        {data
          ?.filter((w) => w.category === weaponType)
          .map((weapon) => (
            <div key={weapon.uuid}>
              <div>{weapon.displayName}</div>
              {weapon.displayIcon && (
                <Image
                  src={weapon.displayIcon}
                  className="object-contain"
                  width={500}
                  height={500}
                  alt="weapons-image"
                />
              )}
            </div>
          ))}
      </select>
    </div>
  );
};

export default Maps;
