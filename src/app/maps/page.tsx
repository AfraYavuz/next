"use client";
import { useGetMaps } from "@/api/services/maps.service";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Maps: NextPage = () => {
  const { data } = useGetMaps();

  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      {data?.map((map) => (
        <div className="text-white" key={map.uuid}>
          <div>{map.displayName}</div>
          {map.splash && (
            <Image
              src={map.splash}
              className="object-contain"
              width={500}
              height={500}
              alt="map-image"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Maps;
