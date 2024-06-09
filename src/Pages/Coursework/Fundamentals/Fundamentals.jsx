import styled from "styled-components";

// Scripts
// import "./scripts/index.js";

// React Components
import ReactComponent from "./ReactComponenet";

const Fundamentals = () => {
    return (
        <FundamentalsStyled>
            <h2>JavaScript Fundamentals</h2>

            <ReactComponent title="The Big Lebowski" />
            <ReactComponent title="The Princess Bride" />
            <ReactComponent title="As Good As It Gets" />
        </FundamentalsStyled>
    );
};

export default Fundamentals;

const FundamentalsStyled = styled.div``;
