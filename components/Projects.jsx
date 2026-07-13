export default function Projects() {
  const projects = [
    {
      title: "Credit Card Fraud Detection | Mini Project",
      description:
        "This project aims to develop a robust machine learning model integrated into a Flask web application to detect fraudulent credit card transactions in real-time. Utilizing advanced data preprocessing techniques and a RandomForest classifier, this system provides high accuracy and adaptability to evolving fraud patterns.",
      tech: "Java • Spring Boot • SQL • HTML • CSS • JavaScript",
    },
    {
      title: "Smart Car lock/unlock system | Main Project",
      description:
        "Designing a smart car locking system using arduino, RFID and raspberry pi for secure access control.",
      tech: "Power BI • Excel • SQL • Python",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-8 py-24 text-white"
    >
      <h2 className="text-4xl font-bold mb-12">
        <span className="text-teal-400">03.</span> Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#112240] rounded-xl p-6 border border-gray-700 hover:border-teal-400 hover:-translate-y-2 transition duration-300 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              {project.description}
            </p>

            <p className="text-sm text-gray-300 font-medium">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}