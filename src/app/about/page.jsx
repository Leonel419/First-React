import Link from "next/link";
import styles from './page.module.css';
export default function about(){
    return(
        <>
            <h1 className="">This is the about page</h1>

            <Link href="/">go to home page</Link>

            <h1 className={styles.text}>my name is leonel</h1>
            <p className={`${styles.text} text`}> i am ololoma</p>
        </>
        
    );

}