import { Metadata } from "next";

export const metadata: Metadata = {
  title: "References - Paál Gyula",
  description: "A list of companies and projects I have worked with.",
};

const references = [
  {
    company: "Trendency Online Zrt.",
    role: "Contractor - Sr. Cloud Dev",
    year: "2025",
  },
  {
    company: "Upwork, Andela, Turing",
    role: "Freelancer Developer",
    year: "2021",
  },
  {
    company: "InterTicket Kft.",
    role: "Research & Development Lead",
    year: "2021",
  },
  {
    company: "TheNewPush LLC.",
    role: "Chief of Research & Development",
    year: "2019",
  },
  {
    company: "TheNewPush LLC.",
    role: "Lead Software Developer",
    year: "2017",
  },
  { company: "InfoCompass Kft.", role: "Development Lead", year: "2015" },
  { company: "Pont Rendszerház Kft.", role: "J2EE Developer", year: "2014" },
  { company: "Húsipari Vállalat Zrt.", role: "J2EE Architect", year: "2011" },
  { company: "Welt 2000 Kft.", role: "Java/PHP Developer", year: "2009" },
];

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-20 pb-20">
      <div className="w-full max-w-4xl p-4 md:p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white">
          References
        </h1>
        <div className="space-y-6">
          {references.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-primary">
                  {item.company}
                </h2>
                <span className="text-gray-400 text-lg">{item.year}</span>
              </div>
              <p className="text-lg text-gray-300 mt-2">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
