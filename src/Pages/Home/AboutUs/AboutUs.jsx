import React from "react";
import Title from "../../../Shared/Title";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const AboutUs = () => {
  return (
    <div className="bg-gray-200 pb-20">
      <Title className="my-0" title="About Us" subtitle="Why You Choose Us" />
      <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 group">
        <div>
          <lord-icon
            src="https://cdn.lordicon.com/ttioogfl.json"
            trigger="loop"
            colors="primary:#121331,secondary:#ebe6ef,tertiary:#4bb3fd,quaternary:#92140c,quinary:#f9c9c0"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <div>
            <h4 className="text-2xl font-bold pt-2 pb-4">History</h4>
            <p className="text-justify font-thin text-neutral-600">
              Sed posuere consectetur est at lobortis. Morbi leo risus porta.
              Donec ullamcorper nulla non metus auctor fringilla. Sed posuere
              consectetur est at lobortis. Morbi leo risus, porta ac consectetur
              ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor
              fringilla. Sed posuere consectetur est at lobortis.
            </p>
          </div>
        </div>
        <div>
          <lord-icon
            src="https://cdn.lordicon.com/coowbsor.json"
            trigger="loop"
            colors="outline:#121331,primary:#f24c00,secondary:#4bb3fd,tertiary:#ebe6ef"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <div>
            <h4 className="text-2xl font-bold pt-2 pb-4">Mission</h4>
            <p className="text-justify font-thin text-neutral-600">
            Nunc viverra est ullamcorper ult rices posuere cubilia tellus.Nullam aliquet, lacus nec pede sed tortor. Phasellus vestibulum. Nulla lobortis volutpat. Praesent faucibus. Sed non sapien. Curabitur condimentum auctor sapien. Nullam aliquet, lacus nec pede sed tortor. Phasellus vestibulum. Nulla lobortis.
            </p>
          </div>
        </div>
        <div>
          <lord-icon
            src="https://cdn.lordicon.com/clcopglh.json"
            trigger="loop"
            colors="primary:#121331,secondary:#ffc738"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <div>
            <h4 className="text-2xl font-bold pt-2 pb-4">Philosophy</h4>
            <p className="text-justify font-thin text-neutral-600">
            Curabitur nec libero. Suspendisse justo sem, rutrum vel, varius. Aliquam ut orci pellentesque adipiscing justo quis ipsum. Nam nunc iaculis quis, ultricies massa. Mauris et arcu. In hac habitasse platea dictumst. Vestibulum ullamcorper id, congue risus. Vivamus sed enim. Mauris pretium, diam sodales turpis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
