import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: What is The difference between HTML, CSS and Javascript?`}
            >
                HTML, CSS and Javascript are three building blocks of
                content-driven website. HTML stands for HypterText Markup
                Language. HTML uses tags to identify different types of content
                and the purposes they serve on a webpage. HTML pertains to
                content and information, and marks up content to give it
                structure. It is less about appear and how bits of content
                function in relation to each other. It is the foundational
                element of building a website. Tagged elements to define the
                content. CSS stands for Cascading Style Sheets and operates to
                affect the appearance of content. While HTML dictates content
                hierarchy, CSS controls layouts such as fonts, colors and
                background imagery. Javascript allows developers to create
                interactive sites. It is a logic-based language that can modify
                how content behaves in response to user actions. Together with
                HTML and CSS, these languages can build websites in a scalable,
                modular way on in a library such as React.
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between Git and Github?`}
            >
                Git is a free, open source version control tool that developers
                install locally on their own computers, while GitHub is a
                pay-for0use online service built to run Git in the cloud.
                Essentially Git is a piece of software and Github is an online
                Software As A Service owned by Microsoft. They are not
                competitors; in fact, they complement each other. Git enables
                developers to take snapshots of their code at various points in
                time, creating a version history that maps their software
                development process. It is the ultimate version control and
                thereby the ultimate undo. It is a collaborative way to track
                changes. These snapshots (called commits) can be shared with
                developers anywhere in the world. Git was created by Linus
                Torvalds and is maintained by the Linux Foundation. Git is not
                without its flaws and some users find the distributed nature of
                Git difficult to configure. GitHub fills the need for
                organizations that want a single shared repository in their
                cloud that is the central source of truth for their team. One
                benefit of Github is that it offers two-factor authentication so
                that only certain users can access the repository. It also
                provides numerous DevOps tools such as a user-friendly web
                interface, code scanning for vulnerabilities, free website
                hosting and enhanced security.
            </SingleEssay>
            <SingleEssay question={`Q3: Sample question...`}>
                Answer 3 goes here.
            </SingleEssay>
            <SingleEssay question={`Q4: Sample question...`}>
                Answer 4 goes here.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
