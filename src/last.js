import Link from 'next/link';

export default function DiscoveryCallSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#fff8f1]">
      <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 border-4 border-[#ec7424] border-t-black border-b-black bg-[#fff0e5] shadow-xl text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[45px] font-extrabold text-[#ec7424] mb-4 leading-tight">
           Have a project in mind? <span className='text-black'>Lets talk.</span> 
        </h2>

        {/* Subheading */}
        <p className="text-black text-sm sm:text-lg md:text-xl mt-2 sm:mt-4 max-w-2xl mx-auto">
         Ready to take your brand to the next level? Lets build something powerful together.
        </p>

        {/* CTA Button */}
        <Link
          href="/bookcall"
          className="inline-block mt-8 border-2 border-[#ec7424]  bg-[#ec7424] hover:bg-black hover:text-[#fff8f1] text-white font-semibold text-lg py-3 px-8 rounded-full transition duration-300"
        >
          Book Your Free Discovery Call
        </Link>

      </div>
    </section>
  );
}
