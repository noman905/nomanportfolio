import Link from 'next/link';

export default function DiscoveryCallSection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto border-4 border-[#febf11e7] border-r-black border-l-black bg-gradient-to-r from-white to-[#febf11e7] shadow-white shadow-lg rounded-3xl p-6 sm:p-10 text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Have a project in mind? Lets talk.
        </h2>

        <p className="text-black text-sm sm:text-base md:text-lg mt-2 sm:mt-4">
          Ready to take your brand to the next level? Lets build something powerful together.
        </p>

        <Link
          href="/bookcall"
          className="inline-block mt-6 border-2 border-[#febf11c0] border-t-black border-b-black bg-[#febf11c0] hover:bg-[#febf11ef] text-black font-semibold text-base sm:text-lg py-3 px-6 sm:px-8 rounded-full transition duration-300"
        >
          Book a Discovery Call
        </Link>

      </div>
    </section>
  );
}
