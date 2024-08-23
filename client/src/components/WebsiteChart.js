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
  { name: "Humalog", value: 12 },
  { name: "Ozempic", value: 10 },
  { name: "Novolog", value: 8 },
  { name: "Byetta", value: 7 },
  { name: "Victoza", value: 6 },
  { name: "Trulicity", value: 4 },
  { name: "Diabeta", value: 3 },
  { name: "Apidra", value: 3 },
  { name: "Asparat", value: 3 },
  { name: "Fiasp", value: 3 },
];
const data2 = [
  { name: "Jardiance", value: 10 },
  { name: "Actos", value: 6 },
  { name: "Invokana", value: 6 },
  { name: "Glucophage", value: 5 },
  { name: "Levemir", value: 5 },
  { name: "Glimepride", value: 3 },
  { name: "Basalgar", value: 3 },
  { name: "Glyburide", value: 3 },
  { name: "Glimpepiride", value: 3 },
  { name: "Amaryl", value: 3 },
];
const data3 = [
  { name: "Pioglitazone", value: 6 },
  { name: "Januvia", value: 5 },
  { name: "Onglyza", value: 5 },
  { name: "Janumet", value: 4 },
  { name: "Omarigliptin", value: 4 },
  { name: "Oseni", value: 3 },
  { name: "Nesina", value: 3 },
  { name: "Jentadueto", value: 3 },
  { name: "Tradjenta", value: 3 },
  { name: "Evogliptin", value: 2 },
];

const WebsiteChart = ({ data, title }) => {
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

export const WebsiteChart1 = () => (
  <WebsiteChart data={data} title="Diabetes with Weightloss" />
);
export const WebsiteChart2 = () => (
  <WebsiteChart data={data2} title="Diabetes" />
);
export const WebsiteChart3 = () => (
  <WebsiteChart data={data3} title="Gliptins" />
);
