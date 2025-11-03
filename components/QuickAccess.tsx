"use client";

export default function QuickAccess() {
  const items = [
    { title: "المجلس البلدي", link: "#council" },
    { title: "اللجان", link: "#committees" },
    { title: "المشاريع", link: "#projects" },
    { title: "الوثائق", link: "#documents" },
    { title: "المعرض", link: "#gallery" },
  ];

  return (
    <section className="py-16 bg-white text-center" dir="rtl">
      <h2 className="text-3xl font-bold text-green-800 mb-4">
        الوصول السريع
      </h2>
      <p className="text-gray-600 mb-10">
        يمكنك الوصول إلى خدماتنا ومعلوماتنا الرئيسية بنقرة واحدة فقط
      </p>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="w-40 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition text-center"
          >
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
