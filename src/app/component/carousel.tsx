export default function Carousel() {
  return (
    <>
      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src=" https://vit.ac.in/sites/default/files/boys_hostel%20%281%29.JPG"
              alt="3rd image"
              width="50%"
              height="50%"
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://vit.ac.in/sites/default/files/boys_hostel%20%283%29.JPG"
              alt="3rd image"
              width="50%"
              height="50%"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://vit.ac.in/sites/default/files/boys_hostel%20%283%29.JPG"
              alt="3rd image"
              width="50%"
              height="50%"
            />
          </div>
        </div>
      </div>
    </>
  );
}
