export default function Certificates() {
  const certificates = [
    {
      title: "NPTEL Cloud Computing",
      issuer: "IIT Kharagpur",
      year: "2025",
      link: "/images/certificates/NPTEL.jpeg",
    },
    {
      title: "Power BI Workshop",
      issuer: "Jobaaj Learnings",
      year: "2025",
      link: "/images/certificates/PowerBI.jpeg",
    },
    {
      title: "Java Programming Internship",
      issuer: "CodeAlpha",
      year: "2025",
      link: "/images/certificates/Java Programming Internship.pdf",
    },
    {
      title: "Data Analyst Internship",
      issuer: "Inventeron Technologies",
      year: "2026",
     link: "/images/certificates/Data Analyst Internship.pdf",
    },
  ];

  return (
    <section
      id="certificates"
      className="max-w-6xl mx-auto px-8 py-24 text-white"
    >
      <h2 className="text-4xl font-bold mb-12">
        <span className="text-teal-400">04.</span> Certificates
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-[#112240] border border-gray-700 rounded-xl p-6 hover:border-teal-400 hover:-translate-y-2 transition duration-300 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-teal-400">
              {certificate.title}
            </h3>

            <p className="text-gray-300 mt-3">
              {certificate.issuer}
            </p>

            <p className="text-gray-500 mt-2 mb-5">
              {certificate.year}
            </p>

            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-teal-400 text-teal-400 px-5 py-2 rounded hover:bg-teal-400 hover:text-black transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}