import jsPDF from "jspdf";
import {
  format,
  startOfWeek,
  endOfWeek,
  getWeek
} from "date-fns";

export default function ExportPDFButton({ tasks, selectedDate }) {
  const exportPDF = () => {
    const doc = new jsPDF();

    // 📅 Datos de semana
    const today = selectedDate;

    const weekNumber = getWeek(today, { weekStartsOn: 1 });
    const start = startOfWeek(today, { weekStartsOn: 1 });
    const end = endOfWeek(today, { weekStartsOn: 1 });

    const startFormatted = format(start, "dd/MM/yyyy");
    const endFormatted = format(end, "dd/MM/yyyy");

    // 🎨 HEADER
    doc.setFillColor(17, 24, 39);
    doc.rect(0, 0, 210, 30, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.text("Agenda Semanal", 14, 18);

    doc.setFontSize(11);
    doc.text(
      `Semana ${weekNumber} (${today.getFullYear()})`,
      140,
      12
    );
    doc.text(`${startFormatted} - ${endFormatted}`, 140, 20);

    let y = 40;

    // 🔑 IMPORTANTE: días en español (como guardas los datos)
    const daysES = [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo"
    ];

    // 🇧🇷 Traducción a portugués
    const dayMap = {
      Lunes: "Segunda-feira",
      Martes: "Terça-feira",
      Miércoles: "Quarta-feira",
      Jueves: "Quinta-feira",
      Viernes: "Sexta-feira",
      Sábado: "Sábado",
      Domingo: "Domingo"
    };

    daysES.forEach((day) => {
      const dayTasks = tasks.filter((t) => t.day === day);

      if (dayTasks.length > 0) {
        // 📅 Día en portugués
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(13);
        doc.text(dayMap[day], 14, y);

        // línea separadora
        doc.setDrawColor(200, 200, 200);
        doc.line(14, y + 2, 196, y + 2);

        y += 8;

        dayTasks.forEach((t) => {
          // 🎨 color por prioridad
          let color = [16, 185, 129]; // baja

          if (t.priority === "alta") color = [220, 38, 38];
          if (t.priority === "media") color = [217, 119, 6];

          // barra lateral
          doc.setFillColor(...color);
          doc.rect(14, y - 5, 3, 10, "F");

          // contenido
          doc.setTextColor(0, 0, 0);
          doc.setFontSize(11);
          doc.text(`${t.employee} • ${t.sector}`, 20, y);

          y += 5;

          doc.setFontSize(10);
          doc.text(`Tarefa: ${t.task}`, 20, y);

          y += 5;

          doc.setTextColor(...color);
          doc.text(`Prioridade: ${t.priority}`, 20, y);

          y += 10;

          // salto de página automático
          if (y > 270) {
            doc.addPage();
            y = 20;
          }
        });

        y += 5;
      }
    });

    doc.save("agenda-semanal.pdf");
  };

  return (
    <button
      onClick={exportPDF}
      style={{
        padding: "10px 16px",
        backgroundColor: "#111827",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}
    >
      Exportar PDF
    </button>
  );
}