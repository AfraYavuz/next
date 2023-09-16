"use client";
import { useGetAgents } from "@/api/services/agents.service";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Agents: NextPage = () => {
  const { data } = useGetAgents();

  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      {data?.map((agent) => (
        <div className="text-white" key={agent.uuid}>
          <div>{agent.displayName}</div>
          {agent.fullPortrait && (
            <Image
              src={agent.bustPortrait}
              className="object-contain"
              width={500}
              height={500}
              alt="agent-image"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Agents;
