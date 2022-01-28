import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import GalleryContainer from "../src/components/GalleryContainer";
import Card from "../src/components/Card";

configure({ adapter: new Adapter() });

describe("Gallery Container", () => {
  let wrapper;
  const cardData = [{}, {}];
  wrapper = shallow(<GalleryContainer cardData={cardData} />);
  it("renders a grid", () => {
    expect(wrapper.find("#gallery-grid")).toHaveLength(1);
  });

  it("renders children", () => {
    expect(wrapper.find(Card)).toHaveLength(2);
  });
});
