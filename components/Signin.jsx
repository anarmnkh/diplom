import React from "react";

const Signin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Нэвтрэх</h2>
                </div>
                <form className="mt-8 space-y-4">
                    <div className="px-8">
                        <input type="email" autoComplete="none" required className="w-full px-4 py-3 border-b border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" placeholder="Утас эсвэл И-мэйл хаяг" />
                    </div>
                    <div className="px-8 mt-4">
                        <input type="password" autoComplete="none" required className="w-full px-4 py-3 border-b border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" placeholder="Нууц үг" />
                    </div>
                    <div className="px-8 mt-6">
                        <button className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-full text-black  bg-white hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border-gray-400">Нэвтрэх</button>
                    </div>
                    <div className="px-8 mt-4">
                        <button className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-full text-black bg-white hover:bg-gray-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border-gray-400">Бүртгүүлэх</button>
                    </div>
                    <div className="px-8 mt-6 flex items-center justify-between">
                        <div className="w-full h-px bg-gray-300"></div>
                        <p className="text-sm text-gray-500">Эсвэл</p>
                        <div className="w-full h-px bg-gray-300"></div>
                    </div>
                    <div className="px-8 mt-6">
                        <button className="w-full py-3 px-4 border border-gray-300 text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border-gray-400">Gmail-ээр нэвтрэх</button>
                    </div>
                    <div className="text-sm text-center mt-4">
                        <a href="#" className="font-medium text-gray-500 hover:text-gray-700">Нууц үг сэргээх</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;
