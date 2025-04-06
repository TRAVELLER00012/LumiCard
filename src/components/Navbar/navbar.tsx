import styles from "./navbar.module.css"
import PostCard from "../../assets/images/postcard.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getToken } from "../../services/token"

interface Props{
  items? : {name:string,hrefV:string}[],
  projects?: boolean
}

const Navbar = ({items} : Props) => {
  const [token,setToken] =  useState<boolean>(false)
  useEffect(() =>{
    const t = getToken()
    if(t) setToken(true)
  })

  if(items){
    return (
      <div className={styles.container}>
          <img src={PostCard} className={styles.heading}/>
          <ul className={styles.listContainer}>
            {items.map(item => (
              <li><a href={item.hrefV}>{item.name}</a></li>
            ))}
          </ul>
          <LinkComponent token={token}/>
      </div>
    )
  }else{
    return (
      <div className={styles.container}>
          <img src={PostCard} className={styles.heading}/>
          <ul className={styles.listContainer}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="/templates">Templates</a></li>
              <li><a href="https://github.com/TRAVELLER00012" target="_blank">Contribute</a></li>
          </ul>
          <LinkComponent token={token}/>
      </div>
    )
  }
}

const LinkComponent = ({token}:{token:boolean}) =>{
  if(token) return <Link to="/"><button className={[styles.button].join(" ")}>Projects</button></Link> 
  else return <Link to="/register"><button className={[styles.button,styles.register].join(" ")}>Register</button></Link>
}

export default Navbar