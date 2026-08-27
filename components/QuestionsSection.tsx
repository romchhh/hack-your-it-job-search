"use client";

import React, { useState } from "react";
import { Send, ArrowRight } from "lucide-react";
import { HiOutlineCursorClick } from "react-icons/hi";
import { CornerRightDown } from "lucide-react";

const QuestionsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    telegram: "",
    interest: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "telegram") {
      if (!value.startsWith("@") || value === "") {
        newValue = "@" + value.replace(/^@+/, "");
      }
    }

    if (name === "phone") {
      if (!value.startsWith("+") || value === "") {
        newValue = "+" + value.replace(/^\++/, "");
      }
    }

    setFormData({ ...formData, [name]: newValue });

    if (name === "phone") {
      const phoneRegex = /^\+380\d{9}$/;
      if (!phoneRegex.test(newValue) && newValue !== "+") {
        setPhoneError("Введіть номер у форматі +380123456789");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleTelegramFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!formData.telegram.startsWith("@")) {
      setFormData({ ...formData, telegram: "@" + formData.telegram });
    }
  };

  const handlePhoneFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!formData.phone.startsWith("+")) {
      setFormData({ ...formData, phone: "+" + formData.phone });
    }
  };

  const sendToGoogleSheets = async (data: {
    name: string;
    phone: string;
    telegram: string;
    interest: string;
  }) => {
    try {
      const response = await fetch("/api/google-sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          telegram: data.telegram,
          interest: data.interest,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error: ${response.status}`);
      }

      return { success: true };
    } catch (error) {
      console.error("Error sending to Google Sheets:", error);
      return {
        success: false,
        error: "Помилка при збереженні в Google Sheets",
      };
    }
  };

  const sendToTelegram = async (data: {
    name: string;
    phone: string;
    telegram: string;
    interest: string;
  }) => {
    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          telegram: data.telegram,
          interest: data.interest,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error: ${response.status}`);
      }

      return { success: true };
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      return { success: false, error: "Не вдалося відправити повідомлення" };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setPhoneError("Введіть коректний номер у форматі +380123456789");
      return;
    }

    setSubmitStatus("Відправка...");

    try {
      const [telegramResult, sheetsResult] = await Promise.allSettled([
        sendToTelegram(formData),
        sendToGoogleSheets(formData),
      ]);

      const telegramSuccess =
        telegramResult.status === "fulfilled" && telegramResult.value.success;
      const sheetsSuccess =
        sheetsResult.status === "fulfilled" && sheetsResult.value.success;

      if (telegramSuccess && sheetsSuccess) {
        setSubmitStatus("Дані успішно відправлено в Telegram та збережено!");
        setFormData({ name: "", phone: "", telegram: "", interest: "" });
        setPhoneError("");
        setTimeout(() => setSubmitStatus(""), 3000);
      } else if (telegramSuccess || sheetsSuccess) {
        setSubmitStatus("Частково успішно: дані збережено, але є помилки");
        console.error("Telegram result:", telegramResult);
        console.error("Sheets result:", sheetsResult);
      } else {
        setSubmitStatus("Помилка при відправці та збереженні даних");
        console.error("Both operations failed:", {
          telegramResult,
          sheetsResult,
        });
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setSubmitStatus("Неочікувана помилка при обробці запиту");
    }
  };

  return (
    <section
      id="questions"
      className="pt-8 bg-transparent text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-2 uppercase text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
            Залишилися запитання?
          </h2>
          <p className="text-lg md:text-xl text-white mb-4">
            Залиш свої контакти і наша команда зв`яжеться з тобою
          </p>
          <a
            href="https://t.me/dpuchkov_support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-transparent bg-clip-text bg-gradient-to-l from-[var(--main-color)] to-[var(--main-two-color)] hover:text-[var(--main-two-color)]/70 font-semibold flex flex-col md:flex-row items-center justify-center space-y-1 space-x-2"
          >
            <Send className="w-5 h-5 text-[var(--main-two-color)]" />
            <span>Або одразу пиши в підтримку Telegram</span>
          </a>
        </div>
        <div className="max-w-4xl mx-auto bg-[var(--secondary-color)] rounded-2xl p-6 border-2 border-gray-200 relative z-10">
          <h1 className="uppercase text-2xl md:text-3xl font-semibold mb-4">
            Залишіть заявку
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Твоє ім`я
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 rounded-lg bg-[var(--secondary-color)] text-white placeholder-gray-600 border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--main-two-color)]"
                  placeholder="Введіть ваше ім'я"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Твій номер телефону
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={handlePhoneFocus}
                  className={`mt-1 w-full p-3 rounded-lg bg-[var(--secondary-color)] text-white placeholder-gray-600 border-2 ${
                    phoneError ? "border-red-500" : "border-white/30"
                  } focus:outline-none focus:ring-2 focus:ring-[var(--main-two-color)]`}
                  placeholder="+380123456789"
                />
                {phoneError && (
                  <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="telegram"
                  className="block text-sm font-medium text-white"
                >
                  Твій нікнейм в Telegram
                </label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  onFocus={handleTelegramFocus}
                  className="mt-1 w-full p-3 rounded-lg bg-[var(--secondary-color)] text-white placeholder-gray-600 border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--main-two-color)]"
                  placeholder="@nickname"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-md font-medium text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
                Наскільки тобі цікавий марафон по пошуку роботи?
              </label>
              <div className="mt-2 pl-2 flex flex-col gap-2">
                <label className="flex items-center text-white text-sm">
                  <input
                    type="radio"
                    name="interest"
                    value="Вже обрав тариф, та готовий оплатити"
                    checked={
                      formData.interest ===
                      "Вже обрав тариф, та готовий оплатити"
                    }
                    onChange={handleChange}
                    className="mr-2 bg-[var(--main-two-color)] text-sm"
                  />
                  Вже обрав тариф, та готовий оплатити
                </label>
                <label className="flex items-center text-white text-sm">
                  <input
                    type="radio"
                    name="interest"
                    value="Цікаво поспілкуватись та отримати відповіді на додаткові запитання"
                    checked={
                      formData.interest ===
                      "Цікаво поспілкуватись та отримати відповіді на додаткові запитання"
                    }
                    onChange={handleChange}
                    className="mr-2 focus:ring-[var(--main-two-color)] text-sm"
                  />
                  Цікаво поспілкуватись та отримати відповіді на додаткові
                  запитання
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mx-auto bg-gradient-to-br from-[var(--main-color)] to-[var(--main-two-color)] text-white px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 hover:-translate-y-0.5"
            >
              <span>Залишити заявку</span>
              <HiOutlineCursorClick className="w-8 h-8" />
            </button>
            {submitStatus && (
              <p
                className={`text-sm mt-2 text-center ${
                  submitStatus.includes("успішно")
                    ? "text-green-400"
                    : "text-red-500"
                }`}
              >
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
