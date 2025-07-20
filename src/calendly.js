// src/pages/BookingPage.jsx
import { InlineWidget } from "react-calendly";

export default function Calendly  ()  {
  return (
    <div className=" flex flex-col pt-20 items-center justify-center  p-6 rounded-4xl bg-[#fff5ec]">
      <h1 className="text-4xl md:text-5xl text-center font-bold text-black mb-3">
      Let’s <span className="text-[#ff8028]">Unlock Growth</span> Together
      </h1>

      <p className="p-1 pb-2.5 md:px-52  text-center ">Book your free 15–40 min discovery call to gain clarity and direction.Just real value and the next step toward your vision.</p>
      <InlineWidget
        url="https://calendly.com/nomanafzaltatla117/ask-me-anything" // Replace with your Calendly link
        styles={{
          height: '600px',
          width: '100%',
          maxWidth: '800px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      />
    </div>
  );
};
