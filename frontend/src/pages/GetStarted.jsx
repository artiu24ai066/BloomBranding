import CloseNavbar from "../components/GetStartedNavbar/GetStartedNavbar";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <>
      <CloseNavbar />

      <section className="get-started">
        <div className="typing-box">
          <h1 className="type-small">Every brand has a</h1>
          <h1 className="type-big">Story.</h1>

          <h1 className="type-small delay">We make yours</h1>
          <h1 className="type-big">Bloom.</h1>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
