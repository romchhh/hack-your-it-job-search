"use client";

import React from "react";
import {
  User,
  Briefcase,
  Crown,
  Clock,
  Users,
  CheckCircle,
  ArrowDown,
} from "lucide-react";
import { ScrollLink } from "@/components/ScrollLink";
import { HiOutlineCursorClick } from "react-icons/hi";

const TargetAudienceSection = () => {
  const targetCategories = [
    {
      icon: User,
      title: "Маєш проблеми з пошуком першої роботи",
      problems: [
        "Твоє CV ніхто не розглядає, отримуєш лише автоматичні відмови",
        "Боїшся технічних співбесід: навіть знаючи відповідь, стресуєш або провалюєш їх",
        "Немає друзів, які можуть допомогти з працевлаштуванням, і ти думаєш, що роботу «роздають по блату»",
      ],
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      icon: Briefcase,
      title: (
        <>
          Уже Middle, але застряг на{" "}
          <strong className="font-extrabold">$800</strong> -{" "}
          <strong className="font-extrabold">$1500</strong> і хочеш стрибок
          ×2-×3
        </>
      ),
      problems: [
        "3+ роки програмуєш, а заробляєш, як Junior",
        "Хочеш працювати на крутих проектах, але не розумієш які скіли потрібно для цього мати",
        "Важко зрозуміти, на яку зарплатню ти можеш претендувати",
      ],
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      icon: Crown,
      title: "Хочеш залетіти на Senior і заробляти в 3-му квартилі",
      problems: [
        "Класно знаєш технічну базу, але не маєш класних оферів",
        <>Не розумієш як саме тобі отримувати зарплату у 3-му квартилі</>,
        "Потрібен план «20% теорії → 80% результату», а не 50-годинна енциклопедія",
      ],
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      icon: Clock,
      title: "Бракує часу та дисципліни",
      problems: [
        "Довгі курси не заходять – потрібен короткий спринт із дедлайном",
        "Кар'єрні консультації не допомагають, а чекати «поки знайдеш роботу» не варіант",
        "Шукаєш чіткий план перевірений досвідом і часом, щоб закривати конкретні цілі щодня",
      ],
      bgColor: "bg-[var(--secondary-color)]",
    },
    {
      icon: Users,
      title: "Цінуєш live-фідбек і спільноту однодумців",
      problems: [
        "Потрібно швидко ставити питання й одержувати відповідь, а не чекати тижнями",
        "Потрібен «сейф»-чат, де можна кинути чернетку CV без хейту",
        "Розумієш, що нетворк == майбутні офери",
      ],
      bgColor:
        "bg-gradient-to-br from-[var(--secondary-color)] via-[var(--secondary-color)] to-[var(--main-two-color)]",
    },
  ];

  return (
    <section
      className="relative pt-8 sm:pt-12 md:pt-16 bg-transparent text-white"
      id="who"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 uppercase px-2">
              Цей марафон для тебе, якщо:
            </h2>
            {/* <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto px-2">
              Перевір себе за цими 5 категоріями.{" "}
              <span className="text-[#8447e9]">
                Якщо хоч 2 пункти про тебе – зустрінемось на марафоні
              </span>
            </p> */}
          </div>

          {/* Target Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`${
                    category.bgColor
                  } rounded-2xl p-4 hover:shadow-lg transition-all duration-300 
                   md:hover:translate-x-2 
                  border-2 border-gray-200 ${
                    targetCategories.indexOf(category) ===
                    targetCategories.length - 1
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex flex-col items-start space-x-4 md:space-x-6">
                    <div className="flex items-center justify-start w-full gap-4">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--main-two-color)]" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-0">
                        {index + 1}.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
                          {category.title}
                        </span>
                      </h3>
                    </div>
                    <ul className="flex flex-col">
                      {category.problems.map((problem, problemIndex) => (
                        <li
                          key={problemIndex}
                          className="flex items-start space-x-1 md:space-x-2"
                        >
                          <div className="w-2 h-2 bg-[var(--main-two-color)] rounded-full mt-2 flex-shrink-0 self-center"></div>
                          <p className="text-sm sm:text-base text-gray-300 pt-1 md:pt-2">
                            {problem}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="bg-[var(--secondary-color)] border-2 border-gray-200 rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center transition-all duration-300 hover:scale-101 mt-6">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                Якщо хоча б{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
                  2 пункти
                </span>{" "}
                про тебе – зустрінемось на марафоні й закриємо твої потреби за{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
                  14 днів
                </span>
                .
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <ScrollLink
                  to="questions"
                  className="bg-gradient-to-br cursor-pointer from-[var(--main-color)] to-[var(--main-two-color)] text-white px-6 py-3 rounded-lg font-bold  transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 hover:translate-x-2 mx-auto"
                >
                  <span>Забронювати місце</span>
                  <HiOutlineCursorClick className="w-8 h-8" />
                </ScrollLink>
                {/* <div className="flex items-center space-x-2 text-white text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5" />
                  <span>Гарантія результату</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
