import App from '../img/app.png'
function NumberList() {
  const numbers = [
    {title: 'Bookuro'},
    {title: 'Bookuro'},
    {title: 'Bookuro'},
    {title: 'Bookuro'},
    {title: 'Bookuro'},
    {title: 'Bookuro'},
  ];
  const listItems = numbers.map((number,index) =>
    <div key={index} className="col-lg-3 m-3">
      <img src={App} alt="project-img" />
      <div className="card-footer font-weight-normal">
        <strong>APP NAME:</strong> {number.title}
        <div className="pt-2">
          <p><strong>STACK:</strong> Flutter, Node.js, Swift</p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="text-center p-5 m-3">
        <h1>Projects</h1>
      </div>
      <div className="row justify-content-center pb-5">
          {listItems}
      </div>
      <div className="text-center pb-5">
        <input className="btn-1 p-2 px-3 rounded-lg" type="button" value="See All Projects" />
      </div>
    </>
  );
}
export default NumberList;
