import React from "react";
import { MemoryRouter } from "react-router";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import { shallow } from "enzyme";
import Routes from "../../../routes";

import Form from "../../../pages/Form";
import Home from "../../../pages/Main";
import Profile from "../../../pages/Profile";

Enzyme.configure({ adapter: new Adapter() });

describe("Routes using memory router", () => {
  it("should show Home component for / ", () => {
    const component = shallow(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(component.find(Home)).toHaveLength(1);
  });
  it("should show Form component for /bot/new ", () => {
    const component = shallow(
      <MemoryRouter initialEntries={["/bot/new"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(component.find(Form)).toHaveLength(1);
  });
  it("should show profile component passing parameter id for /profile/2 ", () => {
    const component = shallow(
      <MemoryRouter initialEntries={["/profile/2"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(component.find(Profile)).toHaveLength(1);
  });
});
