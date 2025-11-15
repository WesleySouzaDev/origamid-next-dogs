'use client';

import React from 'react';

import style from '@/css/Conta-estatisticas.module.css';
import { VictoryPie, VictoryBar, VictoryChart } from 'victory';
import { StatsData } from '@/actions/stats-get';

type GraphData = {
  x: string;
  y: number;
};

export default function ContaEstatisticas({ data }: { data: StatsData[] }) {
  const [graph, setGraph] = React.useState<GraphData[]>([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setGraph(graphData);

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
  }, [data]);

  return (
    <section className={`${style.graph} animeLeft`}>
      <div className={`${style.total} ${style.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>

      <div className={`${style.graphItem}`}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>

      <div className={`${style.graphItem}`}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}
