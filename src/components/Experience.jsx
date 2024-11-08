
const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-100 to-white py-16 px-4">
      <h2 className="text-4xl font-bold text-black mb-8">Experience</h2>

      <div className="max-w-4xl space-y-10">
        
        {/* Apponward Technologies Experience */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-black">Apponward Technologies</h3>
          <p className="text-lg text-gray-700 italic">Remote Backend Engineer | Oct ’23 - Dec ’23</p>
          <ul className="mt-2 text-gray-700 list-disc list-inside space-y-2">
            <li>
              <strong>Proficient in Django REST Framework:</strong> Demonstrated expertise in leveraging Django REST Framework to design, develop, and maintain robust APIs. Implemented authentication, serialization, and viewsets to create scalable and efficient web APIs.
            </li>
            <li>
              <strong>Skilled API Developer:</strong> Experienced in developing RESTful APIs using Python, focusing on high-quality, well-documented endpoints. Designed API schemas, handled request/response formats, and integrated third-party services to meet business requirements effectively.
            </li>
          </ul>
        </div>

        {/* Katyayani Organics Experience */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-black">Katyayani Organics</h3>
          <p className="text-lg text-gray-700 italic">Remote Backend Engineer | Sep ’24 - Oct ’24</p>
          <ul className="mt-2 text-gray-700 list-disc list-inside space-y-2">
            <li>
              <strong>Proficient in Flask and FastAPI:</strong> Leveraged Flask and FastAPI to design, develop, and maintain scalable web applications and APIs, including implementing middleware, request handling, and asynchronous programming for enhanced performance.
            </li>
            <li>
              <strong>PostgreSQL Database Management & Docker Containerization:</strong> Designed and optimized PostgreSQL databases to ensure data integrity and efficient query performance. Wrote complex SQL queries, implemented indexing strategies, and performed database migrations. Additionally, proficient in containerizing applications with Docker for consistent environments across development, testing, and production.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;
