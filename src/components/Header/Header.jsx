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
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Planejamento Semanal Ana</h1>
        <div className={styles.subtitleWrapper}>
          <span className={styles.subtitle}>Semana {weekNumber}</span>
          <span className={styles.separator}>|</span>
          <span className={styles.subtitle}>{startFormatted} - {endFormatted}</span>
        </div>
      </div>
    </header>
  );
}