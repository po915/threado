// Library
import { Container, Row, Col, Button } from "react-bootstrap"
// Components
import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
import ChartCard from "../../components/chartcard"
// Styles
import styles from "../../styles/Member.module.css"
import globalStyles from "../../styles/Global.module.css"

export default function Member() {
  return (
    <Container fluid className={styles.wrapper}>
      <Sidebar />
      <div className={styles.pageContentWrapper}>
        <Container fluid>
          <Header />
          <div className={styles.subHeader}>
            <h1 className={styles.title}>Members</h1>
            <p className={styles.interval}>Interval:</p>
            <Button className={globalStyles.borderButton}>All time</Button>
            <Button className={globalStyles.borderButton}>30D</Button>
            <Button className={globalStyles.borderButton}>7D</Button>
            <Button className={globalStyles.borderButton}>Yesterday</Button>
            <Button className={globalStyles.borderButton}>Today</Button>
          </div>
          <Row>
            <Col>
              <ChartCard test="wfwefwef"></ChartCard>
            </Col>
            <Col>
              <ChartCard test="wfwefwef"></ChartCard>
            </Col>
            <Col>
              <ChartCard test="wfwefwef"></ChartCard>
            </Col>
            <Col>
              <ChartCard test="wfwefwef"></ChartCard>
            </Col>
            <Col>
              <ChartCard test="wfwefwef"></ChartCard>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  )
}
