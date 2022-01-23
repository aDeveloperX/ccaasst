import "./App.css";
import ResponsiveAppBar from "./components/Appbar/Appbar";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Carousel from "./components/Carousel/Carousel";
import ContentArea from "./components/ContentArea/ContentArea";
import Footer from "./components/Footer/Footer";
import ImageCards from "./components/ImageCard/ImageCards";
import MainRoute from "./components/Routes/MainRoute";

function App() {
  const buttonData = [
    {
      onClick: () => {
        console.log("test1");
      },
      text: "Antarctic",
    },
    {
      onClick: () => {
        console.log("test1");
      },
      text: "Remote",
    },
    {
      onClick: () => {
        console.log("test1");
      },
      text: "Maritime",
    },
    {
      onClick: () => {
        console.log("test1");
      },
      text: "Space",
    },
  ];

  const contentAreaData = [
    `The Centre for Antarctic, Remote and Maritime Medicine (CARMM) is an
  expert network in Antarctic, remote and maritime medicine. It delivers:
  Comprehensive medical services and support for the Australian Antarctic
  Program, as well as other organisations operating in Antarctic, Southern
  Ocean and Remote medical paradigms.`,
    <ul>
      Consolidating Australia’s only established network of Australian Antarctic
      medical and human biology, <li>cold climate</li> <li>health expertise</li>
      <li>
        CARMM affords the following benefits and related opportunities:
        Collaborative centre of excellence of clinical practice, vocational and
        postgraduate training, education and research.
      </li>
    </ul>,
    ` Recruitment and training of generalist and specialist health professionals in Tasmania, with
  skills applicable to Antarctic, Remote and Maritime medical practice.
  Expand and develop innovations in telehealth utilising frontier medicine
  technology. Enhance the Tasmanian, Antarctic and Southern Ocean hub of
  expertise domestically and internationally.`,
  ];

  return (
    <div>
      <ResponsiveAppBar />
      {/* <MainRoute /> */}
      <Carousel autoPlay infiniteLoop />
      <ButtonGroup
        style={{ marginTop: "-200px", position: "relative", zIndex: 1 }}
        data={buttonData}
      />
      <ContentArea style={{ marginTop: "85px" }} text={contentAreaData} />
      <ImageCards />
      <div style={{ marginTop: "70px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
