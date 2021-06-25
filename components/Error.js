import styles from "../styles/Error.module.scss";
import Link from "next/link";
import router from "next/router";
import { useEffect } from "react";

export default function Error({title,message,redirect,buttonMsg}) {
  useEffect(() => {
      setTimeout(() => {
          router.push(redirect)
      }, 3000);
  }, [])
    
  return (
    <div className={styles.error}>
      <h1>{title}</h1>
      <h2>{message}</h2>
      <Link href={redirect} passHref>
        <button>{buttonMsg}</button>
      </Link>
    </div>
  )
}
