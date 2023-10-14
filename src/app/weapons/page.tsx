"use client";
import React, { useState } from "react";
import { useGetWeapons } from "@/api/services/weapons.service";
import { NextPage } from "next";
import { WeaponType } from "@/utils/enums/enums";
import Card from "@/components/card/card";

const Weapons: NextPage = () => {
  const [weaponType, setWeaponType] = useState<string>(WeaponType.All);
  const { data } = useGetWeapons();

  const weaponTypeFilter = (
    <select onChange={(e) => setWeaponType(e.target.value)}>
      {Object.values(WeaponType).map((k) => (
        <option key={k} value={k}>
          {k}
        </option>
      ))}
    </select>
  );

  return (
    <div className="flex flex-col flex-wrap items-center justify-center py-5 gap-y-5">
      {/* Filter */}
      {weaponTypeFilter}
      {/* Weapons */}
      <div className="flex flex-row flex-wrap justify-center">
        {data
          ?.filter((w) =>
            weaponType === WeaponType.All
              ? true
              : weaponType === w.shopData?.category
          )
          .map((weapon) => (
            <Card key={weapon.uuid} weapon={weapon} />
          ))}
      </div>
    </div>
  );
};

export default Weapons;
