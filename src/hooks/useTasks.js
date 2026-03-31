import { useEffect, useState } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };
      const deleteTask = (id) => {
  setTasks((prev) => prev.filter((t) => t.id !== id));
};

const saveTask = (task) => {
  setTasks((prev) => {
    const exists = prev.find((t) => t.id === task.id);

    if (exists) {
      return prev.map((t) => (t.id === task.id ? task : t));
    }

    return [...prev, task];
  });
};

const clearTasks = () => {
  return setTasks([])
}

  return { tasks, addTask, deleteTask, saveTask, clearTasks };
}