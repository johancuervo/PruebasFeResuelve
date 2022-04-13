import { fireEvent, render } from "@testing-library/react";

import SearchBar from "../";

const searchMock = "test";
const setSearchMock = jest.fn();
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));


describe("SeachBar component tests", () => {
  test("it should select the search", () => {
    const { getByText } = render(
      <SearchBar search={searchMock} setSearch={setSearchMock} />
    );

    expect(getByText("test")).toBeInTheDocument();


  });

  /*    test("it should select the current collection", () => {
      const { getByText} = render(
        <CollectionsCard
          collection={mockCollection}
          setModal={setModalMocked}
          setSeletedCollection={setSeletedCollectionMocked}
        />
      );
  
      expect(getByText("record #1")).toBeInTheDocument();
      fireEvent.click(getByText("record #1"));
  
      expect(setSeletedCollectionMocked).toHaveBeenCalledWith(mockCollection);
    }); */
});
