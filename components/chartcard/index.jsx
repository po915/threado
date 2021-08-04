import Image from "next/image"
import { ResponsiveLine } from "@nivo/line"
// styles
import styles from "./ChartCard.module.css"
// Image
import arrow_up from "../../assets/img/icon/arrow_up.svg"
import arrow_down from "../../assets/img/icon/arrow_down.svg"

export default function ChartCard(props) {
  const { test } = props
  const data = [
    {
      id: "japan",
      color: "hsl(94, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 7,
        },
        {
          x: "helicopter",
          y: 204,
        },
        {
          x: "boat",
          y: 218,
        },
        {
          x: "train",
          y: 89,
        },
        {
          x: "subway",
          y: 58,
        },
        {
          x: "bus",
          y: 224,
        },
        {
          x: "car",
          y: 230,
        },
        {
          x: "moto",
          y: 127,
        },
        {
          x: "bicycle",
          y: 251,
        },
        {
          x: "horse",
          y: 219,
        },
        {
          x: "skateboard",
          y: 254,
        },
        {
          x: "others",
          y: 170,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(326, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 238,
        },
        {
          x: "helicopter",
          y: 265,
        },
        {
          x: "boat",
          y: 26,
        },
        {
          x: "train",
          y: 35,
        },
        {
          x: "subway",
          y: 126,
        },
        {
          x: "bus",
          y: 76,
        },
        {
          x: "car",
          y: 180,
        },
        {
          x: "moto",
          y: 55,
        },
        {
          x: "bicycle",
          y: 167,
        },
        {
          x: "horse",
          y: 199,
        },
        {
          x: "skateboard",
          y: 132,
        },
        {
          x: "others",
          y: 109,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(190, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 213,
        },
        {
          x: "helicopter",
          y: 20,
        },
        {
          x: "boat",
          y: 33,
        },
        {
          x: "train",
          y: 196,
        },
        {
          x: "subway",
          y: 24,
        },
        {
          x: "bus",
          y: 48,
        },
        {
          x: "car",
          y: 34,
        },
        {
          x: "moto",
          y: 42,
        },
        {
          x: "bicycle",
          y: 98,
        },
        {
          x: "horse",
          y: 102,
        },
        {
          x: "skateboard",
          y: 33,
        },
        {
          x: "others",
          y: 90,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(229, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 103,
        },
        {
          x: "helicopter",
          y: 64,
        },
        {
          x: "boat",
          y: 38,
        },
        {
          x: "train",
          y: 213,
        },
        {
          x: "subway",
          y: 112,
        },
        {
          x: "bus",
          y: 295,
        },
        {
          x: "car",
          y: 203,
        },
        {
          x: "moto",
          y: 279,
        },
        {
          x: "bicycle",
          y: 19,
        },
        {
          x: "horse",
          y: 98,
        },
        {
          x: "skateboard",
          y: 243,
        },
        {
          x: "others",
          y: 215,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(93, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 92,
        },
        {
          x: "helicopter",
          y: 63,
        },
        {
          x: "boat",
          y: 95,
        },
        {
          x: "train",
          y: 78,
        },
        {
          x: "subway",
          y: 34,
        },
        {
          x: "bus",
          y: 175,
        },
        {
          x: "car",
          y: 28,
        },
        {
          x: "moto",
          y: 295,
        },
        {
          x: "bicycle",
          y: 286,
        },
        {
          x: "horse",
          y: 147,
        },
        {
          x: "skateboard",
          y: 102,
        },
        {
          x: "others",
          y: 9,
        },
      ],
    },
  ]
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.boxOne}>
          <h3>Supper Users</h3>
          <h1>425</h1>
        </div>
        <div className={styles.boxTwo}>
          <div className={styles.badge}>
            <Image src={arrow_up} className={styles.arrow} />
            <p>8%</p>
          </div>
        </div>
      </div>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: "nivo" }}
        enablePoints={false}
        pointSize={9}
        pointColor={{ theme: "background" }}
        pointBorderWidth={20}
        pointBorderColor={{ from: "serieColor", modifiers: [] }}
        pointLabelYOffset={-11}
        enableArea={true}
        areaOpacity={0.25}
        isInteractive={false}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  )
}
