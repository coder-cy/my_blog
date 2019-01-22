import React from "react";
import NavMask from "../../components/NavMask/NavMask.jsx";
import ProjDetails from "../../components/ProjDetails/ProjDetails.jsx";
import "./Home.scss";
import bg0 from "../../assets/images/bg0.jpg";
import broadcast0 from "../../assets/images/broadcast0.png";
import service0 from "../../assets/images/service0.png";
import football0 from "../../assets/images/football0.png";

// import
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMask: false,
      isShowProjDetails: false,
      h: 0,
      skillList: [
        {
          title: "Basical Skills",
          contentList: ["HTML5", "CSS3", "JavaScript", "Sass", "TypeScript"]
        },
        {
          title: "Development Skills",
          contentList: [
            "React.js & Redux",
            "Vue.js & Vuex",
            "Webpack",
            "Node.js",
            "jQuery"
          ]
        },
        {
          title: "Extra Skills",
          contentList: [
            "Java Web",
            "MYSQL",
            "PhotoShop",
            "Responsive Design",
            "Git"
          ]
        }
      ],
      projectList: [
        {
          title: "Broadcast show",
          isShow: false,
          intro: "",
          main: broadcast0,
          subList: []
        },
        {
          title: "IM service project",
          isShow: false,
          intro: "",
          main: service0,
          subList: []
        },
        {
          title: "Football Games homepage",
          isShow: false,
          intro: "",
          main: football0,
          subList: []
        }
      ],
      curShowProjPicList: []
    };
  }
  componentDidMount() {
    this.foo();
    this.initHeight();
  }
  foo() {
    console.log(this.props);
    this.props.fetchSliderImg();
  }
  initHeight() {
    this.setState({
      h: document.documentElement.clientHeight
    });
    // window.addEventListener('resize', () => {
    //     this.setState({
    //       h: document.documentElement.clientHeight
    //     });
    // });
  }
  showNavMask() {
    this.setState({
      isShowMask: !this.state.isShowMask
    });
  }
  toggleProjMask(index, type) {
    const projectList = this.state.projectList.map((project, i) => {
      if (i === index) {
        return {
          ...project,
          isShow: type === 1
        };
      }
      return project;
    });
    this.setState({
      projectList
    });
  }
  showProjDetails(index) {
    this.setState({
      isShowProjDetails: true
    });
  }
  hideProjDetails() {
    this.setState({
      isShowProjDetails: false
    });
  }
  render() {
    return (
      <main id="home_container">
        <div
          onClick={() => {
            this.showNavMask();
          }}
          id="nav_btn"
        >
          <span className={this.state.isShowMask ? "x1" : ""} />
          <span className={this.state.isShowMask ? "hide" : ""} />
          <span className={this.state.isShowMask ? "x2" : ""} />
        </div>
        <div
          style={{
            backgroundImage: "url(" + bg0 + ")",
            height: this.state.h + "px"
          }}
          className="content_block"
          id="block_1"
        />
        <div
          className="content_block"
          style={{ height: this.state.h + "px" }}
          id="block_2"
        >
          <div className="self_intro">
            <div className="about_me">ABOUT ME</div>
            <p>
              My name is Yang Tsai from Shanghai China, I've been working as a
              front-end developer for 3 years in Shanghai. To achieve my dream I
              decide to have a new beginning in Germany, I mean, both in life
              and career. I speak English fluently, meanwhile I'm a person who
              love to talk ,easy going with and learning German strenuously. I
              love coding, which may be one of the most fantastic jobs in my
              thought.
            </p>
          </div>
          <div className="self_skill">
            <ul>
              {this.state.skillList.map((skill, i) => {
                return (
                  <li key={i}>
                    <dl>
                      <dt>{skill.title}</dt>
                      {skill.contentList.map((content, j) => {
                        return <dd key={j}>{content}</dd>;
                      })}
                    </dl>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          className="content_block"
          id="block_3"
          style={{ height: this.state.h + "px" }}
        >
          <div className="project_title">
            <div>MY LATEST WORK</div>
            <p>
              A selection of recent projects I've been working on, which
              includes homepage, responsive mobile WebApp, IM WebApp, CMS,
              broadcasting-show website and so on.
            </p>
          </div>
          <div className="project_details">
            <dl>
              {this.state.projectList.map((project, i) => {
                return (
                  <dd
                    style={{ backgroundImage: `url(${project.main})` }}
                    key={i}
                    onMouseOut={() => {
                      this.toggleProjMask(i, 0);
                    }}
                    onMouseOver={() => {
                      this.toggleProjMask(i, 1);
                    }}
                  >
                    <span className="proj_title">{project.title}</span>
                    <span className="proj_intro">{project.intro}</span>
                    <div
                      className={["mask", project.isShow ? "show" : ""].join(
                        " "
                      )}
                    >
                      <span className="mask_details">Details</span>
                      <span
                        className="mask_btn"
                        onClick={() => {
                          this.showProjDetails();
                        }}
                      >
                        Click here
                      </span>
                    </div>
                  </dd>
                );
              })}
            </dl>
          </div>
        </div>
        <NavMask isShowMask={this.state.isShowMask} />
        <ProjDetails
          isShowProjDetails={this.state.isShowProjDetails}
          curShowProjPicList={this.state.curShowProjPicList}
          hideProjDetails={() => {
            this.hideProjDetails();
          }}
        />
      </main>
    );
  }
}
export default Home;
