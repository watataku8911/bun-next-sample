"use client";

import ContainerQuery from "@/components/ContainerQuery";
import MediaQuery from "@/components/MediaQuery";
import StarRating from "@/components/StarRating";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState<number>(0);
  return (
    <main className="max-w-3xl mx-auto px-3">
      {" "}
      <div className="flex justify-center">
        <StarRating onChange={setRating} />
      </div>
      <p>{rating}</p>
      {/* <section>
        <div className="bg-[#5bbee5] h-96">aaaa</div>
        <div className="relative">
          <div className="custom-shape-divider-bottom-1753775756">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
                fill="#5bbee5"
              ></path>
            </svg>
          </div>
        </div>
      </section> */}
      <MediaQuery />
      <div className="h-10"></div>
      <ContainerQuery />
    </main>
  );
}
