import styles from "./WeekView.module.css";
import { useState } from "react";
import TaskModal from "../TaskModal/TaskModal";
import { useTasks } from "../../hooks/useTasks";
import ExportPDFButton from "../ExportPDF/ExportPDFButton";

const days = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
];

export default function WeekView() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState("");
    const [editingTask, setEditingTask] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());




    const { tasks, saveTask, deleteTask, clearTasks } = useTasks();

    // 🔥 Helper para colores por prioridad
    const getPriorityClass = (priority) => {
        switch (priority?.toLowerCase()) {
            case "alta":
                return styles.priorityAlta;
            case "media":
                return styles.priorityMedia;
            case "baja":
                return styles.priorityBaja;
            default:
                return "";
        }
    };
    const getPriorityLabelClass = (priority) => {
        switch (priority?.toLowerCase()) {
            case "alta":
                return styles.labelAlta;
            case "media":
                return styles.labelMedia;
            case "baja":
                return styles.labelBaja;
            default:
                return "";
        }
    };

    const openModal = (day) => {
        setSelectedDay(day);
        setEditingTask(null);
        setIsOpen(true);
    };

    const handleEdit = (task) => {
        setEditingTask(task);
        setSelectedDay(task.day);
        setIsOpen(true);
    };

    return (
        <>
            <input
                type="date"
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                style={{
                    margin: "10px 20px",
                    padding: "8px",
                    borderRadius: "8px"
                }}
            />
            {/* Botón exportar */}
            <div style={{ padding: "10px 20px" }}>
                <ExportPDFButton tasks={tasks} selectedDate={selectedDate} />
                <button
                    onClick={clearTasks}
                    style={{
                        margin: "0 15px",
                        padding: "10px 16px",
                        backgroundColor: "#ef4444",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                >
                    Limpar agenda
                </button>
            </div>

            <div className={styles.container}>
                {days.map((day) => (
                    <div
                        key={day}
                        className={styles.dayColumn}
                        onClick={() => openModal(day)}
                    >
                        <div className={styles.dayTitle}>{day}</div>

                        {/* Tareas del día */}
                        {tasks
                            .filter((t) => t.day === day)
                            .map((t) => (
                                <div
                                    key={t.id}
                                    className={`${styles.taskCard} ${getPriorityClass(t.priority)}`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className={styles.taskHeader}>
                                        <strong>{t.employee}</strong>
                                        <span className={`${styles.priorityLabel} ${getPriorityLabelClass(t.priority)}`}>
                                            {t.priority}
                                        </span>
                                    </div>

                                    <p className={styles.taskText}>{t.task}</p>
                                    <small>{t.sector}</small>

                                    <div className={styles.actions}>
                                        <button onClick={() => handleEdit(t)}>✏️</button>
                                        <button onClick={() => deleteTask(t.id)}>🗑️</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </div>

            <TaskModal
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                    setEditingTask(null);
                }}
                selectedDay={selectedDay}
                addTask={saveTask}
                editingTask={editingTask}
            />
        </>
    );
}