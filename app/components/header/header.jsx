import styles from "./header.module.css";
import Search from "../search/search";

export default function Header() {
    return <div>
            <ul className={styles.top}>
                <li>Знайомимось</li>
                <li>Оплата та доставка</li>
                <li>Повернення</li>
                <li>Наші новини</li>
                <li>Контакти</li>
            </ul>
            <div>
                <Search />
            </div>
    </div>
}