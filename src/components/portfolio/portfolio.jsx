import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Ass1 from "../../assets/portfolio/ass01.png";
import Ass2 from "../../assets/portfolio/ass02.png";
import Ass3 from "../../assets/portfolio/ass03.png";
import Ass4 from "../../assets/portfolio/ass04.png";
import Proj1 from "../../assets/portfolio/p1.png";
import Proj2 from "../../assets/portfolio/p2.png";
import Proj3 from "../../assets/portfolio/p3.png";
import Site1 from "../../assets/portfolio/s1.png";
import Site2 from "../../assets/portfolio/s2.png";

import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Ass1,
          title: (
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://ic-gbooks.herokuapp.com/"
            >
              G-books React Search
            </a>
          ),
          tag: "assignments",
        },
        {
          id: "2",
          preview: Proj3,
          title: (
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://ic-smacklab.herokuapp.com"
            >
              SMVCKLVB
            </a>
          ),
          tag: "projects",
        },
        {
          id: "3",
          preview: Ass3,
          title: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ichoi21.github.io/HWK16/"
            >
              Rand. User Directory
            </a>
          ),
          tag: "assignments",
        },
        {
          id: "4",
          preview: Site1,
          title: (
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://www.illiest.com"
            >
              illiest
            </a>
          ),
          tag: "web",
        },
        {
          id: "5",
          preview: Ass4,
          title: (
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://ichoi21.github.io/HWK06/"
            >
              Weather Dashboard App
            </a>
          ),
          tag: "assignments",
        },
        {
          id: "6",
          preview: Proj1,
          title: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ichoi21.github.io/CSSearch/home.html"
            >
              CSS (Coffee Shop Search)
            </a>
          ),
          tag: "projects",
        },
        {
          id: "7",
          preview: Proj2,
          title: (
            <a
              href="https://ic-shoequelize.herokuapp.com/"
              target="blank"
              rel="noopener noreferrer"
              s
            >
              Shoequelize
            </a>
          ),
          tag: "projects",
        },
        {
          id: "8",
          preview: Ass2,
          title: (
            <a target="blank" href="https://ichoi21.github.io/HWK05/">
              Day Planner
            </a>
          ),
          tag: "assignments",
        },
        {
          id: "9",
          preview: Site2,
          title: (
            <a href="https://www.calpacificsystems.com" target="blank">
              Cal Pacific Systems
            </a>
          ),
          tag: "web",
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "newest",
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({
      filterResult: result,
      pickedFilter: target,
      pickedFilterDropdown: "newest",
    });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if (event) {
      this.setState({ filterMenuActive: true });
    } else {
      this.setState({ filterMenuActive: false });
    }
  };

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "newest") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (filter === "oldest") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result });
  };

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox
          preview={project.preview}
          key={project.id}
          title={project.title}
          tag={project.tag}
        />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDD = null;
    if (this.state.filterMenuActive) {
      filterDD = (
        <div className="portSort-menu shadow">
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("newest")}
          >
            newest
          </p>
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("oldest")}
          >
            oldest
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="showcase." />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portNav">
                <ul>
                  <li
                    className={
                      this.state.pickedFilter === "all"
                        ? "portNav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("all")}
                  >
                    all
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "assignments"
                        ? "portNav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("assignments")}
                  >
                    assignments
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "projects"
                        ? "portNav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("projects")}
                  >
                    projects
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "web"
                        ? "portNav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("web")}
                  >
                    web
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div className="portSort" s>
                <p className="font12 lowercase">
                  sort by {this.state.pickedFilterDropdown}
                </p>
                <img src={Arrow} alt="arrow" />
                {filterDD}
              </div>
            </Col>
          </Row>
          <Masonry
            breakpointCols={portfolioBreakpoints}
            className="my-masonry-grid"
            columnClassName="gallery"
          >
            {projectsRender}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default Portfolio;
