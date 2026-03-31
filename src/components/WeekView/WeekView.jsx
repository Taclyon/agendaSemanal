import styles from "./WeekView.module.css";

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
];

export default function WeekView() {
  return (
    <div className={styles.container}>
      {days.map((day) => (
        <div key={day} className={styles.dayColumn}>
          <div className={styles.dayTitle}>{day}</div>
        </div>
      ))}
    </div>
  );
}