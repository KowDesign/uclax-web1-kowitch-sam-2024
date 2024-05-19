import { useState } from "react";
import styled from "styled-components";

// data
import { tabbedData } from "./tabbedData";

// components
import TabContent from "./TabContent";
import TabList from "./TabList/Tablist";

const Tabbed = () => {
    const [curTab, curTabUpdate] = useState(tabbedData[0]);

    return (
        <TabbedStyled>
            <TabList
                tabs={tabbedData}
                curTab={curTab}
                curTabUpdate={curTabUpdate}
            />
            <TabContent curTab={curTab} />
        </TabbedStyled>
    );
};

export default Tabbed;

const TabbedStyled = styled.div``;
