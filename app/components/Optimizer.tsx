"use client";

import { useState } from "react";
import { LineupPlayer, CSVPlayer } from "../lib/types";

const Optimizer = () => {
  const [lineup, setLineup] = useState<LineupPlayer[]>();

  const DKSalaries = localStorage.getItem("DKSalaries");

  let csvData: CSVPlayer[];
  if (DKSalaries) {
    csvData = JSON.parse(DKSalaries);
  }

  const generateLineup = async () => {
    const res = await fetch("/api/optimize", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(csvData),
    });

    const data = await res.json();
    setLineup(data);
  };

  const positionOrder: Record<string, number> = {
    P: 0,
    C: 1,
    "1B": 2,
    "2B": 3,
    "3B": 4,
    SS: 5,
    OF: 6,
  };

  const orderedLineup = lineup
    ? [...lineup].sort((a, b) => {
        return (
          positionOrder[a["Roster Position"]] -
          positionOrder[b["Roster Position"]]
        );
      })
    : [];

  return (
    <>
      <button onClick={generateLineup} className="btn">
        Generate Lineup
      </button>
      <div className="lineup-wrapper w-full mt-8">
        {orderedLineup.map((player, i) => {
          return (
            <div
              key={i}
              className="flex justify-between border border-gray-200"
            >
              <div className="position">{player["Roster Position"]}</div>
              <div className="name">{player.Name}</div>
              <div className="salary">{player.Salary}</div>
              <div className="points">{player.Points}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Optimizer;
