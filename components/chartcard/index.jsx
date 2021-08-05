import Image from "next/image"
import { ResponsiveLine } from "@nivo/line"
// styles
import styles from "./ChartCard.module.css"
// Image
import arrow_up from "../../assets/img/icon/arrow_up.svg"
import arrow_down from "../../assets/img/icon/arrow_down.svg"

export default function ChartCard(props) {
  const { title, data, isUp, percent, value } = props

  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.boxOne}>
          <h3>{title}</h3>
          <h1>{addComma(value)}</h1>
        </div>
        <div className={styles.boxTwo}>
          <div className={isUp ? styles.badge : styles.badgeDown}>
            <Image
              src={isUp ? arrow_up : arrow_down}
              className={styles.arrow}
              alt="img"
            />
            <p>{percent}%</p>
          </div>
        </div>
      </div>
      <div className={styles.chartBox}>
        <ResponsiveLine
          data={data}
          margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="basis"
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          colors={isUp ? "#2BC596" : "#F04646"}
          enablePoints={false}
          pointSize={9}
          pointColor={{ theme: "background" }}
          pointBorderWidth={20}
          pointBorderColor={{ from: "serieColor", modifiers: [] }}
          pointLabelYOffset={-11}
          enableArea={true}
          areaOpacity={0.25}
          legends={[]}
        />
      </div>
    </div>
  )
}
