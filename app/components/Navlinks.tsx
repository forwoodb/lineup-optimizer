"use client";
import { useState } from "react";
import Link from "next/link";

const Navlinks = () => {
  const [active, setActive] = useState("/");

  return (
    <>
      <li>
        <Link
          href={`/`}
          onClick={() => setActive("/")}
          className={`${active === "/" && "bg-base-200 border-b border-black"}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={`/optimizer`}
          onClick={() => setActive("/optimizer")}
          className={`${active === "/optimizer" && "bg-base-200 border-b border-black"}`}
        >
          Optimizer
        </Link>
      </li>
      <li>
        <Link
          href={`/projections`}
          onClick={() => setActive("/projections")}
          className={`${active === "/projections" && "bg-base-200 border-b border-black"}`}
        >
          Projections
        </Link>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
};

export default Navlinks;
