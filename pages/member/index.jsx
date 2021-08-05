import { useState } from "react"
import Image from "next/image"
// Library
import { Container, Row, Col, Button, Form } from "react-bootstrap"
// Components
import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
import ChartCard from "../../components/chartcard"
import Toolbar from "./toolbar"
// Styles
import styles from "./Member.module.css"
// Images
import search from "../../assets/img/icon/search.svg"
import darrow from "../../assets/img/icon/darrow.svg"
import uarrow from "../../assets/img/icon/uarrow.svg"
import csv from "../../assets/img/icon/csv.svg"
import sms from "../../assets/img/icon/sms.svg"
import slack from "../../assets/img/icon/slackGrey.svg"
import twitter from "../../assets/img/icon/twitterGrey.svg"
import discord from "../../assets/img/icon/discordGrey.svg"
import zoom from "../../assets/img/icon/zoomGrey.svg"

export default function Member() {
  const [activeInterval, setActiveInterval] = useState(3)
  const [activeFilter, setActiveFilter] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  const data = [
    {
      id: "japan",
      color: "hsl(162, 64%, 47%)",
      data: [
        {
          x: "plane",
          y: 158,
        },
        {
          x: "helicopter",
          y: 181,
        },
        {
          x: "boat",
          y: 265,
        },
        {
          x: "train",
          y: 236,
        },
        {
          x: "subway",
          y: 256,
        },
        {
          x: "bus",
          y: 232,
        },
        {
          x: "car",
          y: 193,
        },
        {
          x: "moto",
          y: 158,
        },
        {
          x: "bicycle",
          y: 188,
        },
        {
          x: "horse",
          y: 194,
        },
        {
          x: "skateboard",
          y: 182,
        },
        {
          x: "others",
          y: 223,
        },
      ],
    },
  ]

  const titles = ["Super Users", "Active", "Passive", "Inactive", "New"]
  const isUps = [true, true, false, true, false]
  const percents = [8, 5, 3, 4, 2]
  const values = [425, 1230, 389, 211, 75]

  const intervals = ["All time", "30D", "7D", "Yesterday", "Today"]

  const filterSets = ["Channels", "Segments", "Roles", "Tags"]

  function handleOnClick(e) {
    if (e.target.id != "filterBox" && e.target.type != "checkbox")
      setIsOpen(false)
  }

  return (
    <div onClick={(e) => handleOnClick(e)} className="pt-2 root">
      <div className="sidebarBox">
        <Sidebar />
      </div>
      <div className="contentBox">
        <Header />
        <div className={styles.subHeader}>
          <h1 className={styles.title}>Members</h1>
          <p className={`ms-auto ${styles.interval}`}>Interval:</p>
          <div className="d-flex">
            {intervals.map((item, key) => {
              return (
                <Button
                  key={key}
                  onClick={(e) => setActiveInterval(key)}
                  className={
                    activeInterval == key
                      ? "borderButton active"
                      : "borderButton"
                  }>
                  {item}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="mt-3 cardBox">
          {titles.map((title, key) => {
            return (
              <ChartCard
                title={title}
                data={data}
                isUp={isUps[key]}
                percent={percents[key]}
                value={values[key]}
                key={key}
              />
            )
          })}
        </div>
        <Toolbar />
        <Row>
          <Col className="d-flex mt-2">
            <div className={styles.searchBox}>
              <Image alt="img" src={search} className={styles.searchIcon} />
              <input
                type="Search..."
                className={styles.searchInput}
                placeholder="Search..."
              />
            </div>
            <div
              id="filterBox"
              className={styles.filterBox}
              onClick={() => setIsOpen(!isOpen)}>
              <p>Filters</p>
              <Image alt="img" src={isOpen ? uarrow : darrow} />
            </div>
            <div
              className={
                isOpen ? `${styles.dropBox} ${styles.show}` : styles.dropBox
              }>
              <div className={styles.boxOne}>
                {filterSets.map((item, key) => {
                  return (
                    <div
                      key={key}
                      onClick={() => setActiveFilter(key)}
                      className={
                        activeFilter == key
                          ? `${styles.active} ${styles.filterSet}`
                          : styles.filterSet
                      }>
                      <p>{item}</p>
                    </div>
                  )
                })}
                <div className={styles.filterApply}>Apply Filters</div>
                <div className={styles.setDefault}>Set Default</div>
              </div>
              <div className={styles.boxTwo}>
                <Form.Group
                  className={styles.formBox}
                  controlId="formBasicCheckbox">
                  <span className="mb-3">
                    <Form.Check type="checkbox" />
                    <span className={styles.checkAll}>All Chanels</span>
                  </span>
                  <span className="mb-3">
                    <Form.Check type="checkbox" />
                    <span className={styles.checkLabel}>
                      <Image alt="img" src={slack} /> Slack
                    </span>
                  </span>
                  <span className="mb-3">
                    <Form.Check type="checkbox" />
                    <span className={styles.checkLabel}>
                      <Image alt="img" src={discord} /> Discord
                    </span>
                  </span>
                  <span className="mb-3">
                    <Form.Check type="checkbox" />
                    <span className={styles.checkLabel}>
                      <Image alt="img" src={twitter} /> Twitter
                    </span>
                  </span>
                  <span className="mb-3">
                    <Form.Check type="checkbox" />
                    <span className={styles.checkLabel}>
                      <Image alt="img" src={zoom} /> Zoom
                    </span>
                  </span>
                </Form.Group>
              </div>
            </div>
            <div className={styles.cusButton}>
              <Image alt="img" src={csv} />
              <p>.CSV</p>
            </div>
            <div className={`${styles.cusButton} ${styles.backYellow}`}>
              <Image alt="img" src={sms} />
              <p>Bulk Message</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
