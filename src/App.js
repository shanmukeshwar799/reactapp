import './App.css';

function App() {
  const students = [
    { id: 1, name: "Alice", age: 20, grade: "A" },
    { id: 2, name: "Bob", age: 21, grade: "B" },
    { id: 3, name: "Charlie", age: 22, grade: "A" },
    { id: 4, name: "David", age: 20, grade: "C" },
    { id: 5, name: "Eva", age: 23, grade: "B" },
    { id: 6, name: "Frank", age: 21, grade: "A" },
    { id: 7, name: "Grace", age: 22, grade: "B" },
    { id: 8, name: "Helen", age: 20, grade: "A" },
    { id: 9, name: "Ian", age: 23, grade: "C" },
    { id: 10, name: "Jane", age: 21, grade: "B" },
  ];

  return (
    <div className="App">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default App;
