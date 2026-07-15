export default function Projects() {
  const projects = [
    {
      title: "Credit Card Fraud Detection | Mini Project",
      description:
        "Developed a machine learning-based web application to detect fraudulent credit card transactions in real time. The system uses advanced data preprocessing techniques and a Random Forest classifier to accurately identify suspicious transactions and improve fraud prevention.",
      tech: "Python • Flask • Machine Learning • Random Forest",
    },
    {
      title: "Smart Car Lock/Unlock System | Main Project",
      description:
        "Designed and developed a smart car locking and unlocking system using Arduino, RFID, and Raspberry Pi. The system provides secure vehicle access control through RFID authentication and IoT integration.",
      tech: "Arduino • Raspberry Pi • RFID • IoT",
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

      <div className="grid md:grid-cols-2 gap-8">
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
              <strong>Technologies:</strong> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}