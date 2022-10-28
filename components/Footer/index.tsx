import style from "./footer.module.scss";



export function Footer() {
  return (
    <footer className={style.container}>
        Copyright {new Date().getFullYear()} by Besik Kavzharadze as the assignment - FORKED with Georgeb779. All Rights Reserved.
    </footer>
  );
}
