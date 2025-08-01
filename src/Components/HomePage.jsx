import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="">Banner Section</div>
      <div className="">Products</div>
      <div className="">
        <Testimonials />
      </div>
      <div className="">About me in short</div>
    </div>
  );
};

export default HomePage;
