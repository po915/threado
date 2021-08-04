// Components
import Image from "next/image"
// Styles
import styles from "./Sidebar.module.css"
// Images
import community from "../../assets/img/icon/community.svg"
import activity from "../../assets/img/icon/activity.svg"
import member from "../../assets/img/icon/member.svg"
import message from "../../assets/img/icon/message.svg"
import event from "../../assets/img/icon/event.svg"
import staff from "../../assets/img/icon/staff.svg"
import setting from "../../assets/img/icon/setting.svg"
import help from "../../assets/img/icon/help.svg"

export default function Sidebar() {
  return (
    <div className={styles.sidebarWrapper}>
      <ul className={styles.sidebarNav}>
        <li className={styles.sidebarBrand}>Threado</li>
        <li>
          <span className={styles.sideItem}>
            <Image src={community} alt="#" className={styles.sideIcon} />
            <h5 className={styles.itemText}>Community</h5>
          </span>
          <span className={styles.sideItem}>
            <Image src={activity} alt="#" className={styles.sideIcon} />
            <h5 className={styles.itemText}>Activity</h5>
          </span>
          <span className={`${styles.sideItem} ${styles.active}`}>
            <Image src={member} alt="#" className={styles.sideIcon} />
            <h5 className={styles.itemText}>Members</h5>
          </span>
          <span className={styles.sideItem}>
            <Image src={message} alt="#" className={styles.sideIcon} />
            <h5 className={styles.itemText}>Messages</h5>
          </span>
          <span className={styles.sideItem}>
            <Image src={event} alt="#" className={styles.sideIcon} />
            <h5 className={styles.itemText}>Events</h5>
          </span>
          <span className={styles.sideItem}>
            <Image src={staff} alt="#" className={styles.sideIcon} />
            <h5 className={styles.itemText}>Staff</h5>
          </span>
          <span className={styles.sideItem}>
            <Image src={setting} alt="#" className={styles.sideIcon} />
            <h5 className={styles.itemText}>Settings</h5>
          </span>
          <span className={styles.sideItem}>
            <Image src={help} alt="#" className={styles.sideIcon} />
            <h5 className={styles.itemText}>Help Center</h5>
          </span>
        </li>
      </ul>
    </div>
  )
}
