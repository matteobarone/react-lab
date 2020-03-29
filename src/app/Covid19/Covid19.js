import React from 'react';
import './Covid19.scss';
import { fetchData } from './fetch';
import { format } from 'date-fns'
import { Chart } from './Chart/Chart';
import { Block } from './Block/Block';

class Covid19 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCharts: [],
      lastData: {},
    }
  }

  componentDidMount() {
    fetchData().then((res) => {
      const dataCharts = this.formatDataForChart(res);
      const lastData = this.formatDataForBlocks(res);
      this.setState({
        dataCharts,
        lastData,
      });
    });
  }

  formatDataForChart(res) {
    return res.map((day) => {
      const date = format(new Date(day.data), 'dd/MM');
      return {
        name: date,
        total: day.totale_casi,
        positive: day.totale_attualmente_positivi,
        recovered: day.dimessi_guariti,
        deaths: day.deceduti
      };
    });
  }

  formatDataForBlocks(res) {
    const yesterday = res[res.length - 2];
    const today = res[res.length - 1];

    const positive = today.totale_attualmente_positivi;
    const newPositive = today.nuovi_attualmente_positivi;
    const positiveDelta = ((newPositive / positive) * 100).toFixed(2);

    const recovered = today.dimessi_guariti;
    const newRecovered = today.dimessi_guariti - yesterday.dimessi_guariti;
    const recoveredDelta = ((newRecovered / recovered) * 100).toFixed(2);

    const deaths = today.deceduti;
    const newDeaths = today.deceduti - yesterday.deceduti;
    const deathsDelta = ((newDeaths / deaths) * 100).toFixed(2);

    return {
      lastUpdate: format(new Date(today.data), 'dd/MM/yyyy - HH:mm'),
      positive,
      newPositive,
      positiveDelta,
      recovered,
      newRecovered,
      recoveredDelta,
      deaths,
      newDeaths,
      deathsDelta,
    }
  }

  render() {
    return (
      <div className="Covid19">
        <div className="Covid19__last-update">Last update: {this.state.lastData.lastUpdate}</div>
        <div className="Covid19__blocks">
          <Block
            title="Positives"
            number={this.state.lastData.positive}
            increment={this.state.lastData.newPositive + ' / ' + this.state.lastData.positiveDelta + ' %'}
            color="#FF6D6D"
          />

          <Block
            title="Recovered"
            number={this.state.lastData.recovered}
            increment={this.state.lastData.newRecovered + ' / ' + this.state.lastData.recoveredDelta + ' %'}
            color="#82ca9d"
          />

          <Block
            title="Deaths"
            number={this.state.lastData.deaths}
            increment={this.state.lastData.newDeaths + ' / ' + this.state.lastData.deathsDelta + ' %'}
            color="#2c2c2c"
          />
        </div>
        <Chart data={this.state.dataCharts} />
      </div>
    );
  }
}

export default Covid19;
