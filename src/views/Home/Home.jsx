import React from "react";
import ProjDetails from "../../components/ProjDetails/ProjDetails.jsx";
import Desktop from "../../components/Desktop/Desktop.jsx";
import "./Home.scss";
import blackboard from "../../assets/images/blackboard.jpg";
import broadcast0 from "../../assets/images/broadcast0.png";
import service0 from "../../assets/images/service0.png";
import football0 from "../../assets/images/football0.png";

const bgIndexList = [];
for (let i = 0; i < 100; i++) {
  bgIndexList.push(i);
}
const getRandom = (m, n) => {
  return Math.floor(Math.random() * (n - m + 1) + m);
};
const getRandomDir = () => {
  return [-1, 1][getRandom(0, 1)];
};
const defaultStyle =
  "translate3d(0,0,0) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowProjDetails: false,
      h: document.documentElement.clientHeight,
      w: document.documentElement.clientWidth,
      bgIndexList,
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
          intro:
            "PepperTv.com. The pictures are only samples because the company broke.",
          main: broadcast0,
          subList: [
            {
              src: require("../../assets/images/broadcast1.jpg"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "React.js + React-router + Redux + Webpack",
                    "Common AJAX",
                    "Websocket service",
                    "Videojs + RTMP/HLS"
                  ]
                },
                {
                  title: "Profile",
                  content: [
                    "Follow broadcaster.",
                    "Charge.",
                    "Watch living video.",
                    "Chat online.",
                    "Send gift.",
                    "Barrage on video."
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/broadcast2.jpg"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "React.js + React-router + Redux + Webpack",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: [
                    "Selection and Preview of hot broadcast show.",
                    "Search room by broadcast id."
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/broadcast3.jpg"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "Vue.js + Vue-router + Vuex + Webpack",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: [
                    "(Mobile) Selection and Preview of hot broadcast show"
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/broadcast4.jpg"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "Vue.js + Vue-router + Vuex + Webpack",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: ["Display / Modify user information.", "Charge."]
                }
              ]
            },
            {
              src: require("../../assets/images/broadcast5.jpg"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "Vue.js + Vue-router + Vuex + Webpack",
                    "Websocket service",
                    "Vue-video-player"
                  ]
                },
                {
                  title: "Profile",
                  content: [
                    "Follow broadcaster.",
                    "Charge.",
                    "Watch living video.",
                    "Chat online.",
                    "Send gift.",
                    "Barrage on video."
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/broadcast6.jpg"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "Vue.js + Vue-router + Vuex + Webpack",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: ["Shopping mall.", "Purchase."]
                }
              ]
            }
          ]
        },
        {
          title: "IM service",
          isShow: false,
          intro: "A B2B project. The pictures are real screenshot.",
          main: service0,
          subList: [
            {
              src: require("../../assets/images/service1.jpg"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: ["React.js + Redux + Webpack", "Common AJAX"]
                },
                {
                  title: "Profile",
                  content: [
                    "Selection of services.",
                    "Auto query and answer.",
                    "Submit query form."
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/service2.jpg"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "React.js + Redux + Webpack",
                    "Websocket service",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: [
                    "Guest-end.",
                    "Chatting with serval types of message: text, speech, image, file, video.",
                    "Auto hint."
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/service3.jpg"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "React.js + Redux + Webpack",
                    "Websocket service",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: ["Guest-end.", "Same as previous."]
                }
              ]
            },
            {
              src: require("../../assets/images/service4.jpg"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: ["React.js + Redux + Webpack", "Common AJAX"]
                },
                {
                  title: "Profile",
                  content: [
                    "Guest-end.",
                    "This is the score module that user can send attitude towards the service."
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/service5.png"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "React.js + React-route + Redux + Webpack",
                    "Websocket service",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: [
                    "Service-end.",
                    "Multiple chatting with serval types of message: text, speech, image, file, video.",
                    "Record chat history.",
                    "Transfer to other server."
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/service6.png"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "React.js + React-router + Redux + Webpack",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: ["Service-end.", "Login and verify."]
                }
              ]
            }
          ]
        },
        {
          title: "Football games homepage",
          isShow: false,
          intro: "Runxtv.com. The pictures are real screenshot.",
          main: football0,
          subList: [
            {
              src: require("../../assets/images/football1.png"),
              details: [
                {
                  title: "My module",
                  content: ["User favorite", "Sound play"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "Vue.js + Vue-router + Vuex + TypeScript + Webpack",
                    "Websocket service",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: [
                    "Living game data update.",
                    "Animation and sound-play when any teams score.",
                    "User favorite allows to own different collections between login and unlogin status."
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/football2.png"),
              details: [
                {
                  title: "My module",
                  content: ["Chatting"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "Vue.js + Vue-router + Vuex + TypeScript + Webpack",
                    "Websocket service",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: [
                    "Display and update of living game information.",
                    "Chatting."
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/football3.png"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "Vue.js + Vue-router + Vuex + TypeScript + Webpack",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: [
                    "League Lib",
                    "3F Tree selection of all professional leagues on the world.",
                    "Carousel of hot leagues, which allows to be swipered.",
                    "Display of all leagues, which allows to be filterd by type and initial of league name."
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/football4.png"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "Vue.js + Vue-router + Vuex + TypeScript + Webpack",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: [
                    "(Cup)Display of league information, pts ranking and game schedule.",
                    "(Cup)Selection of season and round and fetch the living data."
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/football5.png"),
              details: [
                {
                  title: "My module",
                  content: ["All"]
                },
                {
                  title: "Tech stack",
                  content: [
                    "Vue.js + Vue-router + Vuex + TypeScript + Webpack",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: [
                    "(League)Display of league information, pts ranking and game schedule.",
                    "(League)Selection of season and round and fetch the living data."
                  ]
                }
              ]
            },
            {
              src: require("../../assets/images/football6.png"),
              details: [
                {
                  title: "My module",
                  content: ["User comment."]
                },
                {
                  title: "Tech stack",
                  content: [
                    "Vue.js + Vue-router + Vuex + TypeScript + Webpack",
                    "Common AJAX"
                  ]
                },
                {
                  title: "Profile",
                  content: [
                    "Display of game news.",
                    "User comment with both login and unlogin."
                  ]
                }
              ]
            }
          ]
        }
      ],
      curShowProjPicList: [],
      curMainInfo: "",
      curBgIndex: 0
    };
  }
  componentDidMount() {
    this.onWindowScroll();
    this.initScreen();
  }
  initScreen() {
    window.addEventListener("resize", () => {
      this.setState({
        w: document.documentElement.clientWidth
      });
    });
  }
  onWindowScroll() {
    const tar1 = this.state.h - 200;
    const tar2 = this.state.h + 900 - 200;
    window.addEventListener("scroll", () => {
      if (window.scrollY >= tar2) {
        if (!this.state.isBgBroken) {
          this.setState({
            isBgBroken: true
          });
        }
        // this.pauseVideo();
      } else if (window.scrollY >= tar1) {
        if (this.state.isBgBroken) {
          this.setState({
            isBgBroken: false
          });
        }
        // this.pauseVideo();
      } else {
        if (!this.state.isBgBroken) {
          this.setState({
            isBgBroken: true
          });
        }
      }
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
      isShowProjDetails: true,
      curShowProjPicList: this.state.projectList[index].subList,
      curMainInfo: this.state.projectList[index].intro
    });
  }
  hideProjDetails() {
    this.setState({
      isShowProjDetails: false
    });
  }
  switchBg() {
    let { curBgIndex } = this.state;
    curBgIndex++;
    if (curBgIndex > 7) {
      curBgIndex = 0;
    }
    this.setState({
      curBgIndex
    });
  }
  render() {
    return (
      <main id="home_container">
        <div
          style={{
            backgroundImage: `url(${require(`../../assets/images/bg${
              this.state.curBgIndex
            }.jpg`)})`,
            height: this.state.h + "px",
            opacity: this.state.isShowProjDetails ? "0.2" : "1"
          }}
          className="content_block"
          id="block_1"
        >
          <Desktop switchBg={this.switchBg.bind(this)} />
        </div>
        <div
          className="content_block"
          style={{ opacity: this.state.isShowProjDetails ? "0.2" : "1" }}
          id="block_2"
        >
          {this.state.bgIndexList.map((field, i) => {
            return (
              <div
                style={{
                  left: (this.state.w / 10) * (i % 10) + "px",
                  top: 90 * Math.floor(i / 10) + "px",
                  width: this.state.w / 10 + "px",
                  height: 90 + "px",
                  backgroundImage: `url(${blackboard})`,
                  backgroundPosition: `-${(this.state.w / 10) *
                    (i % 10)}px -${90 * Math.floor(i / 10)}px`,
                  transform: this.state.isBgBroken
                    ? `translate3d(${getRandom(1000, 1500) *
                        getRandomDir()}px,${getRandom(1000, 1500) *
                        getRandomDir()}px,${getRandom(
                        1000,
                        1500
                      )}px) rotateX(${getRandom(
                        0,
                        360
                      )}deg) rotateY(${getRandom(
                        0,
                        360
                      )}deg) rotateZ(${getRandom(0, 360)}deg)`
                    : defaultStyle,
                  opacity: `${this.state.isBgBroken ? 0 : 1}`
                }}
                key={i}
                className="bg_field"
              />
            );
          })}
          <div className="self_intro">
            <div
              style={{ color: this.state.isBgBroken ? "#000" : "#fff" }}
              className="about_me"
            >
              ABOUT ME
            </div>
            <p style={{ color: this.state.isBgBroken ? "#000" : "#fff" }}>
              My name is Yang Tsai from Shanghai China, I've been working as a
              front-end developer for 3 years in Shanghai. By scanning this
              website you can get my details such as my teck-stack, education
              background and project experience. I love coding, which may be one
              of the most fantastic jobs in my thought.
            </p>
          </div>
          <div className="self_skill">
            <ul>
              {this.state.skillList.map((skill, i) => {
                return (
                  <li key={i}>
                    <dl
                      style={{ color: this.state.isBgBroken ? "#000" : "#fff" }}
                    >
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
          style={{ opacity: this.state.isShowProjDetails ? "0.2" : "1" }}
        >
          <div
            style={{ opacity: this.state.isBgBroken ? "1" : "0" }}
            className="project_title"
          >
            <div>MY LATEST WORK</div>
            <p>
              A selection of recent projects I've been working on, which
              includes homepage, responsive mobile WebApp, IM WebApp, CMS,
              broadcasting-show website and so on.
            </p>
          </div>
          <div
            style={{ opacity: this.state.isBgBroken ? "1" : "0" }}
            className="project_details"
          >
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
                    <div
                      className={["mask", project.isShow ? "show" : ""].join(
                        " "
                      )}
                    >
                      <span
                        className="mask_btn"
                        onClick={() => {
                          this.showProjDetails(i);
                        }}
                      >
                        More...
                      </span>
                    </div>
                  </dd>
                );
              })}
            </dl>
          </div>
          <div className="footer">copyright © Yang Tsai 2019. </div>
        </div>
        <ProjDetails
          isShowProjDetails={this.state.isShowProjDetails}
          curShowProjPicList={this.state.curShowProjPicList}
          curMainInfo={this.state.curMainInfo}
          hideProjDetails={() => {
            this.hideProjDetails();
          }}
        />
      </main>
    );
  }
}
export default Home;
