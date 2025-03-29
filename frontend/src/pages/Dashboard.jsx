import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    } else {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      initializeTasks(userData.role);
    }
  }, [navigate]);

  // Function to initialize tasks based on role
  const initializeTasks = (role) => {
    const roleTasks = {
      student: [
        { id: 1, title: "Read an article related to MSME", completed: false },
        { id: 2, title: "Write a review of the article", completed: false },
        { id: 3, title: "View schemes on MASA Forum website", completed: false },
      ],
      startup: [
        { id: 4, title: "Know about MASA Awards", completed: false },
        { id: 5, title: "Read blogs on MASA Forum", completed: false },
        { id: 6, title: "Register for incubation", completed: false },
        { id: 7, title: "Create DPR for your startup", completed: false },
      ],
      mentor: [
        { id: 8, title: "Study details of assigned startups", completed: false },
        { id: 9, title: "Prepare a mentorship report", completed: false },
        { id: 10, title: "Suggest improvements & guidance", completed: false },
      ],
      investor: [
        { id: 11, title: "Explore investment opportunities in startups", completed: false },
        { id: 12, title: "View our startup portfolio", completed: false },
        { id: 13, title: "Submit your investment offer", completed: false },
      ],
    };

    const savedTasks = localStorage.getItem(`tasks_${role}`);
    setTasks(savedTasks ? JSON.parse(savedTasks) : roleTasks[role]);
  };

  if (!user) {
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  }

  const handleTaskToggle = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem(`tasks_${user.role}`, JSON.stringify(updatedTasks));
  };

  // Calculate Progress
  const completedTasks = tasks.filter(task => task.completed).length;
  const progressPercentage = (completedTasks / tasks.length) * 100;

  // Dynamic greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-lg">
        {/* Welcome Message */}
        <h2 className="text-2xl font-semibold text-center mb-2">
          {getGreeting()}, {user.name}! 👋
        </h2>
        <p className="text-center text-gray-600">Role: <span className="font-semibold text-blue-600">{user.role}</span></p>

        {/* Task List */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-center mb-2">Your Tasks</h3>
          <ul className="bg-gray-100 p-4 rounded-lg shadow">
            {tasks.map(task => (
              <li key={task.id} className="flex items-center py-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleTaskToggle(task.id)}
                  className="mr-3 w-5 h-5 cursor-pointer"
                />
                <span className={task.completed ? "text-green-600 line-through" : "text-gray-700"}>
                  {task.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-center mb-2">Your Progress</h3>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-center text-gray-600 mt-2">{progressPercentage.toFixed(0)}% Completed</p>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem(`tasks_${user.role}`);
            navigate("/login");
          }}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
