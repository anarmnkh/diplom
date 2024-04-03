
import Image from "next/image"
import Link from "next/link"



const Navbar = () => {
  return (
    <nav className="bg-white-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      
      <div className="flex items-center">
        <ul className="flex space-x-10 mr-4">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-black hover:text-red-500 ">Нүүр</a>
            </Link>
          </li>
          <li>
            <Link href="/news" legacyBehavior>
              <a className="text-black hover:text-red-500">Мэдээ, мэдээлэл</a>
            </Link>
          </li>
          <li>
            <Link href="/law" legacyBehavior>
              <a className="text-black hover:text-red-500">Хууль тогтоомж</a>
            </Link>
          </li>
          <li>
            <Link href="/service" legacyBehavior>
              <a className="text-black hover:text-red-500">Үйлчилгээ</a>
            </Link>
          </li>
        </ul>
      </div>
      <div > 
      
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Нэвтрэх
        </button>
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg space-x-16">
          Бүртгүүлэх
        </button>
      </div>
      
    </div>
  </nav>
    
  )
}

export default Navbar