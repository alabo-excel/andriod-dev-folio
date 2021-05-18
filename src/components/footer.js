import Facebook from '../img/bi_facebook.png'
import Twitter from '../img/entypo-social_twitter-with-circle.png'
import Instagram from '../img/bx_bxl-instagram-alt.png'

function App() {
    return (
      <>
      <div className="footer row text-dark justify-content-center mt-5 p-3">
        <div className="col-lg-2 text-center">
          <h6>
            Victoria Martins 2021
          </h6>
          <div className="d-flex justify-content-center">
            <div className="p-2">
              <img id="icon" src={Instagram} alt="icon" />
            </div>
            <div className="p-2">
              <img id="icon" src={Twitter} alt="icon" />
            </div>
            <div className="p-2">
              <img id="icon" src={Facebook} alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 pt-4">
        <h6>Designed by Alabo Excel</h6>
      </div>
      </>
    );
}

export default App;
