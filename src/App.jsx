import Components from "./Components";

function App() {
  const student = {
    name: "Nishant Mevada",
    rollNo: "101",
    course: "BCA (Honours)",
    semester: "Semester 5",
    college: "Ganpat University",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
            React Practical 2
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Student Information Using Props
          </p>

          <Components
            name={student.name}
            rollNo={student.rollNo}
            course={student.course}
            semester={student.semester}
            college={student.college}
          />
        </div>
      </div>
    </div>
  );
}

export default App;