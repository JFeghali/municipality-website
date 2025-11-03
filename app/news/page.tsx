"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      date: "2024-01-15",
      title: "إطلاق مشروع البنية التحتية للمياه الجديد",
      description: "تعلن البلدية عن بدء مشروع شامل لتطوير البنية التحتية للمياه.",
      image: "/images/wadi1.png",
      link: "#",
    },
    {
      id: 2,
      date: "2024-01-10",
      title: "جدول اجتماعات المجلس البلدي",
      description: "ستعقد اجتماعات المجلس الشهرية كل أول ثلاثاء من كل شهر.",
      image: "/images/wadi2.png",
      link: "#",
    },
    {
      id: 3,
      date: "2024-01-08",
      title: "مناقصة عامة لصيانة الطرق",
      description: "تدعو البلدية المقاولين المؤهلين لتقديم عروضهم لصيانة الطرق.",
      image: "/images/wadi3.png",
      link: "#",
    },
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return { day, month, year };
  };

  return (
    <section className="bg-green-50 py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">
          آخر الأخبار و الأحداث
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => {
            const { day, month, year } = formatDate(item.date);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white border border-green-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {/* Date */}
                <div className="flex-none w-full bg-green-100 text-green-900 flex flex-col items-center justify-center p-4">
                  <span className="text-3xl font-light">{day}</span>
                  <span className="text-lg font-bold">{month}</span>
                  <span className="text-lg font-bold">{year}</span>
                </div>

                {/* Image */}
                <a href={item.link} className="hover:opacity-90 transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </a>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">{item.title}</h3>
                    <p className="text-green-700 mb-4">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <a
                      href={item.link}
                      className="text-green-800 font-bold hover:underline"
                    >
                      إقرأ المزيد →
                    </a>
                    <div className="flex gap-2 text-green-700">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-900"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href={`https://twitter.com/share?url=${item.link}&text=${item.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-900"
                      >
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
