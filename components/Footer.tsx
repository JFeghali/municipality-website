"use client";

import { Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10 mt-16" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 text-right">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">بلدية</h3>
            <p className="text-sm text-gray-100">
              نخدم مجتمعنا بالتفاني والشفافية من أجل مستقبل أفضل.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">معلومات الاتصال</h3>
            <p className="text-sm">وادي شحرور العليا</p>
            <p className="text-sm mb-3">جبل لبنان، لبنان</p>
            <div className="flex items-center gap-2 text-sm mb-2 justify-end">
              <Phone size={16} /> +961 X XXX XXX
            </div>
            <div className="flex items-center gap-2 text-sm justify-end">
              <Mail size={16} /> info@wceo.gov.lb
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">ساعات العمل</h3>
            <div className="flex items-start gap-2 text-sm justify-end">
              <Clock size={16} className="mt-1" />
              <div>
                <p>الاثنين - الجمعة: 8:00 ص - 4:00 م</p>
                <p>السبت: 8:00 ص - 12:00 م</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">روابط سريعة</h3>
            <ul className="space-y-1 text-sm">
              <li>المجلس البلدي</li>
              <li>المشاريع</li>
              <li>الوثائق العامة</li>
              <li>المعرض</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-green-500" />

        <div className="text-center text-sm text-gray-100">
          © 2024 بلدية وادي شحرور العليا. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
