import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { axiosWithAuth } from '../helpers/axiosWithAuth'


const colorsFetchTest = () => {
  axiosWithAuth()
    .get('/colors')
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
      return err.message;
    });
}; 

test("Renders BubblePage without errors", async () => {
  // Finish this test
  await mockFetchColors.mockResolvedValueOnce(colors);
  render(<BubblePage />);
})

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  colorsFetchTest();
  render(<BubblePage />);
  let colorAPI = await screen.findByText(/bubbles/i);
  expect(colorAPI).toBeInTheDocument();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading