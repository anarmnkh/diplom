import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"



const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <a id="link" className="text-white text-xl font-bold">Next.js App</a>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a id="link" className="text-white hover:text-gray-300">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a  id="link" className="text-white hover:text-gray-300">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a id="link" className="text-white hover:text-gray-300">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar