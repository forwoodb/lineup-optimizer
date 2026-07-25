"use client";
// import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const pathname = usePathname();

  return (
    <>
      <li>
        <Link
          href={`/`}
          className={`${pathname === "/" && "bg-base-200 border-b border-black"}`}
        >
          Home
        </Link>
      </li>
      <li>
        <details>
          <summary>Optimizer</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li>
              <Link href={"/optimizer/draftkings"}>DraftKings</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link
          href={`/projections`}
          className={`${pathname === "/projections" && "bg-base-200 border-b border-black"}`}
        >
          Projections
        </Link>
      </li>
    </>
  );
};

export default Navlinks;
