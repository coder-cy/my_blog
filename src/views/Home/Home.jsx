import React from "react";
import NavMask from "../../components/NavMask/NavMask.jsx";
import ProjDetails from "../../components/ProjDetails/ProjDetails.jsx";
import "./Home.scss";
import blackboard from "../../assets/images/blackboard.jpg";
import broadcast0 from "../../assets/images/broadcast0.png";
import service0 from "../../assets/images/service0.png";
import football0 from "../../assets/images/football0.png";

const bgPicList = [
  require("../../assets/images/bg0.png"),
  require("../../assets/images/bg1.jpg"),
  require("../../assets/images/bg2.png"),
  require("../../assets/images/bg3.png"),
  require("../../assets/images/bg4.png"),
  require("../../assets/images/bg5.png"),
  require("../../assets/images/bg6.png"),
  require("../../assets/images/bg7.png")
];
const bgIndexList = [];
for (let i = 0; i < 100; i++) {
  bgIndexList.push(i);
}
const getRandom = (m, n) => {
  return Math.floor(Math.random() * (n - m + 1) + m);
};
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMask: false,
      isShowProjDetails: false,
      h: document.documentElement.clientHeight,
      w: document.documentElement.clientWidth,
      bgPicList,
      bgIndexList,
      curBgIndex: 0,
      isBgBroken: true,
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
          subList: [
            require("../../assets/images/broadcast1.png"),
            require("../../assets/images/broadcast2.png"),
            require("../../assets/images/broadcast3.png"),
            require("../../assets/images/broadcast4.png"),
            require("../../assets/images/broadcast5.png"),
            require("../../assets/images/broadcast6.png"),
          ]
        },
        {
          title: "IM service",
          isShow: false,
          intro: "",
          main: service0,
          subList: [
            require("../../assets/images/service1.png"),
            require("../../assets/images/service2.png"),
            require("../../assets/images/service3.png"),
            require("../../assets/images/service4.png"),
            require("../../assets/images/service5.png"),
            require("../../assets/images/service6.png"),
          ]
        },
        {
          title: "Football games homepage",
          isShow: false,
          intro: "",
          main: football0,
          subList: [
            require("../../assets/images/football1.png"),
            require("../../assets/images/football2.png"),
            require("../../assets/images/football3.png"),
            require("../../assets/images/football4.png"),
            require("../../assets/images/football5.png"),
            require("../../assets/images/football6.png"),
          ]
        }
      ],
      curShowProjPicList: []
    };
  }
  componentDidMount() {
    this.onWindowScroll();
    this.autoPlayBg();
  }
  autoPlayBg() {
    setInterval(() => {
      let curBgIndex = this.state.curBgIndex;
      curBgIndex++;
      if (curBgIndex > bgPicList.length - 1) {
        curBgIndex = 0;
      }
      this.setState({
        curBgIndex,
      });
    }, 15000);
  }
  onWindowScroll() {
    const tar1 = this.state.h - 200;
    const tar2 = this.state.h + 900 - 200;
    window.addEventListener("scroll", () => {
      if (window.scrollY >= tar2) {
        if (!this.state.isBgBroken) {
          // console.log("bottom");
          this.setState({
            isBgBroken: true
          });
        }
      } else if (window.scrollY >= tar1) {
        if (this.state.isBgBroken) {
          // console.log("middle");
          this.setState({
            isBgBroken: false
          });
        }
      } else{
        if (!this.state.isBgBroken) {
          // console.log("top");
          this.setState({
            isBgBroken: true
          });
        }
      }
    });
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
    console.log(index);
    console.log(this.state.projectList);
    this.setState({
      isShowProjDetails: true,
      curShowProjPicList: this.state.projectList[index].subList,
    });
  }
  hideProjDetails() {
    this.setState({
      isShowProjDetails: false
    });
  }
  switchBgPic() {
  }
  render() {
    const defaultStyle = "translate3d(0,0,0) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
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
        <div style={{ backgroundImage: `url(${bgPicList[this.state.curBgIndex]})`, height: this.state.h + "px" }} className="content_block" id="block_1">

        </div>
        <div
          className="content_block"
          // style={{ height: this.state.h + "px" }}
          id="block_2"
        >
          {
            this.state.bgIndexList.map((field, i) => {
              return (
                <div
                  style={{
                    left: this.state.w / 10 * (i % 10) + "px",
                    top: 90 * Math.floor(i / 10) + "px",
                    width: this.state.w / 10 + "px",
                    height: 90 + "px",
                    backgroundImage: `url(${blackboard})`,
                    backgroundPosition: `-${this.state.w / 10 * (i % 10)}px -${90 * Math.floor(i / 10)}px`,
                    transform: this.state.isBgBroken ? `translate3d(${getRandom(500, 1000) * (0.5 - Math.random()) * 2}px,${getRandom(500, 1000) * (0.5 - Math.random()) * 2}px,${getRandom(1000, 2000)}px) rotateX(${getRandom(0, 360)}deg) rotateY(${getRandom(0, 360)}deg) rotateZ(${getRandom(0, 360)}deg)` : defaultStyle,
                    opacity: `${this.state.isBgBroken ? 0 : 1}`,
                  }}
                  key={i}
                  className="bg_field"
                >
                </div>
              );
            })
          }
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
        // style={{ height: this.state.h + "px" }}
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
                          this.showProjDetails(i);
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
