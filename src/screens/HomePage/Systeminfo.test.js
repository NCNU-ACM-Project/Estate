import React from "react";
import { render, fireEvent, cleanup, waitFor } from "test-utils";
import MockAdapter from "axios-mock-adapter";
import { houseRequest } from "../../../src/services/api.services";
import SystemInfo from "./SystemInfo";

// const mock = new MockAdapter(userRequest, { delayResponse: 500 });

describe("HomePage", () => {
  it("systeminfo's snapshot renders correctly", () => {
    const tree = render(<SystemInfo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("test functionality", () => {
  //   beforeEach(() => {
  //     mock.onGet("http://192.168.0.120:3001/students").reply(200, [{ id: 1, name: "John Smith" }]);
  //   });

  //   afterEach(() => {
  //     mock.reset();
  //     cleanup();
  //   });

//   test("test whether the data fetch when click read from axios", async () => {
//     const { getByText, findByText, toJSON } = render(<DemoPage />);

//     const axiosGetBtn = getByText("read(axios)");
//     fireEvent(axiosGetBtn, "press");
//     await findByText('"loading"');
//     await findByText('"John Smith"');
//   });
});
