import React from "react";
import ProjDetails from "../../components/ProjDetails/ProjDetails.jsx";
import Desktop from "../../components/Desktop/Desktop.jsx";
import "./Home.scss";
import blackboard from "../../assets/images/blackboard.jpg";
import broadcast0 from "../../assets/images/broadcast0.png";
import service0 from "../../assets/images/service0.png";
import football0 from "../../assets/images/football0.png";

const bgList = [
  require("../../assets/images/bg0.jpg"),
  require("../../assets/images/bg1.jpg"),
  require("../../assets/images/bg2.jpg"),
  require("../../assets/images/bg3.jpg"),
  require("../../assets/images/bg4.jpg"),
  require("../../assets/images/bg5.jpg"),
  require("../../assets/images/bg6.jpg"),
  require("../../assets/images/bg7.jpg"),
];

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
            "Tech stack: Vue/TypeScript/React/Redux",
          main: broadcast0,
          subList: [
            {
              src: require("../../assets/images/broadcast1.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me, the pictures are only samples."
                },
                {
                  title: "Intro",
                  content:
                    "This is the broadcast room(PC), including following, charging, watching living vidio, chatting, sending gift and so on."
                }
              ]
            },
            {
              src: require("../../assets/images/broadcast2.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me, the pictures are only samples."
                },
                {
                  title: "Intro",
                  content:
                    "This is the homepage(PC), including hot show selection, square and room searching."
                }
              ]
            },
            {
              src: require("../../assets/images/broadcast3.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me, the pictures are only samples."
                },
                {
                  title: "Intro",
                  content:
                    "This is the homepage(Mobile), including hot show selection and square."
                }
              ]
            },
            {
              src: require("../../assets/images/broadcast4.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me, the pictures are only samples."
                },
                {
                  title: "Intro",
                  content:
                    "This is the userpage(Mobile), including followers, charging, show & modify personal information and so on."
                }
              ]
            },
            {
              src: require("../../assets/images/broadcast5.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me, the pictures are only samples."
                },
                {
                  title: "Intro",
                  content:
                    "This is the broadcast room(Mobile), including following, charging, watching living vidio, chatting, sending gift and so on."
                }
              ]
            },
            {
              src: require("../../assets/images/broadcast6.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me, the pictures are only samples."
                },
                {
                  title: "Intro",
                  content: "This is the broadcast room(Mobile)"
                }
              ]
            }
          ]
        },
        {
          title: "IM service",
          isShow: false,
          intro: "Tech stack: React/Redux",
          main: service0,
          subList: [
            {
              src: require("../../assets/images/service1.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me and the picures are true screenshot of the project."
                },
                {
                  title: "Intro",
                  content:
                    "This is the guest-end terminal, including selection of services, robot query, sumitting form and so on."
                }
              ]
            },
            {
              src: require("../../assets/images/service2.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me and the picures are true screenshot of the project."
                },
                {
                  title: "Intro",
                  content:
                    "This is the chatting function of guest-end, including sending and receiving message that includes text, speech and picture, auto hint-show and so on."
                }
              ]
            },
            {
              src: require("../../assets/images/service3.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me and the picures are true screenshot of the project."
                },
                {
                  title: "Intro",
                  content:
                    "This is the chatting function of guest-end, same as above."
                }
              ]
            },
            {
              src: require("../../assets/images/service4.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me and the picures are true screenshot of the project."
                },
                {
                  title: "Intro",
                  content:
                    "This is the score function, which means the user can submit his attitude towards ther service."
                }
              ]
            },
            {
              src: require("../../assets/images/service5.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me and the picures are true screenshot of the project."
                },
                {
                  title: "Intro",
                  content:
                    "This is the sevice-end terminal, including multiple chatting, recording content, transferring to others and so on."
                }
              ]
            },
            {
              src: require("../../assets/images/service6.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me and the picures are true screenshot of the project."
                },
                {
                  title: "Intro",
                  content: "This is the login page, including login function,"
                }
              ]
            }
          ]
        },
        {
          title: "Football games homepage",
          isShow: false,
          intro: "Tech stack: Vue/TypeScript",
          main: football0,
          subList: [
            {
              src: require("../../assets/images/football1.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "Only user-favorite and sound-play modules were developed by me and the picures are true screenshot of the project."
                },
                {
                  title: "Intro",
                  content:
                    "This is the game score page, including living score-change, sound-play, user-favorite and so on."
                }
              ]
            },
            {
              src: require("../../assets/images/football2.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "Only chatting module was developed by me and the picures are true screenshot of the project."
                },
                {
                  title: "Intro",
                  content:
                    "This is the living game page, including chatting, formation display and information broadcast."
                }
              ]
            },
            {
              src: require("../../assets/images/football3.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me and the picures are true screenshot of the project."
                },
                {
                  title: "Intro",
                  content:
                    "This is the football library page, including a 3F tree selection, a carousel and a league-displayed block which allows user to select by initial of name."
                }
              ]
            },
            {
              src: require("../../assets/images/football4.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me and the picures are true screenshot of the project."
                },
                {
                  title: "Intro",
                  content:
                    "This is the league details page of league class, including display of information, selecting by season and round, query pts-ranking and so on."
                }
              ]
            },
            {
              src: require("../../assets/images/football5.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "All of modules were developed by me and the picures are true screenshot of the project."
                },
                {
                  title: "Intro",
                  content:
                    "This is the league details page of cup class, including display of information, selecting by season and round, query pts-ranking and so on."
                }
              ]
            },
            {
              src: require("../../assets/images/football6.png"),
              details: [
                {
                  title: "Module",
                  content:
                    "Only comment module was developed by me and the picures are true screenshot of the project."
                },
                {
                  title: "Intro",
                  content:
                    "This is the game news page, including display of news, comment and so on."
                }
              ]
            }
          ]
        }
      ],
      curShowProjPicList: [],
      curMainInfo: "",
      curBgIndex: 0,
    };
  }
  componentDidMount() {
    this.onWindowScroll();
    this.initScreen();
  }
  initScreen() {
    window.addEventListener("resize", () => {
      this.setState({
        w: document.documentElement.clientWidth,
      });
    })
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
      } else if (window.scrollY >= tar1) {
        if (this.state.isBgBroken) {
          this.setState({
            isBgBroken: false
          });
        }
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
      curMainInfo: this.state.projectList[index].intro,
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
      curBgIndex,
    });
  }
  render() {
    return (
      <main id="home_container">
        <div
          style={{
            backgroundImage: `url(${require(`../../assets/images/bg${this.state.curBgIndex}.jpg`)})`,
            height: this.state.h + "px",
            opacity: this.state.isShowProjDetails ? '0.2' : '1',
          }}
          className="content_block"
          id="block_1"
        >
          <Desktop switchBg={this.switchBg.bind(this)} />
        </div>
        <div
          className="content_block"
          style={{opacity: this.state.isShowProjDetails ? '0.2' : '1'}}
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
                        getRandomDir()}px,${getRandom(1000, 1500)}px) rotateX(${getRandom(
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
            <div style={{color: this.state.isBgBroken ? '#000' : '#fff'}} className="about_me">ABOUT ME</div>
            <p style={{color: this.state.isBgBroken ? '#000' : '#fff'}}>
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
                    <dl style={{color: this.state.isBgBroken ? '#000' : '#fff'}}>
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
          style={{opacity: this.state.isShowProjDetails ? '0.2' : '1'}}
        >
          <div style={{opacity: this.state.isBgBroken ? '1' : '0'}} className="project_title">
            <div>MY LATEST WORK</div>
            <p>
              A selection of recent projects I've been working on, which
              includes homepage, responsive mobile WebApp, IM WebApp, CMS,
              broadcasting-show website and so on.
            </p>
          </div>
          <div style={{opacity: this.state.isBgBroken ? '1' : '0'}} className="project_details">
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
