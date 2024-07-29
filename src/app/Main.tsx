import { useEffect } from "react";
import Carousel from "./component/carousel";

export default function MainPage() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <h1>Kunal Garg</h1>
      <Carousel />
    </>
  );
}
