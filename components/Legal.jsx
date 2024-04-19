import React from 'react';
import { ArrowSmRightIcon } from '@heroicons/react/outline';
import { VscLaw } from "react-icons/vsc";
import Image from 'next/image';
import bg from '../public/bg2.jpg';

const legalItems = [
  {
    title: 'НИЙГМИЙН ДААТГАЛЫН ЕРӨНХИЙ ХУУЛЬ',
    description: 'Монгол улсын хэмжээнд үйлчилж байгаа тэтгэвэр тогтоолгох тухай бүх хууль тогтоомжууд',
    link: '/niigmiin-daatgal'
  },
  {
    title: 'НИЙГМИЙН ДААТГАЛЫН САНГААС ОЛГОХ ТЭТГЭВРИЙН ТУХАЙ',
    description: 'Монгол улсын хэмжээнд үйлчилж байгаа тэтгэвэр тогтоолгох тухай бүх хууль тогтоомжууд',
    link: '/niigmiin-daatgal-san'
  },
  {
    title: 'ДУНДАЖ ЦАЛИН ХӨЛС ТОДОРХОЙЛОХ ЖУРАМ',
    description: 'Монгол улсын хэмжээнд үйлчилж байгаа тэтгэвэр тогтоолгох тухай бүх хууль тогтоомжууд',
    link: '/dundaj-tsalin'
  }
];

const Legal = () => {
  return (
    <div className="relative min-h-screen">
      <Image src={bg} alt="/" layout="fill" objectFit="cover" objectPosition="center" />
      <div className="absolute inset-0 bg-gray-900/90 flex justify-center items-center">
        <div className="max-w-4xl mx-auto text-black px-6 md:px-12 lg:px-0">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Мэдээ, мэдээлэл</h2>
          <div className="grid gr  id-cols-1 md:grid-cols-3 gap-8">
            {legalItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg">
                <div className="p-8">
                  <VscLaw className="w-12 h-12 bg-indigo-600 text-white rounded-full inline-block mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
                <div className="bg-slate-100 p-4 flex justify-end">
                  <a href={item.link} className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <span>Дэлгэрэнгүй</span>
                    <ArrowSmRightIcon className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
