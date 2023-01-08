import Link from "next/link"
import { useState } from "react";
import styles from './Navbar.module.scss';
import { useRouter } from 'next/router'

export default function Page() {

  const links = [
    {
      name: "Welcome",
      path: "/"
    },
    {
      name: "Who We Are",
      path: "/about-us"
    },
    {
      name: "Companies",
      path: "/companies"
    },
    {
      name: "My Supports",
      path: "/my-supports"
    },
    {
      name: "Get In Touch",
      path: "/contact"
    }
  ]

  const {asPath} = useRouter();

  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          {links.map((link, i) => (
              <li className={asPath.split('/')[1] === link.path.slice(1) ? styles.active : ''} key={i}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </aside>
  )
}
  