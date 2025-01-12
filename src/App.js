import "./App.css";
import React from "react";
import PDFFile from "./components/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const App = () => {
  const pdfProps = {
    numar: "54",
    prestator: "Vasile Aurel",
    resedinta: "Cuca Macaii",
    codPostal: "345263",
    telefon: "072843235",
    cui: "42117031",
    suma: "1200 Euro",
    text_semnatura_prestator: "semnatura prestatorului",
  };

  return (
    <div className="App">
      <PDFDownloadLink
        document={<PDFFile {...pdfProps} />}
        filename={`Invoice_${pdfProps.numar}.pdf`}
      >
        {({ loading, error }) => {
          if (error) {
            console.error("An error occurred while rendering the PDFDownloadLink:", error);
            return <p style={{ color: "red" }}>Failed to generate the PDF. Please try again later.</p>;
          }

          return loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download PDF</button>
          );
        }}
      </PDFDownloadLink>
    </div>
  );
};

PDFFile.propTypes = {
  numar: PropTypes.string,
  prestator: PropTypes.string,
  resedinta: PropTypes.string,
  codPostal: PropTypes.string,
  telefon: PropTypes.string,
  cui: PropTypes.string,
  suma: PropTypes.string,
  text_semnatura_prestator: PropTypes.string,
};

export default App;
