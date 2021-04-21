import styles from "./styles.module.scss";
import format from "date-fns/format";
import ptBr from "date-fns/locale/pt-BR";

export default function Header() {
  const today = format(new Date(), "EEEE, d 'de' MMMM", { locale: ptBr });

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg"></img>

      <div className={styles.headerLine}></div>

      <h3> O melhor para você ouvir, sempre </h3>

      {/* <span> {today}</span> */}
    </header>
  );
}
