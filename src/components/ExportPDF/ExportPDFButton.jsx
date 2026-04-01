import jsPDF from "jspdf";
import { format, startOfWeek, endOfWeek, getWeek } from "date-fns";

export default function ExportPDFButton({ tasks, selectedDate }) {
  const exportPDF = () => {
    const doc = new jsPDF({ orientation: "l", unit: "mm", format: "a4" });

    const today = selectedDate || new Date();
    const weekNumber = getWeek(today, { weekStartsOn: 1 });
    const start = startOfWeek(today, { weekStartsOn: 1 });
    const end = endOfWeek(today, { weekStartsOn: 1 });
    const startFormatted = format(start, "dd/MM/yyyy");
    const endFormatted = format(end, "dd/MM/yyyy");

    // --- NUEVA PALETA SUAVE FEMENINA ---
    const colors = {
      primary: [255, 182, 193],    // Rosa pastel
      secondary: [85, 85, 85],     // Gris suave
      accent: [255, 223, 186],     // Durazno claro para detalles
      bg: [255, 250, 245],         // Fondo crema claro
      taskBg: [255, 255, 255],     // Blanco para tarjetas de tareas
      priority: {
        alta: [255, 105, 97],      // Coral
        media: [255, 179, 71],     // Amarillo pastel
        baixa: [144, 238, 144]     // Verde menta
      }
    };

    // Fondo página
    doc.setFillColor(...colors.bg);
    doc.rect(0, 0, 297, 210, "F");

    // Header
    doc.setFillColor(...colors.primary);
    doc.rect(0, 0, 297, 28, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Planejamento Semanal", 10, 18);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Semana ${weekNumber} • ${today.getFullYear()}`, 10, 23);
    doc.text(`${startFormatted} a ${endFormatted}`, 287, 18, { align: "right" });

    // Configuración de columnas
    const daysPT = [
      "segunda-feira", "terça-feira", "quarta-feira", 
      "quinta-feira", "sexta-feira", "sábado", "domingo"
    ];

    const colWidth = 297 / 7;
    let colIndex = 0;

    daysPT.forEach((day) => {
      const dayTasks = tasks.filter(
        (t) => t.day?.trim().toLowerCase() === day
      );
      if (!dayTasks.length) {
        colIndex++;
        return;
      }

      const x = colWidth * colIndex + 4; // margen izquierdo
      let y = 35;

      // Título día
      doc.setTextColor(...colors.secondary);
      doc.setFont("times", "italic");
      doc.setFontSize(14);
      const displayDay = day.charAt(0).toUpperCase() + day.slice(1);
      doc.text(displayDay, x, y);

      doc.setDrawColor(...colors.accent);
      doc.setLineWidth(0.5);
      doc.line(x, y + 2, x + colWidth - 6, y + 2);

      y += 8;

      dayTasks.forEach((t) => {
        const priorityColor = colors.priority[t.priority] || colors.priority.baixa;

        // Tarjeta de tarea
        const taskHeight = 30; // altura ajustable para que todo el texto quepa
        doc.setDrawColor(220, 220, 220);
        doc.setFillColor(...colors.taskBg);
        doc.roundedRect(x, y, colWidth - 8, taskHeight, 2, 2, "FD");

        // Indicador de prioridad
        doc.setFillColor(...priorityColor);
        doc.circle(x + 3, y + 7, 2, "F");

        // Texto ajustado dentro de la tarjeta
        doc.setTextColor(...colors.secondary);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.text(`${t.employee.toUpperCase()}`, x + 7, y + 7);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.text(`Setor: ${t.sector}`, x + 7, y + 12);

        // Ajuste de texto largo para "Atividade"
        const maxTextWidth = colWidth - 20;
        const splitText = doc.splitTextToSize(`Atividade: ${t.task}`, maxTextWidth);
        doc.text(splitText, x + 7, y + 17);

        // Prioridad a la derecha
        doc.setFontSize(7);
        doc.setTextColor(...priorityColor);
        doc.text(t.priority.toUpperCase(), x + colWidth - 18, y + 7);

        y += taskHeight + 4; // espacio entre tareas
      });

      colIndex++;
    });

    doc.save(`agenda_semanal_${weekNumber}.pdf`);
  };

  return (
    <button
      onClick={exportPDF}
      style={{
        padding: "12px 24px",
        backgroundColor: "#ffb6c1",
        color: "white",
        border: "none",
        borderRadius: "25px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "14px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease"
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = "#ffa6b0"}
      onMouseOut={(e) => e.target.style.backgroundColor = "#ffb6c1"}
    >
      ✨ Exportar Agenda Semanal
    </button>
  );
}