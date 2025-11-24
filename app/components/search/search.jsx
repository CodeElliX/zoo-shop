import styles from "./search.module.css";
import {search} from "../../utilites/svg"

export default function Search() {
    return <>
        <div className={styles.wrap}>
            <div className={styles.search_icon}>{search}</div>
            <input type="text" placeholder="пошук товарів" />
        </div>
    </>
}