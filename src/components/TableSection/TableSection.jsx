import React from "react";
import "./TableSection.css";

export default function TableSection({ title, children }) {
  return (
    // <div className="table-section">
    //   <h2>{title}</h2>
    //   <div className="table-content">
    //     {children}
    //   </div>

    // </div>

    <div className="table-section">
      <h2 className="table-title">Planetary Facts at a Glance</h2>
      <br />
      <p className="table-description">
        Below is a comparative table of major planets in our solar system. The
        data highlights key <br />
        physical properties used by astronomers and researchers worldwide.
      </p>
      <div className="table-content">
        <br />
        <figcaption className="table-caption">
          <b>
                Data about the planets of our solar system (Planetary facts taken
                from Nasa)
            </b>
        </figcaption>
        <br />
        <table
          className="planet-table"
        //   border="1"
        //   cellpadding="10"
        //   cellspacing="0"
        //   width="95%"
        //   align="center"
        >
          <thead>
            <tr>
              <th colspan="2"></th>
              <th>Name</th>
              <th>Mass (10 24kg)</th>
              <th>Diameter (km)</th>
              <th>Density (kg/m3)</th>
              <th>Gravity (m/s2)</th>
            </tr>
          </thead>
          <tbody>
            <div className="table-body">
              <tr>
                <td
                //   rowspan="4"
                //   colspan="2"
                //   align="center"
                >
                  <b>Terrestrial Planets</b>
                </td>
                <td>Mercury</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Venus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Earth</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Mars</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td rowspan="4" align="center">
                  <b>Jovian Planets</b>
                </td>
                <td rowspan="2" align="center">
                  <b>Gas Giants</b>
                </td>
                <td>Jupiter</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Saturn</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td rowspan="2" align="center">
                  <b>Ice Giants</b>
                </td>
                <td align="center">Uranus</td>
                <td align="center">0.330</td>
                <td align="center">4,878</td>
                <td align="center">5427</td>
                <td align="center">3.7</td>
              </tr>
              <tr>
                <td align="center">Neptune</td>
                <td align="center">0.330</td>
                <td align="center">4,878</td>
                <td align="center">5427</td>
                <td align="center">3.7</td>
              </tr>

              <tr>
                <td colspan="2" align="center">
                  <b>Dwarf Planets</b>
                </td>
                <td align="center">Pluto</td>
                <td align="center">0.330</td>
                <td align="center">4,878</td>
                <td align="center">5427</td>
                <td align="center">3.7</td>
              </tr>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
}
