import Link from "next/link";
// import {auth} from "../_lib/auth";

export default async function Navigation() {
  //auth()方程会去设置cookies和header来实现登陆加密，所以一旦使用auth()会使该route变为dynamic rendering
  //由于这个navigation出现在每一页，会使所有的routes都变成dynamic rendering
  // const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex items-center gap-4"
          >
            <span>Guest area</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
