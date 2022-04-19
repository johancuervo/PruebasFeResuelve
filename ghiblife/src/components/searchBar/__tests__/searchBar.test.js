import { fireEvent, render, screen } from "@testing-library/react";

import SearchBar from "..";

const setSearch = jest.fn();
const mockedUsedNavigate =jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  render(<SearchBar setSearch={setSearch}/>);
});

describe("SearchBar", () => {
  test("renders from search", () => {
    const placeholder = screen.queryByPlaceholderText(/busqueda por titulo/i);
    expect(placeholder).toBeInTheDocument();
  });

  test("should be able to type in input",async () => {
    const inputElement = screen.getByPlaceholderText(/busqueda por titulo/i);
    fireEvent.change(inputElement, { target: { value: "Italy" } });
    expect(inputElement.value).toBe("Italy");
  });


  test("useNavigate called",async () => {
    const inputElement = screen.getByPlaceholderText(/busqueda por titulo/i);
    fireEvent.change(inputElement, { target: { value: "Colombia" } });
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1)
  });

});
