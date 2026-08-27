"use client";

import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
// import logo1 from "@/public/Csharp.png";
// import logo2 from "@/public/JS.png";
import heroImgPng from "@/public/heroSection-Photoroom.png";
import { HiOutlineCursorClick } from "react-icons/hi";
import { ScrollLink } from "@/components/ScrollLink";

const HeroSection = () => {
  return (
    <section className="relative bg-transparent text-white z-0">
      {/* Desktop layout - без змін */}
      <div className="hidden lg:block">
        <div className="absolute lg:top-19 lg:-right-14 2xl:top-19 2xl:right-38 w-132 h-auto drop-shadow-[0px_20px_75px_rgb(107,14,232,0.5)] z-20">
          <Image
            src={heroImgPng}
            alt="Hero Image"
            className="object-cover w-full h-auto z-0"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          {/* Нижній бордер */}
          <div className="absolute bottom-0 left-0 w-128 h-1 bg-gradient-to-r from-transparent via-[var(--main-two-color)] to-transparent"></div>
        </div>
      </div>

      {/* Mobile layout - hero image як background */}
      <div className="lg:hidden absolute -right-30 top-20 z-0 overflow-hidden">
        <Image
          src={heroImgPng}
          alt="Hero Image"
          className="object-cover w-200 h-auto opacity-80 drop-shadow-[0px_20px_75px_rgb(107,14,232,0.9)] max-w-[500px] max-h-[550px]"
          quality={85}
          width={400}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // fill
          // sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
        <div className="absolute bottom-0 left-0 w-128 h-1 bg-gradient-to-r from-transparent via-[var(--main-two-color)] to-transparent"></div>
        {/* Overlay для кращої читабельності тексту */}
        {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}
      </div>

      <div className="md:pt-42 md:pb-24 pb-16 bg-transparent text-white overflow-hidden z-30 relative">
        {/* Desktop content */}
        <div className="hidden md:block px-4 mr-72 relative z-30">
          <div className="max-w-4xl mx-auto text-start">
            <div className="flex flex-row items-start space-y-1 space-x-1 mb-2">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5  hover:scale-103 transition-transform duration-300">
                <Star className="w-4 h-4 text-[#8447e9] fill-current" />
                <span className="text-sm font-medium">
                  Перевірено 150+ студентами
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5  hover:scale-103 transition-transform duration-300">
                <Star className="w-4 h-4 text-[#8447e9] fill-current" />
                <span className="text-sm font-medium">
                  2 роки досвіду викладання
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5  hover:scale-103 transition-transform duration-300">
                <Star className="w-4 h-4 text-[#8447e9] fill-current" />
                <span className="text-sm font-medium">
                  5 особистих оферів на $5k+ з початку 2025 року
                </span>
              </div>
            </div>

            <h1
              className={`text-4xl md:text-7xl font-bold mb-16 uppercase custom-text`}
            >
              Хакни{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
                пошук роботи
              </span>
              <br />в IT за 14 днів
            </h1>
            <div className="text-lg md:text-xl mb-4 text-white">
              <p className="font-semibold">
                Практичний марафон із Senior‑розробником{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
                  Дмитром Пучковим
                </span>
              </p>
            </div>

            <div className="flex flex-col items-start justify-bottom">
              <p className="text-white mb-6">
                За 14 днів створи ефективні CV/LinkedIn та навчись впевнено
                проходити будь-які види співбесід, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
                  щоб отримати перший офер або мінімум <strong>+6000$</strong>{" "}
                  до річного доходу
                </span>
                .
              </p>

              <ScrollLink
                to="questions"
                className="bg-gradient-to-br cursor-pointer from-[var(--main-color)] to-[var(--main-two-color)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 hover:translate-x-2 custom-text"
              >
                <span>Доєднатись до 14-денного марафону</span>
                <HiOutlineCursorClick className="w-8 h-8" />
              </ScrollLink>
            </div>
          </div>
        </div>

        {/* Mobile content - розміщений поверх background image */}
        <div className="md:hidden px-4 relative z-40 pt-74 flex flex-col justify-end pb-12">
          <div className="max-w-sm mx-auto text-center">
            <div className="flex flex-col items-center space-y-1 mb-2">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5  hover:scale-103 transition-transform duration-300">
                <Star className="w-4 h-4 text-[#8447e9] fill-current" />
                <span className="text-[11px] font-medium">
                  Перевірено 150+ студентами
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5  hover:scale-103 transition-transform duration-300">
                <Star className="w-4 h-4 text-[#8447e9] fill-current" />
                <span className="text-[11px] font-medium">
                  2 роки досвіду викладання
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5  hover:scale-103 transition-transform duration-300">
                <Star className="w-4 h-4 text-[#8447e9] fill-current" />
                <span className="text-[11px] font-medium">
                  5 особистих оферів на $5k+ з початку 2025 року
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4 uppercase">
              Хакни{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
                пошук роботи
              </span>{" "}
              в IT за 14 днів
            </h1>

            <p className="font-semibold mb-2 custom-text">
              Практичний марафон із Senior‑розробником{" "}
              <span className="underline decoration-[var(--secondary-color)]">
                Дмитром Пучковим
              </span>
            </p>
            <p className="text-white mb-2 custom-text text-sm">
              За 14 днів створи ефективні CV/LinkedIn та навчись впевнено
              проходити будь-які види співбесід, щоб отримати{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
                перший офер
              </strong>{" "}
              або мінімум{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
                +6000$
              </strong>{" "}
              до річного доходу
            </p>

            <ScrollLink
              to="questions"
              className="bg-gradient-to-br cursor-pointer from-[var(--main-color)] to-[var(--main-two-color)] text-white px-4 py-2 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 hover:translate-x-2 custom-text"
            >
              <span>Доєднатись до 14-денного марафону</span>
              <HiOutlineCursorClick className="w-8 h-8" />
            </ScrollLink>
          </div>
        </div>

        {/* Background animated elements - тільки для desktop */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-orange-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
