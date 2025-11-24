import styles from "./categories.module.css";
import { animals, bird, cat, dogs, drugs, rodents } from "../../utilites/svg"

export default function Categories() {
    return <>
        <ul className={styles.bottom}>
            <li>
                <span>{dogs}</span>
                <span>Собаки</span>
            </li>
            <li>
                <span>{cat}</span>
                <span>Коти</span>
            </li>
            <li>
                <span>{rodents}</span>
                <span>Гризуни</span>
            </li>
            <li>
                <span>{bird}</span>
                <span>Птахи</span>
            </li>
            <li>
                <span>{animals}</span>
                <span>Інші тварини</span>
            </li>
            <li>
                <span>{drugs}</span>
                <span>Ліки</span>
            </li>
        </ul>
    </>
}