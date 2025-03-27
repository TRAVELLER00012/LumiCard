import styles from "./navbar.module.css"
import PostCard from "../../assets/images/postcard.png"

const Navbar = () => {
  return (
    <div className={styles.container}>
        <img src={PostCard} className={styles.heading}/>
        <ul className={styles.listContainer}>
            <li>Home</li>
            <li>About</li>
            <li>Templates</li>
            <li>Contribute</li>
        </ul>
        <button className={[styles.button,styles.login].join(" ")}>Login</button>
    </div>
  )
}

export default Navbar