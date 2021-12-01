<template>
  <div class="container">
    <div class="dropdown">
      <Dropdown
        class="drop"
        v-model="dropdownData.selectedTurma"
        :options="dropdownData.turmas"
        optionLabel="name"
        placeholder="Selecione uma turma aqui"
      />
      <a
        v-if="dropdownData.selectedTurma"
        class="btn-print"
        type="button"
        value="imprimir"
        v-on:click="gerarPDF()"
      >
        <i
          class="pi pi-print"
          style="font-size: 2.5rem; text-align: right; color: #c22a1f"
          v-tooltip.right="
            'Experimene baixar um PDF com os dados da turma selecionada.'
          "
        ></i>
      </a>
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
        <div class="chart piechart" id="dados">
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
      <div class="chart barchart" id="dados2">
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
      imagePDF: null,

      totalForms: "75%",

      dropdownData: {
        selectedTurma: null,
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
  methods: {
    gerarPDF() {
      let dados = document.getElementById("dados").innerHTML;

      let doc = window.open("", "", "width=800, height=600");
      let html =
        `
      <html><head><title>Gráficos documentados - ` +
        JSON.stringify(this.dropdownData.selectedTurma.name) +
        ` </title></head>
        <body style="font-family: 'Roboto', sans-serif;display: flex; flex-direction: row; justify-content: space-between">
          <div style="margin-top: 60px">
            <div style="border: 1px solid #c22a1f; border-radius: 10px;">
              <div style="background-color: #c22a1f;color: #fff;padding: 5px;border-top-left-radius: 10px;border-top-right-radius: 10px;">
                <h3>Satisfação total dos alunos:</h3>
              </div>
              <div style="padding: 10px;">
                <p>` +
        this.pieData.labels[0] +
        `: ` +
        this.pieData.datasets[0].data[0] +
        ` alunos.</p>
                <hr />
                <p>` +
        this.pieData.labels[1] +
        `: ` +
        this.pieData.datasets[0].data[1] +
        ` alunos.</p>
                <hr />
                <p>` +
        this.pieData.labels[2] +
        `: ` +
        this.pieData.datasets[0].data[2] +
        ` alunos.</p>
                <hr />
                <p>` +
        this.pieData.labels[3] +
        `: ` +
        this.pieData.datasets[0].data[3] +
        ` alunos.</p>
              </div>
            </div>
            <div style="margin-top: 30px; border: 1px solid #c22a1f; border-radius: 10px; text-align: center;">
              <div style="background-color: #c22a1f;color: #fff;padding: 5px;border-top-left-radius: 10px;border-top-right-radius: 10px;">
                <h2>Total de formulários preenchidos:</h2>
              </div>
              <p style="font-size: 2rem; font-weight: 700; color: #c22a1f;">` +
        this.totalForms +
        `</p>
            </div>
          </div>
          <div>
            <h3>Tabela de importância de cada tópico: </h3>
            <table style="width: 100%; display: flex; flex-direction: column;">
              <thead style="padding: 5px; background-color: #c22a1f; color: #fff; border-top-left-radius: 10px; border-top-right-radius: 10px;">
                <tr style="display: flex; justify-content: space-between;">
                  <th>Tópico</th>
                  <th>` +
        this.stackedData.datasets[0].label +
        `</th>
                  <th>` +
        this.stackedData.datasets[1].label +
        `</th>
                  <th>` +
        this.stackedData.datasets[2].label +
        `</th>
                </tr>
              </thead>
              <tbody style="display: flex; flex-direction: column; justify-content: space-between; border: 2px solid #c22a1f; padding: 5px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                <tr style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #c22a1f; padding: 5px; border-bottom: 1px solid #c22a1f">
                  <td><b>` +
        this.stackedData.labels[0] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[0] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[0] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[0] +
        `</td>
                </tr>
                <tr style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #c22a1f">
                  <td><b>` +
        this.stackedData.labels[1] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[1] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[1] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[1] +
        `</td>
                </tr>
                <tr style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #c22a1f">
                  <td><b>` +
        this.stackedData.labels[2] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[2] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[2] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[2] +
        `</td>
                </tr>
                <tr style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #c22a1f">
                  <td><b>` +
        this.stackedData.labels[3] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[3] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[3] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[3] +
        `</td>
                </tr>
                <tr style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #c22a1f">
                  <td><b>` +
        this.stackedData.labels[4] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[4] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[4] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[4] +
        `</td>
                </tr>
                <tr style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #c22a1f">
                  <td><b>` +
        this.stackedData.labels[5] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[5] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[5] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[5] +
        `</td>
                </tr>
                <tr style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #c22a1f">
                  <td><b>` +
        this.stackedData.labels[6] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[6] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[6] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[6] +
        `</td>
                </tr>
                <tr style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #c22a1f">
                  <td><b>` +
        this.stackedData.labels[7] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[7] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[7] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[7] +
        `</td>
                </tr>
                <tr style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #c22a1f">
                  <td><b>` +
        this.stackedData.labels[8] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[8] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[8] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[8] +
        `</td>
                </tr>
                <tr style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #c22a1f">
                  <td><b>` +
        this.stackedData.labels[9] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[9] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[9] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[9] +
        `</td>
                </tr>
                <tr style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #c22a1f">
                  <td><b>` +
        this.stackedData.labels[10] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[10] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[10] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[10] +
        `</td>
                </tr>
                <tr style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #c22a1f">
                  <td><b>` +
        this.stackedData.labels[11] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[11] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[11] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[11] +
        `</td>
                </tr>
                <tr style="display: flex; justify-content: space-between; padding: 5px;">
                  <td><b>` +
        this.stackedData.labels[12] +
        `</b></td>
                  <td>` +
        this.stackedData.datasets[0].data[12] +
        `</td>
                  <td>` +
        this.stackedData.datasets[1].data[12] +
        `</td>
                  <td>` +
        this.stackedData.datasets[2].data[12] +
        `</td>
                </tr>
              </tbody>
            </table>
          </div>
        </body>
      </html>
      `;
      doc.document.write(html);
      doc.document.close();
      doc.print();
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.container {
  padding: 120px;
  box-sizing: border-box;
}
.dropdown {
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  a{
    width: auto;
    i:hover{
      cursor: pointer;
    }
  }
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
  .container {
    padding: 50px;
  }
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
