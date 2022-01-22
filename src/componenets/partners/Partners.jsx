import "./Partner.css";

function Partners() {
  return (
    <div className="partner">
      <div className="partner__Container">
        <div className="partner__titleContainer">
          <p className="partner__title">
            Our <strong>Partners</strong>
          </p>
        </div>

        <div className="partner__imageContaonr">
          <img src="p1.png" alt="" className="partner__img" />
          <img src="p2.png" alt="" className="partner__img" />
          <img src="p3.png" alt="" className="partner__img" />
          <img src="p4.png" alt="" className="partner__img" />
          <img src="p5.png" alt="" className="partner__img" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
