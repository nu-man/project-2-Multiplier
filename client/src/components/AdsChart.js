// DiabetesDrugsChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Ozempic", value: 38 },
  { name: "Humalog", value: 23 },
  { name: "Novolog", value: 14 },
  { name: "Victoza", value: 12 },
  { name: "Trulicity", value: 7 },
  { name: "Byetta", value: 6 },
  { name: "Apidra", value: 4 },
  { name: "Fiasp", value: 4 },
  { name: "Diabeta", value: 3 },
  { name: "Asparat", value: 3 },
];
const data2 = [
  { name: "Actos", value: 21 },
  { name: "Levemir", value: 18 },
  { name: "Jardiance", value: 13 },
  { name: "Glucophage", value: 7 },
  { name: "Glyburide", value: 7 },
  { name: "Invokana", value: 5 },
  { name: "Glimepride", value: 4 },
  { name: "Basalgar", value: 3 },
  { name: "Glimpepiride", value: 3 },
  { name: "Amaryl", value: 3 },
];
const data3 = [
  { name: "Januvia", value: 9 },
  { name: "Pioglitazone", value: 8 },
  { name: "Janumet", value: 6 },
  { name: "Onglyza", value: 5 },
  { name: "Oseni", value: 4 },
  { name: "Jentadueto", value: 4 },
  { name: "Tradjenta", value: 3 },
  { name: "Nesina", value: 3 },
  { name: "Evogliptin", value: 3 },
  { name: "Omarigliptin", value: 3 },
];

const AdsChart = ({ data, title }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data}>
          <XAxis
            type="number"
            tick={false}
            tickFormatter={(value) => `value: ${value}`}
          />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fill: "#000", fontSize: "12px" }}
            width={80} // Adjust width as needed for label visibility
          />
          <Tooltip />
          <Bar
            dataKey="value"
            label={(value) => `value:${value}`}
            fill="#bc7ac4"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const AdsChart1 = () => (
  <AdsChart data={data} title="Diabetes with Weightloss" />
);
export const AdsChart2 = () => <AdsChart data={data2} title="Diabetes" />;
export const AdsChart3 = () => <AdsChart data={data3} title="Gliptins" />;
