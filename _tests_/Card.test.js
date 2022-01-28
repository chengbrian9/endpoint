import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Card from "../src/components/Card";
import { Box, Image, Spinner, Text } from "@chakra-ui/react";

configure({ adapter: new Adapter() });

describe("Card", () => {
  const wrapper = shallow(<Card />);
  it("renders a card image", () => {
    expect(wrapper.find(Image)).toHaveLength(1);
    expect(wrapper.find(Spinner)).toHaveLength(0);
    expect(wrapper.containsMatchingElement(Image)).toEqual(true);
  });

  it("renders box components", () => {
    expect(wrapper.find(Box)).toHaveLength(11);
    expect(wrapper.containsMatchingElement(Box)).toEqual(true);
  });

  it("renders multiple text elements with default text", () => {
    expect(wrapper.find(Text)).toHaveLength(3);
    expect(wrapper.find(Text).at(0).text()).toBe("Lorum Ipsom");
    expect(wrapper.find(Text).at(1).text()).toBe("Lorum Ipsom");
    expect(wrapper.find(Text).at(2).text()).toBe("Lorum Ipsom");
  });
});
