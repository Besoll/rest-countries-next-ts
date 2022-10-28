import { Footer, Header, NotFound } from "../components";
import style from "../styles/four-oh-four.page.module.scss";

export default function FourOhFour() {
  return (
    <div className={style.container}>
      <Header />
      

       <NotFound returnHome={true} />

      <Footer />
    </div>
  );
}
