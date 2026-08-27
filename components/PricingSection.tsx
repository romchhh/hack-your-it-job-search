"use client";

import React from "react";
import { ScrollLink } from "@/components/ScrollLink";
import { ArrowRight, Check } from "lucide-react";
import { HiOutlineCursorClick } from "react-icons/hi";
import Image from "next/image";
import binanceImg from "@/public/payment/binance.png";
import monoBankImg from "@/public/payment/monobank-logo.png";
import payPalImg from "@/public/payment/paypal.webp";
import privatBankImg from "@/public/payment/PrivatBank-corporate-logo-latina.png";

const PricingSection = () => {
  const tariffs = [
    {
      name: "Basic",
      price: "€119",
      discountPrice: "€99",
      btn: "ОБРАТИ BASIC",
      features: [
        {
          text: (
            <>
              <strong>1 модуль:</strong> Твоє позиціювання та упаковка
            </>
          ),
          included: true,
        },
        {
          text: (
            <>
              <strong>2 модуль:</strong> Пошук роботи
            </>
          ),
          included: true,
        },
        {
          text: (
            <>
              <strong>3 модуль:</strong> Співбесіди
            </>
          ),
          included: true,
        },
        {
          text: "1 Q&A сесія",
          included: true,
          label: "Загальна для Basic, Pro та Vip",
        },
        { text: "Підтримка куратора в чаті", included: true },
        { text: "Спільний чат з учасниками тарифу", included: true },
        {
          text: "Конспекти матеріалів у Notion",
          included: true,
          label: "Бонус",
        },
      ],
    },
    {
      name: "Pro",
      price: "€179",
      discountPrice: "€154",
      btn: "ОБРАТИ PRO",
      features: [
        {
          text: (
            <>
              <strong>1 модуль:</strong> Твоє позиціювання та упаковка
            </>
          ),
          included: true,
        },
        {
          text: (
            <>
              <strong>2 модуль:</strong> Пошук роботи
            </>
          ),
          included: true,
        },
        {
          text: (
            <>
              <strong>3 модуль:</strong> Співбесіди
            </>
          ),
          included: true,
        },
        {
          text: (
            <>
              <strong>4 модуль:</strong> Гроші - Як вибивати кращі офери
            </>
          ),
          included: true,
        },
        {
          text: (
            <>
              <strong>5 модуль:</strong> Прокачка себе як спеціаліста
            </>
          ),
          included: true,
        },
        {
          text: "1 Q&A сесія",
          included: true,
          label: "Загальна для Basic, Pro та Vip",
        },
        {
          text: "1 live практикум – Soft skills + HR інтерв’ю. Формат інтерактив: розбираємо типові Soft-skills та HR-запитання, відпрацьовуємо відповіді й тренуємося перед співбесідою.",
          included: true,
          label: "Загальний для Pro та Vip",
        },
        { text: "Підтримка куратора 1 на 1", included: true },
        {
          text: "Спільний чат з учасниками тарифу та зі мною",
          included: true,
        },
        {
          text: "Конспекти матеріалів у Notion",
          included: true,
          label: "Бонус",
        },
      ],
    },
    {
      name: "VIP",
      price: "€299",
      discountPrice: "€269",
      btn: "ОБРАТИ VIP",
      features: [
        {
          text: (
            <>
              <strong>1 модуль:</strong> Твоє позиціювання та упаковка
            </>
          ),
          included: true,
        },
        {
          text: (
            <>
              <strong>2 модуль:</strong> Пошук роботи
            </>
          ),
          included: true,
        },
        {
          text: (
            <>
              <strong>3 модуль:</strong> Співбесіди
            </>
          ),
          included: true,
        },
        {
          text: (
            <>
              <strong>4 модуль:</strong> Гроші - Як вибивати кращі офери
            </>
          ),
          included: true,
        },
        {
          text: (
            <>
              <strong>5 модуль:</strong> Прокачка себе як спеціаліста
            </>
          ),
          included: true,
        },
        {
          text: (
            <>
              <strong>6 модуль:</strong> Робота
            </>
          ),
          included: true,
        },
        {
          text: "1 Q&A сесія",
          included: true,
          label: "Загальна для Basic, Pro та Vip",
        },
        {
          text: "1 live практикум – Soft skills + HR інтерв’ю. Формат інтерактив: розбираємо типові Soft-skills та HR-запитання, відпрацьовуємо відповіді й тренуємося перед співбесідою.",
          included: true,
          label: "Загальний для Pro та Vip",
        },
        {
          text: "1 Q&A сесія",
          included: true,
          label: "Тільки для Vip",
        },
        {
          text: "1 live практикум – прямі контракти",
          included: true,
          label: "Тільки для Vip",
        },
        {
          text: "Підтримка та чат зі мною 1 на 1",
          included: true,
        },
        { text: "Спільний чат з учасниками тарифу та зі мною", included: true },
        {
          text: "Конспекти матеріалів у Notion",
          included: true,
          label: "Бонус",
        },
      ],
    },
  ];

  const radialYPositions = [
    "bg-radial-[at_200%_80%]",
    "bg-radial-[at_50%_50%]",
    "bg-radial-[at_-200%_40%]",
  ];

  return (
    <section
      id="pricing"
      className="py-8 md:py-12 bg-transparent text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-12 text-white tracking-wide">
          ОБЕРИ СВІЙ ТАРИФ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {tariffs.map((tariff, index) => (
            <div
              key={tariff.name}
              className={`${radialYPositions[index]} to-[var(--secondary-color)] from-[#290853] border-2 border-gray-200 text-white rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-101`}
            >
              <h3 className="text-2xl font-bold text-center mb-4 uppercase">
                {tariff.name}
              </h3>
              <div className="font-semibold text-center mb-4 mr-1 flex items-end justify-center space-x-1">
                <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-l from-[var(--main-color)] to-[var(--main-two-color)] drop-shadow-sm">
                  {/* {tariff.discountPrice} */}
                  {tariff.price}
                </span>
                {/* <span className="line-through text-gray-400">
                  {tariff.price}
                </span> */}
              </div>
              <ul className="space-y-2 md:space-y-4 mb-6">
                {tariff.features.map((feature, idx) => (
                  <li key={idx} className="flex flex-col space-y-1">
                    <div className={`${feature.label && ""}`}>
                      {feature.label && (
                        <span className="text-[#9b7ad2] block mb-1 uppercase ml-1">
                          {feature.label}
                        </span>
                      )}
                      <div className="flex items-center space-x-4 p-1 rounded-xl">
                        <span className="bg-[var(--main-two-color)] p-1 rounded-full">
                          <Check className="w-4 h-4 text-white" />
                        </span>
                        <span>{feature.text}</span>
                      </div>
                    </div>
                    {idx < tariff.features.length - 1 && (
                      <div className="border-t border-gray-200/30 my-1 mx-2 rounded-full"></div>
                    )}
                  </li>
                ))}
              </ul>
              <ScrollLink
                to="questions"
                className="w-full bg-gradient-to-br from-[var(--main-color)] to-[var(--main-two-color)] text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{tariff.btn}</span>
                <HiOutlineCursorClick className="w-6 h-6" />
                {/* <ArrowRight className="w-5 h-5" /> */}
              </ScrollLink>
            </div>
          ))}
        </div>
        {/* <p className="text-center mt-8 custom-text uppercase">
          До кінця знижки залишилося{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
            48 год
          </span>
        </p> */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <h1 className="text-transparent font-extrabold uppercase text-4xl bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
            Варіанти оплати
          </h1>
          <div className="bg-[var(--secondary-color)] border-2 border-gray-200 rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center transition-all duration-300 hover:scale-101 mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-white text-center md:text-start font-bold">
                Повна оплата
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="p-2 bg-[var(--main-two-color)] rounded-xl flex flex-col font-bold">
                  на ФОП
                </div>
                <Image src={payPalImg} alt="PayPal" className="h-8 w-auto" />
                <div className="flex items-center space-x-2">
                  <Image
                    src={binanceImg}
                    alt="Binance"
                    className="h-8 w-auto"
                  />
                  <span className="text-white font-bold">Криптовалюта</span>
                </div>
              </div>
            </div>
            <div className="block h-[2px] w-full md:h-12 md:w-[1px] rounded-full bg-gray-200/30"></div>
            <div className="flex flex-col gap-6">
              <h2 className="text-white text-center md:text-start font-bold ">
                Оплата частинами від 2 до 4 місяців
              </h2>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={monoBankImg}
                  alt="Monobank"
                  className="h-10 w-auto"
                />
                <Image
                  src={privatBankImg}
                  alt="PrivatBank"
                  className="h-6 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
