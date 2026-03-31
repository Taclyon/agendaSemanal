import styles from "./TaskModal.module.css";
import { useState } from "react";

export default function TaskModal({
  isOpen,
  onClose,
  selectedDay,
  addTask,
  editingTask
}) {
  // 1. ESTADO INICIAL: Se carga solo una vez al montar el componente.
  // Gracias a la "key" en el padre, este estado se reinicia automáticamente
  // cuando cambias de tarea o cierras/abres el modal.
  const [employee, setEmployee] = useState(editingTask?.employee || "");
  const [sector, setSector] = useState(editingTask?.sector || "");
  const [task, setTask] = useState(editingTask?.task || "");
  const [priority, setPriority] = useState(editingTask?.priority || "media");

  // Si el modal no está abierto, no renderizamos nada.
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employee || !sector || !task) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const taskData = {
      id: editingTask ? editingTask.id : Date.now(),
      employee,
      sector,
      task,
      priority,
      day: selectedDay
    };

    addTask(taskData);
    
    // 2. NO NECESITAS resetear los estados manualmente aquí 
    // si el componente se desmonta al llamar a onClose().
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>
          {editingTask ? "Editar tarea" : "Agregar tarea"} - {selectedDay}
        </h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Selección de funcionario */}
          <select
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            required
          >
            <option value="">Seleccionar Funcionario</option>
            <option value="Adrys">Adrys</option>
            <option value="Manuela">Manuela</option>
            <option value="Luziane">Luziane</option>
          </select>

          {/* Selección de sector */}
          <select 
            value={sector} 
            onChange={(e) => setSector(e.target.value)}
            required
          >
            <option value="">Seleccionar Setor</option>
            <option value="Infantil">Infantil</option>
            <option value="Masculino">Masculino</option>
            <option value="Perfumaria">Perfumaria</option>
          </select>

          {/* Nombre de la tarea */}
          <input
            type="text"
            placeholder="Ej: Reponer stock"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />

          {/* Prioridad */}
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>

          <div className={styles.buttons}>
            <button type="button" className={styles.btnCancel} onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className={styles.btnSave}>
              {editingTask ? "Actualizar Tarea" : "Guardar Tarea"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}