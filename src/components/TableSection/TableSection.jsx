import React from "react";
import "./TableSection.css";

const TableSection = () => {
  return (
    <div className="table-container">
      <div className="table-content">
        <h2 className="table-title">Planetary Facts at a Glance</h2>
        <p className="table-description">
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>
      </div>

      <div className="table-wrapper">
        <figcaption className="table-caption">
          Data about the planets of our solar system (Planetary facts taken from
          NASA)
        </figcaption>

        <table className="planetary-table">
          <thead>
            <tr>
              <th colSpan="2"></th>
              <th>Name</th>
              <th>Mass (10 to 24 kg)</th>
              <th>Diameter (km)</th>
              <th>
                Density (kg/m<sup>3</sup>)
              </th>
              <th>
                Gravity (m/s<sup>2</sup>)
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Terrestrial Planets Section */}
            <tr>
              <td rowSpan="4" colSpan="2" className="category-cell terrestrial">
                Terrestrial Planets
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

            {/* Jovian Planets Section */}
            <tr>
              <td rowSpan="4" className="category-cell jovian">
                Jovian Planets
              </td>
              <td rowSpan="2" className="subcategory-cell">
                Gas Giants
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
              <td rowSpan="2" className="subcategory-cell">
                Ice Giants
              </td>
              <td>Uranus</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Neptune</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

            {/* Dwarf Planets Section */}
            <tr>
              <td colSpan="2" className="category-cell dwarf">
                Dwarf Planets
              </td>
              <td>Pluto</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSection;
