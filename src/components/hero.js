import User from '../img/hero-img.svg'
import Facebook from '../img/facebook.svg'
import Twitter from '../img/twitter.svg'
import Instagram from '../img/instagram.svg'

function App() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-5 col-sm-10">
          <img id="user-img" src={User} alt="user" />
        </div>
        <div className="col-lg-5 col-sm-10 p-2 my-auto">
          <p className="dev-text pl-3">Say hello to an</p>
          <h1 className="android-text display-lg-1 display-3 font-weight-bold">Android</h1>
          <p className="display-lg-1 display-3">Developer</p>
          <p className="dev-text font-weight-bold">Victoria Martins</p>
          <p className="line"></p>
          <div className="d-flex">
            <div className="pr-3">
              <img id="" src={Instagram} alt="user" />
            </div>
            <div className="px-3">
              <img id="" src={Twitter} alt="user" />
            </div>
            <div className="px-3">
              <img id="" src={Facebook} alt="user" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
