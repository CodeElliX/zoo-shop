import styles from "./header.module.css";
import Search from "../search/search";
import logo from "../../../public/logo.png"
import Image from "next/image";
import { basket, heart } from "@/app/utilites/svg";

export default function Header() {
    return <div>
        <ul className={styles.top}>
            <li>Знайомимось</li>
            <li>Оплата та доставка</li>
            <li>Повернення</li>
            <li>Наші новини</li>
            <li>Контакти</li>
        </ul>
        <div className={styles.bottom}>
            <Image src={logo} alt="logo" width={150} height={60} />
            <Search />
            {heart}
            <div className={styles.btn}>
                <span className={styles.left_btn}>{basket}</span>
                <span className={styles.right_btn}>
                    <span>1240</span>
                    <span>грн</span>
                </span>
            </div>
        </div>
    </div>
}