import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import  {type TaskCardProps } from "./libs/types";

function App() {
  const tasks: TaskCardProps[] = [
    {
      id: 1,
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: 2,
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: 3,
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: false,
    },
        {
      id: 4,
      title: "ใส่เกม",
      description: "หลังจากทำทุกอย่างที่ต้องทำเสร็จแล้ว ก็ถึงเวลาสวรรค์",
      isDone: true,
    },
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />

      <div className="d-flex flex-grow-1">
        <Sidebar userName="Lawit" type="student" />
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <TaskForm />
            {tasks.map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
          </main>
        </div>
      </div>

      <Footer year="2026" fullName="Lawit Pinkaew" studentId="670610727"/>
    </div>
  );
}

export default App;
