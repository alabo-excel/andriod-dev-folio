import Arrow from '../img/arrow-right.svg'
function App() {
    return (
      <div className="mt-5 pt-5">
        <div className="row justify-content-center mt-5">
          <div className="connect col-lg-6 col-sm-12 mt-5 p-5">
            <div className="ml-lg-5 p-5">
              <div className="d-flex ">
                <h1>Lets</h1>
                <img src={Arrow} alt="arrow" />
              </div>
              <h1>connect.</h1>
              <p className="long-line-dark"></p>
              <p className="py-4">Victoria Martins is a professional android developer and is open to discuss about new intresting projects</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-5 px-lg-5 pr-5">
            <div className="px-5 my-5">
                <label>
                  Your name
                  <input type="text" className="p-2 text" />
                </label>
              </div>
              <div className="px-5 my-5">
                <label>
                  Your email address
                  <input type="text" className="p-2 text" />
                </label>
              </div>
              <div className="px-5 my-5">
                <label>
                  About the project
                  <input type="text" className="p-2 text" />
                </label>
              </div>
              <div className="d-flex px-5 my-5 send">
                <p className="pt-2">Send</p>
                <img id="arrow" className="mx-2" src={Arrow} alt="arrow" />
              </div>
          </div>
        </div>
      </div>
    );
}

export default App;
