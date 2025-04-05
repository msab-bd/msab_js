"use client";

export default function ContactPage() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg max-w-5xl w-full flex flex-col md:flex-row gap-8">
        {/* বাম পাশ */}
        <div className="md:w-1/2 text-black bg-white p-6 sm:p-8 rounded-lg flex flex-col justify-center">
          <h2 className="text-sm sm:text-lg mb-2 uppercase">সিল্ক রোড ব্যবহার করুন</h2>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">

            <img src={"/asset/msab_logo_b.png"} alt="MSAB logo" className="h-12  bg-whitew-auto sm:h-16 mb-4" />
            সেবার সাথে সম্পর্ক

          </h1>
          <p className="text-black-200 text-sm sm:text-base">
            দক্ষ টিম সদস্যরা | ফলাফল ভিত্তিক পদ্ধতি | সহজ কার্যপ্রবাহ
          </p>
        </div>

        {/* ডান পাশের ফর্ম */}
        <div className="md:w-1/2">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-green-900">
            আমাদের সাথে কথা বলুন
          </h2>
          <form className="space-y-4">
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-900"
              type="text"
              placeholder="নাম*"
              required
            />
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-900"
              type="text"
              placeholder="প্রতিষ্ঠানের নাম*"
              required
            />
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-900"
              type="email"
              placeholder="ইমেইল*"
              required
            />
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-900"
              type="tel"
              placeholder="ফোন নম্বর*"
              required
            />
            <textarea
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-900"
              placeholder="আপনার বার্তা লিখুন*"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-900 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300 w-full"
            >
              সাবমিট করুন
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

  