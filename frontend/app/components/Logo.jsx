import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex gap-2">
        <div className="logo  text-center bg-white shadow-md">
          <ImArrowUpRight2 className="text-accent font-bold text-2xl" />
        </div>
        <div className="hidden md:flex text-white">NEXTA</div>
      </div>
    </Link>
  );
}
