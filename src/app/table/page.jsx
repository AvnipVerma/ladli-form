const students = [
    { id: 1, name: 'John Doe', marks: 85 },
    { id: 2, name: 'Jane Smith', marks: 92 },
    { id: 3, name: 'Samuel Green', marks: 78 },
    { id: 4, name: 'Emily Brown', marks: 89 },
    { id: 5, name: 'Michael Johnson', marks: 76 },
    { id: 6, name: 'Linda Williams', marks: 91 },
  ];
  
  function Page() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <main className="w-full max-w-4xl p-2">
          {/* <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Student Marks Table</h1> */}
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="py-3 px-4 border-b border-indigo-700">S.No</th>
                  <th className="py-3 px-4 border-b border-indigo-700">Student Name</th>
                  <th className="py-3 px-4 border-b border-indigo-700">Marks</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {students.map((student) => (
                  <tr key={student.id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
                    <td className="py-3 px-4 border-b border-gray-300">{student.id}</td>
                    <td className="py-3 px-4 border-b border-gray-300">{student.name}</td>
                    <td className="py-3 px-4 border-b border-gray-300">{student.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    );
  }
  
  export default Page;
  