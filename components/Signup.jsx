import React, { useState } from "react";

const Signup = () => {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!firstname || !lastname || !email || !phone || !password) {
            setError("All fields are necessary");
            return;
        }

        try {
            const res = await fetch('api/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email,
                    phone,
                    password
                })
            });
            // Handle response
            if (res.ok) {
                console.log("Signup successful");
            } else {
                throw new Error("Signup failed");
            }
        } catch (error) {
            setError("Signup failed. Please try again.");
            console.error("Signup failed:", error);
        }
        // Clear error if signup is successful
        setError("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
                <div className="py-8 px-6">
                    <h2 className="text-center text-3xl font-montserrat text-gray-900">Бүртгүүлэх</h2>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <div className="w-full px-2 py-3 flex justify-between items-center  border-b border-gray-400">
                                <label className="text-black"> Овог </label>
                                <input onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" autoComplete="none" className="w-1/2 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between" />
                            </div>
                            <div className="w-full px-2 py-3 flex justify-between items-center  border-b border-gray-400">
                                <label className="text-black"> Нэр </label>
                                <input onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" autoComplete="none" className="w-1/2 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between" />
                            </div>
                            <div className="w-full px-2 py-3 flex justify-between items-center  border-b border-gray-400">
                                <label className="text-black"> И-Мэйл хаяг </label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" autoComplete="none" className="w-1/2 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between " placeholder="E-mail" />
                            </div>
                            <div className="w-full px-2 py-3 flex justify-between items-center  border-b border-gray-400">
                                <label className="text-black"> Утас </label>
                                <input onChange={(e) => setPhone(e.target.value)} type="tel" id="phone" autoComplete="none" className="w-1/2 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between" placeholder="Утасны дугаар" />
                            </div>
                            <div className="w-full px-2 py-3 flex justify-between items-center  ">
                                <label className="text-black"> Нууц үг </label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" autoComplete="none" className="w-1/2 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between" placeholder="Нууц үг" />
                            </div>
                        </div>
                        <div className="px-8 mt-4">
                            <button className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-full text-black bg-white hover:bg-gray-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border-gray-400">Бүртгүүлэх</button>
                        </div>
                        <div className="px-8 mt-6 flex items-center justify-between">
                            <div className="w-full h-px bg-gray-300"></div>
                            <p className="text-sm text-gray-500">Эсвэл</p>
                            <div className="w-full h-px bg-gray-300"></div>
                        </div>
                        <div className="px-8 mt-4">
                            <button className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-full text-black bg-white hover:bg-gray-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border-gray-400">Gmail-ээр нэвтрэх</button>
                            {error && (
                                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2"> {error} </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
