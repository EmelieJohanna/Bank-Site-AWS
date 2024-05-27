"use client";

import Link from "next/link";
import Button from "./components/Button";
import SlideShow from "./components/SlideShow";

export default function Home() {
  return (
    <div className=" text-text">
      <SlideShow />
      <div className="m-4">
        <p className="mb-4">
          At Nexta Bank, we believe in empowering you with innovative banking
          solutions tailored to your unique needs. Whether you're planning for a
          big investment, managing day-to-day expenses, or saving for the
          future, our cutting-edge technology and personalized service ensure
          you achieve your financial goals with ease and confidence.
        </p>
        <div className="flex place-content-evenly">
          <Button className="bg-secondary m-2">
            <Link href="/signup">Sign up</Link>
          </Button>

          <Button className="bg-secondary m-2">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
