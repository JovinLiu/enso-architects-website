import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        width="60"
        quality={50}
        height="60"
        alt="enso_logo"
        className="opacity-90 animation-logo"
      />
      <div className="flex flex-col items-start gap-2">
        <span className="text-xl font-semibold text-primary-100">Jovin Liu</span>
        <span className="text-md font-semibold text-primary-100">
          Experienced Architectural Designer
        </span>
      </div>
    </Link>
  );
}

export default Logo;
