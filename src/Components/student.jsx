function Components({ name, rollNo, course, semester, college }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
        Student Details
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between bg-white p-4 rounded-lg shadow-sm">
          <span className="font-semibold text-gray-600">Name</span>
          <span className="text-gray-900">{name}</span>
        </div>

        <div className="flex justify-between bg-white p-4 rounded-lg shadow-sm">
          <span className="font-semibold text-gray-600">Roll No</span>
          <span className="text-gray-900">{rollNo}</span>
        </div>

        <div className="flex justify-between bg-white p-4 rounded-lg shadow-sm">
          <span className="font-semibold text-gray-600">Course</span>
          <span className="text-gray-900">{course}</span>
        </div>

        <div className="flex justify-between bg-white p-4 rounded-lg shadow-sm">
          <span className="font-semibold text-gray-600">Semester</span>
          <span className="text-gray-900">{semester}</span>
        </div>

        <div className="flex justify-between bg-white p-4 rounded-lg shadow-sm">
          <span className="font-semibold text-gray-600">College</span>
          <span className="text-gray-900">{college}</span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Data is passed from App.jsx to Components.jsx using Props.
        </p>
      </div>
    </div>
  );
}

export default Components;