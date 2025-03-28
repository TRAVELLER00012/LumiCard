import styles from "./navbar.module.css"
import PostCard from "../../assets/images/postcard.png"

const Navbar = () => {
  return (
    <div className={styles.container}>
        <img src={PostCard} className={styles.heading}/>
        <ul className={styles.listContainer}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="">Templates</a></li>
            <li><a href="https://github.com/TRAVELLER00012" target="_blank">Contribute</a></li>
        </ul>
        <button className={[styles.button,styles.login].join(" ")}>Login</button>
    </div>
  )
}

export default Navbar