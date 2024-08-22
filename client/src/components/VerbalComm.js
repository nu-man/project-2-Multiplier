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
    { name: "Ozempic", value: 32 },
    { name: "Humalog", value: 27 },
    { name: "Victoza", value: 17 },
    { name: "Trulicity", value: 12 },
    { name: "Novolog", value: 7 },
    { name: "Apidra", value: 7 },
    { name: "Byetta", value: 5 },
    { name: "Fiasp", value: 4 },
    { name: "Glyburide", value: 3 },
    { name: "Asparat", value: 3 },
  ];
  
  const data2 = [
    { name: "Metformin", value: 119 },
    { name: "Levemir", value: 18 },
    { name: "Jardiance", value: 17 },
    { name: "Actos", value: 10 },
    { name: "Invokana", value: 4 },
    { name: "Glimepride", value: 3 },
    { name: "Basalgar", value: 3 },
    { name: "Glyburide", value: 3 },
    { name: "Glimpepiride", value: 3 },
    { name: "Amaryl", value: 3 },
  ];
  
  const data3 = [
    { name: "Januvia", value: 17 },
    { name: "Pioglitazone", value: 6 },
    { name: "Janumet", value: 4 },
    { name: "Tradjenta", value: 4 },
    { name: "Oseni", value: 3 },
    { name: "Nesina", value: 3 },
    { name: "Jentadueto", value: 3 },
    { name: "Onglyza", value: 3 },
    { name: "Evogliptin", value: 3 },
    { name: "Omarigliptin", value: 3 },
  ];
  

const VerbalCommunicationsChart = ({ data, title }) => {
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

export const Verbalcommunications1 = () => (
  <VerbalCommunicationsChart data={data} title="Discussion on weightloss" />
);
export const Verbalcommunications2 = () => (
  <VerbalCommunicationsChart data={data2} title="Discussion on Diabetes" />
);
export const Verbalcommunications3 = () => (
  <VerbalCommunicationsChart data={data3} title="Discussion on Gliptins" />
);
