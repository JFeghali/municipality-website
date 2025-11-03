"use client";

import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    mobile: "",
    country: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // ✅ Typed event parameter
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      mobile: "",
      country: "",
      email: "",
      message: "",
    });
    // You can connect an API endpoint here
  };

  return (
    <div className="body_ar" dir="rtl">
      {/* Hero Section / Banner */}
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/wadi1.png')" }}
      ></div>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-right">تواصل معنا</h2>
          <p className="text-right text-gray-600 mb-10">
            إذا كان لديك أي استفسار أو اقتراح، يرجى ملء النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن.
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded">
              تم إرسال رسالتك بنجاح!
            </div>
          )}

          <form className="space-y-4 bg-white p-8 rounded-xl shadow-md" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="الإسم الكامل:"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="الهاتف:"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="الجوّال:"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="البلد:"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني:"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              placeholder="الرسالة:"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-800 text-white py-3 font-bold rounded hover:bg-green-700 transition"
            >
              إرسال
            </button>
          </form>
        </div>
      </section>

      {/* Address & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 text-right">
            <h3 className="text-3xl font-bold text-green-800 mb-4">العنوان</h3>
            <p className="font-bold text-lg mb-2">بلدية وادي شحرور العليا</p>
            <p>
              +961 5 450 198/9<br />
              +961 5 452 050<br />
              +961 5 456 386
            </p>
          </div>
          <div className="flex-1">
           <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13253.327016466272!2d35.56316!3d33.81892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUwJzU5LjMiTiAzNcKwMzMnMzcuMyJF!5e0!3m2!1sen!2slb!4v0000000000000"
  width="100%"
  height="365"
  frameborder="0"
  style="border:0"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Wadi Chahrour El Olya Map">
</iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
