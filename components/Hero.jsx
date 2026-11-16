import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#0a192f] text-white px-8 pt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="text-teal-400 text-lg mb-4">
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Shreya M J
          </h1>


          {/* Education & Contact */}
          <div className="mt-8 text-gray-300 space-y-3 text-lg">

            <p>
              🎓 <strong>Bachelor of Engineering</strong> in Information Science and Engineering
            </p>

            <p>
              🏫 Adichunchanagiri Institute of Technology
            </p>

            <p>
              📅 2022 – 2026
            </p>

            <p>
              📧 shreyamjshreya@gmail.com
            </p>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex gap-5">

            <a
               href="/Shreya_M J_Resume.pdf" download
               target="_blank"
               rel="noopener noreferrer"
               className="border border-teal-400 text-teal-400 px-6 py-3 rounded hover:bg-teal-400 hover:text-black transition"
              >
              Resume
            </a>

            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition duration-300"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <Image
            src="/images/profile.png"
            alt="Shreya M J"
            width={380}
            height={450}
            priority
            className="rounded-2xl border-4 border-teal-400 shadow-2xl hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
}