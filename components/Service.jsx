import React from "react";
import Link from "next/link";

const ServicesPage = () => {
  // Define service data
  const services = [
    { name: "Тэтгэвэрт гарах нас тогтоолгох", type: "Service2" },
    { name: "Тэтгэвэр төлөвлөх", type: "Service1" }
  ];

  // Function to handle selecting a service
  const handleSelectService = (serviceName) => {
    console.log(`Selected service: ${serviceName}`);
    // You can add your logic for selecting a service here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 ">
      <h1 className="text-6xl font-bold mb-8">Үйлчилгээ</h1>
      <div className="flex justify-between w-3/4">
        {/* Map through services and render buttons */}
        {services.map((service, index) => (
          <div key={index} className="w-1/2 p-6 border rounded-lg shadow-md bg-white">
            <h2 className="text-center text-xl font-semibold mb-2">{service.name}</h2>
            <Link href={`/service/${service.type}/page`}>
              <button
                className="w-full py-3 px-4 border-2 text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border-red-300"
                onClick={() => handleSelectService(service.name)}
              >
                Сонгох
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
