import NotFoundIcOn from "../../assets/location-not-found.svg";
import style from "./notFound.module.scss";
import { Button } from "../Button";
import Link from "next/link";

export function NotFound({ returnHome }: { returnHome?: boolean }) {
  return (
    <div className={style.container}>
      <p>SORRY WE COULDN&apos;T FIND IT</p>
      <NotFoundIcOn />
      {returnHome ? (
        <Link href="/">
          <Button text={"Return Home"} type="secondary" />
        </Link>
      ) : null}
    </div>
  );
}
