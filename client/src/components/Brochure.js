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
  { name: "Humalog", value: 18 },
  { name: "Ozempic", value: 12 },
  { name: "Trulicity", value: 8 },
  { name: "Victoza", value: 7 },
  { name: "Novolog", value: 6 },
  { name: "Byetta", value: 6 },
  { name: "Apidra", value: 5 },
  { name: "Glyburide", value: 4 },
  { name: "Asparat", value: 3 },
  { name: "Fiasp", value: 3 },
];

const data2 = [
  { name: "Metformin", value: 87 },
  { name: "Actos", value: 11 },
  { name: "Levemir", value: 7 },
  { name: "Jardiance", value: 5 },
  { name: "Invokana", value: 4 },
  { name: "Glyburide", value: 4 },
  { name: "Glimepride", value: 3 },
  { name: "Basalgar", value: 3 },
  { name: "Glimpepiride", value: 3 },
  { name: "Amaryl", value: 3 },
];

const data3 = [
  { name: "Januvia", value: 10 },
  { name: "Janumet", value: 6 },
  { name: "Pioglitazone", value: 4 },
  { name: "Onglyza", value: 4 },
  { name: "Oseni", value: 3 },
  { name: "Nesina", value: 3 },
  { name: "Jentadueto", value: 3 },
  { name: "Tradjenta", value: 3 },
  { name: "Evogliptin", value: 3 },
  { name: "Omarigliptin", value: 3 },
];

const BrochureChart = ({ data, title }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" tick={false} />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fill: "#000", fontSize: "12px" }}
            width={80} // Adjust width as needed for label visibility
          />
          <Tooltip />
          <Bar dataKey="value" fill="#bc7ac4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const Brochure1 = () => (
  <BrochureChart data={data} title="Brochure on weightloss" />
);
export const Brochure2 = () => (
  <BrochureChart data={data2} title="Brochure on Diabetes" />
);
export const Brochure3 = () => (
  <BrochureChart data={data3} title="Brochure on Gliptins" />
);
