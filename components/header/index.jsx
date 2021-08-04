// Components
import { Dropdown, Button } from "react-bootstrap"
import Image from "next/image"
// Styles
import styles from "./Header.module.css"
import globalStyles from "../../styles/Global.module.css"
// Images
import bell from "../../assets/img/icon/bell.svg"
import avatar from "../../assets/img/sample-avatar.jpg"

export default function Header() {
  return (
    <div className={styles.header}>
      <Dropdown className={styles.dropDown}>
        <Dropdown.Toggle className={styles.dropToggle}>
          Acme Community
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button
        className={`ms-auto ${globalStyles.borderButton} ${styles.bellButton}`}>
        <Image src={bell} />
      </Button>
      <Dropdown className="ms-2">
        <Dropdown.Toggle className={styles.avatarDropToggle}>
          <Image src={avatar} className={styles.avatar} alt="avatar" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
