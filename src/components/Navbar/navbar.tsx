import styles from "./navbar.module.css"
import PostCard from "../../assets/images/postcard.png"
import { Link } from "react-router-dom"

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
        {/* <Link to="/login"><button className={[styles.button].join(" ")}>Login</button></Link> */}
        <Link to="/register"><button className={[styles.button,styles.register].join(" ")}>Register</button></Link>
    </div>
  )
}

export default Navbar