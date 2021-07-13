import React from "react";
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Jumbo = (props) => (
    <Jumbotron fluid className="text-center">
        <Container>
            <h1>Google Books Search</h1>
            <p>Search for and save books of interest!</p>
        </Container>
    </Jumbotron>
);

export default Jumbo;
// import React from "react";

// function Jumbotron({ children }) {
//   return (
//     <div
//       style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//       className="jumbotron"
//     >
//       {children}
//     </div>
//   );
// }

// export default Jumbotron;
