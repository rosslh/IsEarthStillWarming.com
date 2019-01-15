import React, { Component } from "react";
import { withRouteData } from "react-static";
import Chart from "react-apexcharts";
import risks from "../assets/risks.png";
import Cite from "../components/cite";
import RefList from "../components/reflist";
import Counter from "../components/counter";
import Stamp from "../components/stamp";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  isEarthWarming() {
    const warmedBy = this.props.tenYearWarming;
    const citation = <Cite name="tempData" />;
    const currentYear = new Date().getFullYear();
    const target = this.props.latestTempValue >= 1.5 ? 2 : 1.5;
    const projectedYear = Math.trunc(
      currentYear +
        (target - this.props.latestTempValue) / (this.props.tenYearWarming / 10)
    );
    if (warmedBy > 0.1) {
      return (
        <p>
          <Stamp>Yes</Stamp>
          Over the past 10 years, the Earth's average temperature has risen by{" "}
          {this.props.tenYearWarming}°C.{citation}{" "}
          {this.props.latestTempValue < 2
            ? `At this rate, the Earth's temperature will surpase the +${target}°C
              limit set by the Paris Climate Agreement by ${projectedYear}.`
            : ""}
        </p>
      );
    } else if (warmedBy > 0) {
      return (
        <p>
          <Stamp green>Not signicantly.</Stamp>
          Over the past 10 years, the Earth's temperature has only risen by{" "}
          {this.props.tenYearWarming}°C.
          {citation}
        </p>
      );
    }
    return (
      <p>
        <Stamp green>No</Stamp>
        Over the past 10 years, the Earth's temperature has dropped by{" "}
        {Math.abs(this.props.tenYearWarming)}°C.{citation}
      </p>
    );
  }
  render() {
    const figureWrapperStyle = `
      width: 80%;
      margin: 0 auto 2rem;
      > img {
        width: 100%;
        margin: 1em auto;
      }
      >strong {
        display: block;
        text-align: center;
      }
    `;
    const options = {
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#b7292f"],
          shadeIntensity: 0,
          type: "vertical",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 100, 100]
        }
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#f5bf00"
        }
      },
      plotOptions: {
        line: {
          curve: "smooth"
        }
      },
      markers: {
        size: 0,
        style: "full"
      },
      chart: {
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      }
    };
    return (
      <article
        css={`
          svg {
            margin: 0 auto;
            display: block;
            .mg-active-datapoint-container {
              transform: translate(-200px, 0);
            }
          }
        `}
      >
        <h2>Is Earth still warming?</h2>
        {this.isEarthWarming()}
        <Counter
          currentCo2={this.props.latestCo2Value}
          currentTemp={this.props.latestTempValue}
        />
        <h2>What is global warming?</h2>
        <p>
          Global warming is the trend of the Earth's temperature rising at an
          unprecidented rate starting in the mid 20th century.
          <Cite name="nasa" />
        </p>
        <p>
          Though gradual changes to the Earth's climate have happened in the
          past, this latest trend has been primarily caused by the release of
          carbon dioxide (CO2) into the atmosphere by burning fossil fuels.
          <Cite name="nasa" /> CO2 is a <em>greenhouse gas</em>, meaning it
          traps heat in Earth's atmosphere rather than allowing it to radiate
          into space.
          <Cite name="nasa" />
        </p>
        <p>
          Since the mid 1950s, the Earth's temperature has had a clear positive
          trend (see fig. 1).
        </p>
        <div css={figureWrapperStyle}>
          <Chart
            type="line"
            series={[
              {
                name: "global temp",
                data: this.props.temp
              }
            ]}
            options={{
              ...options,
              yaxis: {
                title: {
                  text: "Temperature anomoly"
                }
              },
              xaxis: {
                title: {
                  text: "Year"
                }
              }
            }}
          />
          <strong>
            Figure 1<Cite name="tempData" />
          </strong>
        </div>
        <p>
          The amount the Earth has warmed is measured against the average
          pre-industrial global temperature. As of {this.props.latestTempYear},
          the Earth's temperature is approximately {this.props.latestTempValue}
          °C above pre-industrial levels.
          <Cite name="tempData" /> If the planet's temperature continues to
          rise, we can expect many environmental and societal impacts, the most
          significant of which we will explain in this paper.
        </p>
        <p>
          In late 2015, 184 nations were party to the Paris Climate Acord, a UN
          agreement dealing with reducing greenhouse gas emissions in an effort
          to mitigate global warming. The stated goal of the agreement is to
          limit the average global temperature to 1.5°C above pre-industrial
          levels.
          <Cite name="1.5C" />
        </p>
        <p>
          In 2018, the UN released a report detailing the potential impacts of
          human-induced climate change and possible preventative measures. Its
          key finding was that staying below the 1.5°C target is possible, but
          would require "rapid, far-reaching, and unprecedented changes in all
          aspects of society".
          <Cite name="1.5C-press-release" /> Human carbon emissions would need
          to decrease by 45% from 2010 levels by 2030, and reach net zero by
          2050.
          <Cite name="1.5C" />
        </p>
        <p>
          The primary cause of global warming is the human emission of CO2 into
          the atmosphere. This CO2 is produced by burning fossil fuels, mostly
          from electricity production, agriculture, industry, and vehicles with
          internal combustion engines.
          <Cite name="emissionsData" />
        </p>
        <p>
          Since CO2 abundance in the atmosphere is directly linked to the
          Earth's temperature increase, limiting atmospheric carbon has been
          identified as vital to mitigating global warming. As part of the Kyoto
          Protocol climate convention, scientists have identified 450ppm as a
          good upper limit for carbon concentration in order to keep global
          warming below +2°C. As of {this.props.latestCo2Year}, the atmosphere's
          carbon concentration is {this.props.latestCo2Value}ppm (see fig. 2).
          <Cite name="co2After1958" />
        </p>
        <div css={figureWrapperStyle}>
          <Chart
            type="line"
            series={[
              {
                name: "global carbon",
                data: this.props.co2
              }
            ]}
            options={{
              ...options,
              yaxis: {
                title: {
                  text: "Carbon dioxide concentration in atmosphere"
                }
              },
              xaxis: {
                title: {
                  text: "Year"
                }
              }
            }}
          />
          <strong>
            Figure 2<Cite name="co2After1958" />
            <Cite name="co2Before1958" />
          </strong>
        </div>
        <h2>Effects of global warming</h2>
        <p>
          Global warming will impact a wide range of issues including health,
          livelihoods, food security, water supply, human security, and economic
          growth.
          <Cite name="1.5C" /> The severity of these impacts is determined by
          how hot the Earth gets; reaching 2°C above the pre-industrial average
          would put millions more people at risk than if global warming was
          limited to 1.5°C.
          <Cite name="1.5C" /> Generally speaking, "countries in the tropics and
          Southern Hemisphere subtropics are projected to experience the largest
          impacts on economic growth."
          <Cite name="1.5C" />
        </p>
        <p>
          The UN projects more frequent weather extremes (both heavy rain and
          drought) and temperature extremes due to global warming.
          <Cite name="1.5C" /> The most immediate risk to the environment is the
          dying-off of coral reefs- a process that has already started on a
          large scale (see fig. 3).
        </p>
        <div css={figureWrapperStyle}>
          <img src={risks} alt="risks of climate change" />
          <strong>
            Figure 3<Cite name="guardian" />
            <Cite name="1.5C" />
          </strong>
        </div>
        <h2>Works Cited</h2>
        <RefList />
      </article>
    );
  }
}

export default withRouteData(Home);
