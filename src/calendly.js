// src/pages/BookingPage.jsx
import { InlineWidget } from "react-calendly";

export default function Calendly  ()  {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6 rounded-4xl bg-gradient-to-r from-white to-[#febf11c0]">
      <h1 className="text-3xl text-center font-bold text-black mb-3">
      Let’s Unlock Growth Together
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
