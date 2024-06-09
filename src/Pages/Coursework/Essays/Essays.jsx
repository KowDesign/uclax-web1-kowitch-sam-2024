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
            <SingleEssay
                question={`What is the difference between JQuery and React?`}
            >
                JQuery is a utility library, which streamlines web app
                development by facilitating JavaScript use. React operates as a
                library that enables the embedding of HTML within Javascript.
                JQuery was invented in 2006 and greatly expanded use of
                Javascript. The goal of JQuery was to simplify intricate
                Javascript tasks, such as DOM manipulation and AJAX operations.
                Key features of JQuery include effects and animation, HTML and
                Document Object Model manipulation, CSS manipulation, JSON
                parsing, Utilities, HTML Event Methods and AJAX. React was
                developed by Facebook in 2011. React is and open-source,
                efficient and declarative Javascript library. React is geared
                towards creating interactive UI elements. It changed the game by
                providing reusable modular code components. This enables
                developers to enhance code organization and maintainability. It
                also utilizes a Virtual DOM to optimize rendering, uses JSX, a
                syntax extension for Javascript to express UI components more
                declaratively and intuitively. React also makes it easier to
                develop Single Page Apps (SPAs). In general it makes apps more
                scalable.
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between a front-end and back-end developer?`}
            >
                Front-end developers focus on the visual aspects of a website -
                the part that users see and interact with. They translate
                designs to interactive layouts. Back-end development comprises a
                site's structure, system, data, and logic. They work behind the
                scenes, handling data on the web server, database management,
                security, requests and responses. It serves the content to the
                browser. Front-end developers code primarily in JavaScript,
                HTML, and CSS, whereas Back-end developers operate mostly in
                python, Java, Ruby and PHP. They also differ in the frameworks
                and libraries they commonly use. Front-enders typically use
                jQuery, AngularJS, SASS, Bootstrap, and EmberJS while Back-end
                devs use Django, Lavarel, Spring, Zend, Symphony and CakePHP.
                Both types of developers work with management and business
                stakeholders. Together, the two disciplines comprise Full Stack
                Development.
            </SingleEssay>
            <SingleEssay
                question={`In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                An absolute, or full, path begins with a drive letter followed
                by a colon, such as D:. whereas a relative path refers to a
                location that is relative to a current directory. Relative paths
                make use of two special symbols, a dot (.) and a double dot
                (..), which translate into the current directory and the parent
                directory. Double dots are used for moving up in the hierarchy.
                Using absolute paths, the following are true: You can move the
                document or toolbox anywhere on your computer and the data will
                be found when you reopen the document or tool. On most personal
                computers, the location of data is usually constant. That is,
                you don't often move your data on your personal computer. In
                such cases, absolute paths are preferred. You can reference data
                on other disk drives. Using relative paths, these adjustments
                are necessary: When moving a map document or toolbox, you must
                also move the referenced data. When delivering documents,
                toolboxes, and data to another user, relative paths should be
                used. Otherwise, the recipient's computer must have the same
                directory structure as yours. For example, consider the
                directory structure below. In this example,
                D:\Tools\Toolboxes\Toolbox1 contains a script tool that uses
                D:\Tools\Scripts\MyScript.py. Root Relative paths start from the
                root folder of the site/app. Its strength is that you can use it
                anywhere. It is absolute and will always come from the source.
                Document relative start from the current file’s location,
                strength would be flexibility/portability. Both paths are
                writing instructions for the app to find a resource.
                <SingleEssay
                    question={`What is the difference between jpg, gif, png and svg images?`}
                >
                    JPG, GIFF, PNG and SVG are the four primary image formats
                    used online. The ideal format depends on how the image will
                    be used. JPG stands for Joint Photographic Experts Group and
                    was created in 1986. The pros of this format are that it
                    takes up little storage space and is quick to up or
                    download. JPG is often the default format for digital
                    cameras and smartphones and for uploading to the web,
                    however, when compressed unnecessary information is
                    permanently deleted from JPG formats. JPG is the only
                    bit-format that offers high fidelity compression. It does
                    not offer animation or transparency. GIF stands for Graphics
                    Interchange Format, invented in 1987. GIFs retain all data
                    contained in the file, but they are smaller than JPGs
                    because they only accommodate 256 indexed colors. GIFs were
                    intended for small graphic icons, but with the caveat that
                    they can be animated sans audio. PNG stands for Portable
                    Network Graphics and was invented in 1995 to replace GIF and
                    get around patent protections. PNGs are best suited for more
                    complex images as long as file size is not a pain point.
                    PNG-8 can support 256 indexed colors, like GIF, whereas
                    PNG-2 can support 16 million colors. PNGs are most commonly
                    used for static images but can support animation. PNGs are
                    lossless and retain all contained data during compression.
                    This is the only raster format of the four that supports
                    transparency – Alpha 4 channels rgbA. SVG stands for
                    Scalable Vector Graphics. Released in 2001, the latest image
                    format is a vector image file which remains crisp and clear
                    at any resolution or size. This is because SVG is drawn from
                    mathematically declared shapes and curves, not pixels. SVGs
                    can be animated, support transparency, and any combination
                    of color or gradient. SVG is lossless and retains all data,
                    though it tends to make for a fairly large file compared to
                    other formats.
                </SingleEssay>
                <SingleEssay
                    question={`Define the following Agile roles: Product Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps.`}
                >
                    Product Manager: The product manager is responsible for
                    developing a product’s goals, strategy, and roadmap. The
                    person in this outward-facing role performs market studies
                    and evaluates customer requirements. Because of this
                    emphasis, the product manager should possess domain-specific
                    knowledge. Often times they are a conduit between the
                    product team and the customer. Scrum Master: The Scrum
                    master guides and mentors the development team, helping
                    members adhere to the Scrum framework and norms. This person
                    is commonly described as a servant-leader: They facilitate
                    the development team’s work and self-organization but do not
                    act in an official leadership role. Their foundational
                    knowledge of the structure and flow of Scrum is crucial to
                    the team’s success. UX Designer: The job of the UX Designer
                    is to do customer research (and empathize), share insights
                    from that research with the Product Team, identify customer
                    needs and pain points, ideate to find solutions with the
                    Product Team, prototype ideas, test them with real users,
                    learn from mistakes, and then ship a product or a solution
                    and keep improving. Developer/Engineer: In Agile software
                    development, developers have many roles, including: building
                    the product, programming, testing, and debugging the product
                    and producing high-quality code. Developers must adhere to
                    coding standards, best practices, and design principles to
                    create code that is readable, maintainable, testable,
                    secure, and performs well while delivering work through the
                    sprint. Developers work as part of a self-organizing team to
                    finish sprints on time as communicated by the scrum master.
                    They may also break down work into smaller pieces to refine
                    the backlog. Developers need to have excellent team skills
                    and be open to other people's ideas. They may also need to
                    be courageous enough to bring up conflicts and work to
                    resolve them together. QA/SDET: An SDET (Software
                    Development Engineer in Test) plays a crucial role in agile
                    environments by working closely with the development team to
                    ensure that the delivered software is of high quality and
                    meets the client’s requirements. In an agile environment,
                    the SDET works as part of a cross-functional team, which
                    includes developers, product managers, and other
                    stakeholders, to ensure that the software is being developed
                    and tested efficiently and effectively. One of the critical
                    responsibilities of an SDET in an agile environment is to
                    help the development team define and implement automated
                    testing strategies. This includes creating automated test
                    scripts, test suites, and test frameworks that can quickly
                    and efficiently test the software as it is being developed.
                    The SDET also helps the team identify and fix bugs and
                    defects in the software and works with the team to ensure
                    that the software meets the customer’s requirements. Another
                    critical role of the SDET in an agile environment is to help
                    the team continuously improve its software development and
                    testing processes. This includes identifying areas for
                    improvement, implementing new tools and technologies, and
                    working with the team to improve the quality and performance
                    of the software constantly. DevOps: DevOps bridges the gap
                    between development and operations teams. It encourages
                    cross-functional collaboration and communication to ensure a
                    smooth and uninterrupted software delivery pipeline. This
                    synchronization eliminates bottlenecks, accelerates
                    decision-making, and leads to more efficient project
                    management.
                </SingleEssay>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
