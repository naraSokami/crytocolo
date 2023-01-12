import Link from "next/link"
import styles from './Navbar.module.scss';
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { selectUserAddress } from "../../../store/slices/user";

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
  const address = useSelector(selectUserAddress)

  return (
    <aside className={styles.sidebar}>
      {address !== '' &&
        <div className={styles.info}>
          <p><span>connected as<br /></span>{address.slice(0, 15)}...</p>
        </div>
      }
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
  