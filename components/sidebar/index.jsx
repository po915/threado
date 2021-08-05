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
import { useState } from "react"

export default function Sidebar() {
  const icons = [
    community,
    activity,
    member,
    message,
    event,
    staff,
    setting,
    help,
  ]

  const titles = [
    "Community",
    "Activity",
    "Members",
    "Messages",
    "Events",
    "Staff",
    "Settings",
    "Help Center",
  ]

  const [isActive, setIsActive] = useState(3)

  return (
    <div className={styles.sidebar}>
      <p className={styles.sidebarBrand}>Threado</p>
      {titles.map((title, key) => {
        return (
          <span
            key={key}
            className={
              isActive == key
                ? `${styles.sideItem} ${styles.active}`
                : styles.sideItem
            }
            onClick={() => setIsActive(key)}>
            <Image
              src={icons[key]}
              alt="icon image"
              className={styles.sideIcon}
            />
            <h5 className={styles.itemText}>{title}</h5>
          </span>
        )
      })}
    </div>
  )
}
