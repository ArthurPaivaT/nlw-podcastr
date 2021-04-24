import styles from "./styles.module.scss";
import format from "date-fns/format";
import ptBr from "date-fns/locale/pt-BR";
import Link from "next/link";

export default function Header() {
  const today = format(new Date(), "EEEE, d 'de' MMMM", { locale: ptBr });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <img src="/logo.svg"></img>
      </Link>

      <div className={styles.headerLine}></div>

      {/* <h3> O melhor para você ouvir, sempre </h3> */}

      <span> {today}</span>
    </header>
  );
}
