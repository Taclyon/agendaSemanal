import styles from "./Header.module.css";
import { format, startOfWeek, endOfWeek, getWeek } from "date-fns";

export default function Header() {
  const today = new Date();

  const weekNumber = getWeek(today, { weekStartsOn: 1 });
  const start = startOfWeek(today, { weekStartsOn: 1 });
  const end = endOfWeek(today, { weekStartsOn: 1 });

  const startFormatted = format(start, "dd MMM");
  const endFormatted = format(end, "dd MMM");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Agenda Semanal</h1>
      <p className={styles.subtitle}>
        Semana {weekNumber} | {startFormatted} - {endFormatted}
      </p>
    </div>
  );
}