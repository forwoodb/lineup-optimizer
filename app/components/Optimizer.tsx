"use client";

import { useState } from "react";
import { LineupPlayer, CSVPlayer } from "../lib/types";

interface OptimizerProps {
  csvData: CSVPlayer[];
}

const Optimizer = ({ csvData }: OptimizerProps) => {
  const [lineup, setLineup] = useState<LineupPlayer[]>();

  const generateLineup = async () => {
    const res = await fetch("/api/optimize", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(csvData),
    });

    const data = await res.json();
    setLineup(data);
  };

  return (
    <>
      <div>
        <button onClick={generateLineup}>Generate Lineup</button>
        {lineup?.map((player, i) => {
          return (
            <div key={i}>
              <p>{`${i} ${player.Name} ${player["Roster Position"]} ${player.Salary} ${player.Points}`}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Optimizer;
