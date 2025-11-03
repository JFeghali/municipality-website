"use client";

export default function CouncilPage() {
  const councilMembers = [
    {
      id: 1,
      name: "أحمد حسن",
      title: "رئيس البلدية",
      description:
        "يعمل أحمد حسن كرئيس للبلدية منذ عام 2020، ويركز على تحسين البنية التحتية، وتعزيز المشاركة المجتمعية، وتحقيق التنمية المستدامة في جميع أنحاء المدينة.",
    },
    {
      id: 2,
      name: "ليلى خوري",
      title: "نائب رئيس البلدية",
      description:
        "تشرف ليلى على البرامج الثقافية والخدمات الاجتماعية والمبادرات التعليمية التي تهدف إلى تمكين الشباب ودعم الأسر.",
    },
    {
      id: 3,
      name: "عمر حداد",
      title: "مدير التخطيط العمراني",
      description:
        "يقود عمر قسم التخطيط العمراني، ويضمن النمو الحضري الذكي، ومشاريع الإسكان المستدامة، والحفاظ على البيئة.",
    },
    {
      id: 4,
      name: "ناديا منصور",
      title: "رئيسة لجنة المالية والميزانية",
      description:
        "تتحمل ناديا مسؤولية الشفافية المالية وتشرف على تخصيص الأموال للخدمات العامة ومشاريع التنمية.",
    },
    {
      id: 4,
      name: "ناديا منصور",
      title: "رئيسة لجنة المالية والميزانية",
      description:
        "تتحمل ناديا مسؤولية الشفافية المالية وتشرف على تخصيص الأموال للخدمات العامة ومشاريع التنمية.",
    },
    {
      id: 4,
      name: "ناديا منصور",
      title: "رئيسة لجنة المالية والميزانية",
      description:
        "تتحمل ناديا مسؤولية الشفافية المالية وتشرف على تخصيص الأموال للخدمات العامة ومشاريع التنمية.",
    },
    {
      id: 4,
      name: "ناديا منصور",
      title: "رئيسة لجنة المالية والميزانية",
      description:
        "تتحمل ناديا مسؤولية الشفافية المالية وتشرف على تخصيص الأموال للخدمات العامة ومشاريع التنمية.",
    },
    {
      id: 4,
      name: "ناديا منصور",
      title: "رئيسة لجنة المالية والميزانية",
      description:
        "تتحمل ناديا مسؤولية الشفافية المالية وتشرف على تخصيص الأموال للخدمات العامة ومشاريع التنمية.",
    },
    {
      id: 4,
      name: "ناديا منصور",
      title: "رئيسة لجنة المالية والميزانية",
      description:
        "تتحمل ناديا مسؤولية الشفافية المالية وتشرف على تخصيص الأموال للخدمات العامة ومشاريع التنمية.",
    },
    {
      id: 4,
      name: "ناديا منصور",
      title: "رئيسة لجنة المالية والميزانية",
      description:
        "تتحمل ناديا مسؤولية الشفافية المالية وتشرف على تخصيص الأموال للخدمات العامة ومشاريع التنمية.",
    },
    {
      id: 4,
      name: "ناديا منصور",
      title: "رئيسة لجنة المالية والميزانية",
      description:
        "تتحمل ناديا مسؤولية الشفافية المالية وتشرف على تخصيص الأموال للخدمات العامة ومشاريع التنمية.",
    },
    {
      id: 4,
      name: "ناديا منصور",
      title: "رئيسة لجنة المالية والميزانية",
      description:
        "تتحمل ناديا مسؤولية الشفافية المالية وتشرف على تخصيص الأموال للخدمات العامة ومشاريع التنمية.",
    },
    {
      id: 4,
      name: "ناديا منصور",
      title: "رئيسة لجنة المالية والميزانية",
      description:
        "تتحمل ناديا مسؤولية الشفافية المالية وتشرف على تخصيص الأموال للخدمات العامة ومشاريع التنمية.",
    },
    {
      id: 4,
      name: "ناديا منصور",
      title: "رئيسة لجنة المالية والميزانية",
      description:
        "تتحمل ناديا مسؤولية الشفافية المالية وتشرف على تخصيص الأموال للخدمات العامة ومشاريع التنمية.",
    },
    {
      id: 4,
      name: "ناديا منصور",
      title: "رئيسة لجنة المالية والميزانية",
      description:
        "تتحمل ناديا مسؤولية الشفافية المالية وتشرف على تخصيص الأموال للخدمات العامة ومشاريع التنمية.",
    }
  ];

  return (
    <section id="council" className="py-16 bg-gray-50 min-h-screen" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">
            أعضاء المجلس البلدي
          </h2>
        </div>
        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {councilMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition p-6 text-center"
            >
              {/* Anonymous Person Icon */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 21a8.25 8.25 0 0115 0"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-green-800 font-medium mb-3">{member.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed text-right">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
