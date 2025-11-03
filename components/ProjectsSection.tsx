"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "تجديد الحديقة العامة",
      description:
        "تحديث معدات الملعب، وإضافة مسارات المشي، وتحسين ميزات الوصول لحديقتنا العامة.",
      raised: 87500,
      goal: 150000,
      donors: [
        { name: "ماريا رودريغيز", amount: 5000 },
        { name: "جون سميث", amount: 2500 },
        { name: "مجموعة الأعمال المحلية", amount: 10000 },
      ],
    },
    {
      id: 2,
      title: "تحسين إنارة الشوارع",
      description:
        "تركيب مصابيح شوارع LED الموفرة للطاقة في منطقة وسط المدينة لتحسين السلامة وتقليل تكاليف الطاقة.",
      raised: 32000,
      goal: 75000,
      donors: [
        { name: "تجار وسط المدينة", amount: 15000 },
        { name: "سارة جونسون", amount: 3000 },
        { name: "مجموعة السلامة المجتمعية", amount: 8000 },
      ],
    },
    {
      id: 3,
      title: "توسيع مركز الشباب",
      description:
        "توسيع مركز الشباب ليشمل مختبر كمبيوتر وغرف دراسة ومرافق ترفيهية للمراهقين المحليين.",
      raised: 45000,
      goal: 200000,
      donors: [
        { name: "مؤسسة التعليم", amount: 25000 },
        { name: "جمعية أولياء الأمور والمعلمين", amount: 8000 },
        { name: "شبكة الخريجين المحليين", amount: 12000 },
      ],
    },
  ];

  return (
    <section className="bg-green-800 py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          المشاريع المجتمعية
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const progress = Math.round((project.raised / project.goal) * 100);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row bg-white border border-green-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {/* Progress Sidebar */}
                <div className="flex-none w-20 md:w-24 bg-green-100 text-green-900 flex flex-col items-center justify-center p-4">
                  <span className="text-3xl font-light">{progress}%</span>
                  <span className="text-lg font-bold">اكتمل</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-green-700 mb-4">{project.description}</p>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <p className="text-green-800 font-semibold text-sm mb-4">
                      ${project.raised.toLocaleString()} من أصل $
                      {project.goal.toLocaleString()} ({progress}%)
                    </p>
                  </div>

                  <div>
                    <button className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 transition mb-4">
                      تبرع في مكتب البلدية
                    </button>

                    <div className="bg-green-50 rounded-md p-3 mb-4 text-right">
                      <h4 className="text-sm font-semibold text-green-900 mb-1">
                        آخر المتبرعين:
                      </h4>
                      <ul className="text-sm text-green-800">
                        {project.donors.map((d, i) => (
                          <li key={i} className="flex justify-between">
                            <span>{d.name}</span>
                            <span className="font-medium">
                              ${d.amount.toLocaleString()}
                            </span>
                          </li>
                        ))}
                      </ul>
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
