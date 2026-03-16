"use client";
import Link from "next/link";
import { HiOutlineCursorClick } from "react-icons/hi";


export default function LessonPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-7xl font-bold mb-16 uppercase custom-text text-white text-center">
        Як хакнути <span className=" text-[#8447e9]">пошук роботи</span> в ІТ
      </h1>
      <div>
        <iframe
          width="1020"
          height="630"
          src="https://www.youtube.com/embed/zckwTQkJ9lU?si=jUi2OCQp7QhBz-1p"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-[630px] rounded-xl shadow-lg"
        ></iframe>
      </div>
      <div className="w-full flex items-center justify-center mt-8">
        <Link
          href="/"
          className="bg-gradient-to-br cursor-pointer from-[var(--main-color)] to-[var(--main-two-color)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 hover:translate-x-2 custom-text"
        >
          <span>Доєднатись до 14-денного марафону</span>
          <HiOutlineCursorClick className="w-8 h-8" />
        </Link>
      </div>
    </section>
  );
}
