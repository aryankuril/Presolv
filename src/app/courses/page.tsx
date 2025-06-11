// Define a Course interface
interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
}

// Static courses data
const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Online Dispute Resolution",
    description: "Learn the fundamentals of ODR and its applications in modern conflict resolution.",
    duration: "4 weeks",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Advanced Mediation Techniques",
    description: "Master advanced mediation strategies and techniques for complex disputes.",
    duration: "6 weeks",
    level: "Advanced"
  },
  {
    id: 3,
    title: "Digital Negotiation Skills",
    description: "Develop effective negotiation skills for the digital age.",
    duration: "5 weeks",
    level: "Intermediate"
  },
  {
    id: 4,
    title: "Legal Tech and ODR",
    description: "Explore the intersection of legal technology and online dispute resolution.",
    duration: "4 weeks",
    level: "Intermediate"
  },
  {
    id: 5,
    title: "Ethics in Online Dispute Resolution",
    description: "Understand the ethical considerations in digital conflict resolution.",
    duration: "3 weeks",
    level: "All Levels"
  },
  {
    id: 6,
    title: "Building ODR Platforms",
    description: "Learn how to design and implement effective ODR platforms.",
    duration: "8 weeks",
    level: "Advanced"
  }
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md p-6 text-black">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-3">{course.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Duration: {course.duration}</span>
              <span>Level: {course.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
