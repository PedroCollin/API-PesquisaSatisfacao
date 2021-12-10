<template>
  <div class="container">
    <div class="dropdown">
      <Dropdown
        class="drop"
        v-model="dropdownData.selectedCity"
        :options="dropdownData.turmas"
        optionLabel="name"
        placeholder="Selecione uma turma aqui"
      />
    </div>
    <div class="charts">
      <div class="donuts">
        <div class="chart num">
          <p>Total de formulários preenchidos</p>
          <h1>{{ totalForms }}</h1>
          <i
            class="pi pi-info-circle"
            style="font-size: 2rem; text-align: right; color: #c22a1f"
            v-tooltip.right="
              'Esta porcentagem demonstra o total de formulários preenchidos.'
            "
          ></i>
        </div>
        <div class="chart piechart">
          <p>Satisfação Total</p>
          <Chart type="pie" :data="pieData" :options="chartOptions" />
          <i
            class="pi pi-info-circle"
            style="font-size: 2rem; text-align: right; color: #c22a1f"
            v-tooltip.right="
              'Este gráfico demonstra a satisfação geral dos alunos com os itens avaliados. '
            "
          ></i>
        </div>
      </div>
      <div class="chart barchart">
        <i
            class="pi pi-info-circle"
            style="font-size: 2rem; text-align: right; color: #c22a1f"
            v-tooltip.top="
              'Este gráfico demonstra a importância considerada por todos os alunos em relação aos itens avaliados.'
            "
          ></i>
        <p>Importância de cada tópico pelos alunos</p>
        <Chart type="bar" :data="stackedData" :options="stackedOptions" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalForms: "75%",

      dropdownData: {
        selectedCity: null,
        turmas: [
          { name: "1DES" },
          { name: "2DES" },
          { name: "1MEC" },
          { name: "2MEC" },
          { name: "1MAD" },
        ],
      },

      stackedData: {
        labels: [
          "Q1",
          "Q2",
          "Q3",
          "Q4",
          "Q5",
          "Q6",
          "Q7",
          "Q8",
          "Q9",
          "Q10",
          "Q11",
          "Q12",
          "Q13",
        ],
        datasets: [
          {
            type: "bar",
            label: "Alta",
            backgroundColor: "#c22a1f",
            data: [50, 25, 12, 48, 90, 76, 42, 25, 50, 27, 33, 88, 19],
          },
          {
            type: "bar",
            label: "Média",
            backgroundColor: "#881c16",
            data: [21, 84, 24, 75, 37, 65, 34, 22, 12, 48, 90, 76, 26],
          },
          {
            type: "bar",
            label: "Baixa",
            backgroundColor: "#ffccc9",
            data: [41, 52, 24, 74, 23, 21, 32, 17, 49, 62, 92, 55, 68],
          },
        ],
      },

      stackedOptions: {
        plugins: {
          tooltips: {
            mode: "index",
            intersect: false,
          },
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            stacked: true,
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
        },
      },

      donutData: {
        labels: ["A", "B", "C"],
        datasets: [
          {
            label: "# of Votes",
            data: [300, 50, 100],
            backgroundColor: ["#c22a1f", "#881c16", "#ffccc9"],
            hoverBackgroundColor: ["#c22a1f", "#881c16", "#ffccc9"],
          },
        ],
      },

      pieData: {
        labels: ["Ótimo", "Bom", "Regular", "Ruim"],
        datasets: [
          {
            data: [300, 50, 100, 75],
            backgroundColor: ["#c22a1f", "#881c16", "#ffccc9", "#ff9a94"],
            hoverBackgroundColor: ["#c22a1f", "#881c16", "#ffccc9", "#ff9a94"],
          },
        ],
      },

      chartOptions: {
        legend: {
          labels: {
            fontColor: "#495057",
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.container {
  padding: 80px;
}
.dropdown {
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .drop {
    max-width: 600px;
    box-shadow: none;
    border-color: none;
  }
  .drop:hover {
    border-color: #c22a1f !important;
  }
}
.charts {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;

  .chart {
    padding: 20px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    p {
      font-size: 1.8rem;
    }
  }
  .num {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 4.5rem;
      font-weight: 400;
      color: #c22a1f;
      text-align: center;
      padding: 50px;
    }
    h1:hover {
      cursor: default;
    }
  }

  .donuts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    margin-right: 20px;

    .piechart {
      padding: 10px;
      margin-top: 20px;
    }
  }

  .barchart {
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

@media (max-width: 1100px) {
  .charts {
    flex-direction: column;
    width: 100%;
    padding: 40px;

    .donuts {
      flex-direction: row;
      margin: 0 0 20px 0;
      width: 100%;
      .num {
        h1 {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 7rem;
        }
      }
      .piechart {
        margin: 0 0 0 20px;
      }
    }
    .barchart {
      width: 100%;
    }
  }
}
</style>
