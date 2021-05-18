import AboutImg from '../img/about-img.svg'
function App() {
    return (
      <div className="row justify-content-center mt-lg-5">
        <div className="col-lg-5 col-sm-10 my-auto pt-5">
          <div className="mt-5">
            <h3 className="font-weight-light">A little about me</h3>
            <p className="long-line"></p>
            <p className="about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales, arcu vitae blandit pellentesque, justo erat gravida ante, nec porttitor nulla magna ac metus. Aliquam erat volutpat. Ut nec efficitur ante. Cras laoreet at libero sed tristique. Sed pellentesque, magna et convallis blandit, risus enim gravida tellus, eget ornare erat enim sit amet quam. Maecenas eleifend ante ac mauris convallis, at facilisis tortor imperdiet. Phasellus id turpis vehicula, fermentum lectus eget, hendrerit mi. Aliquam erat volutpat. Pellentesque nisi quam, bl
              andit non sodales a, vestibulum at diam.
            </p>
            <input className="p-3 px-5 btn-1 my-5" type="button" value="DOWNLOAD CV" />
          </div>
        </div>
        <div className="col-lg-5 col-sm-10 mt-lg-5">
          <img id="user-img" src={AboutImg} alt="about-img" />
        </div>
      </div>
    );
}

export default App;
