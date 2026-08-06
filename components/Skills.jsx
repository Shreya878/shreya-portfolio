export default function Skills() {

  const skills = [
    "Java",
    "HTML|CSS|JavaScript",
    "Python",
    "Power BI",
    "GitHub",
    "SQL"
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-8 py-24 text-white"
    >
      <h2 className="text-4xl font-bold mb-12">
        <span className="text-teal-400">02.</span> Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-[#112240] border border-teal-500 rounded-xl p-6 text-center
                       hover:-translate-y-2 hover:bg-teal-500 hover:text-black
                       transition duration-300 shadow-lg cursor-pointer"
          >
            <h3 className="text-lg font-semibold">
              {skill}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}