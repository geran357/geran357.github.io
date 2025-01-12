import React from "react";

type EducationCardProps = {
  year: string;
  institution: string;
  location: string;
  degree: string;
  description: string;
};

type SkillsSectionProps = {
  title: string;
  skills: string[];
};

const EducationCard: React.FC<EducationCardProps> = ({
  year,
  institution,
  location,
  degree,
  description,
}) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6 opacity-0 animate-fadeIn">
    <div className="mb-4">
      <h3 className="text-pink-600 font-bold text-lg">{year}</h3>
      <h4 className="text-gray-900 font-semibold">{institution}</h4>
      <p className="text-gray-500 text-sm">{location}</p>
    </div>
    <div>
      <h5 className="text-gray-800 font-semibold">{degree}</h5>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => (
  <div className="mb-6">
    <h3 className="text-purple-600 font-bold text-lg mb-4 opacity-0 animate-fadeIn">
      {title}
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-gray-100 text-gray-800 text-center py-3 rounded-lg shadow-md opacity-0 animate-fadeIn"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 opacity-0 animate-fadeIn">
        {/* Section: Education */}
        <h1 className="text-pink-600 text-2xl font-bold mb-8 opacity-0 animate-fadeIn">
          Education
        </h1>
        <EducationCard
          year="2015 – 2018"
          institution="SMPN 1 Banjar"
          location="Banjar, Jawa Barat"
          degree="SMP"
          description="SMPN 1 Banjar adalah sekolah menengah pertama negeri yang terletak di Kota Banjar, Jawa Barat. Sekolah ini menyediakan pendidikan berkualitas untuk siswa kelas 7-9 dengan fokus pada pengembangan akademik, karakter, dan keterampilan hidup."
        />
        <EducationCard
          year="2018 – 2021"
          institution="SMAN 1 Banjar"
          location="Banjar, Jawa Barat"
          degree="SMA"
          description="SMAN 1 Banjar adalah sekolah menengah atas negeri yang terletak di Kota Banjar, Jawa Barat. Sekolah ini menyediakan pendidikan berkualitas bagi siswa kelas 10-12 dengan fokus pada pengembangan akademik, karakter, dan keterampilan hidup."
        />

        {/* Section: Skills & Languages */}
        <div className="mt-8">
          <h1 className="text-purple-600 text-2xl font-bold mb-8 opacity-0 animate-fadeIn">
            Skills & Languages
          </h1>
          <div className="grid grid-cols-1 gap-6">
            <SkillsSection
              title="Personal Skills"
              skills={[
                "Adobe After Effects",
                "Adobe Premiere Pro",
                "Web Development",
                "Figma",
              ]}
            />
            <SkillsSection
              title="Languages"
              skills={[
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "ReactJS",
                "Strapi",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
