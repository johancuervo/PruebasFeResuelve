import { render, fireEvent } from "@testing-library/react";
import CollectionsCard from "../CollectionsCard";

const mockCollection = {
  id: 123,
  primaryimageurl: "test.img",
  title: "record #1",
  objectnumber: "v123123",
};

const setSeletedCollectionMocked = jest.fn();
const setModalMocked = jest.fn();

describe("CollectionCard component tests", () => {
  test("it should run the setModal function", () => {
    const { getByText } = render(
      <CollectionsCard
        collection={mockCollection}
        setModal={setModalMocked}
        setSeletedCollection={setSeletedCollectionMocked}
      />
    );

    expect(getByText("record #1")).toBeInTheDocument();
    fireEvent.click(getByText("record #1"));

    expect(setModalMocked).toHaveBeenCalledWith(true);
  });

  test("it should select the current collection", () => {
    const { getByText } = render(
      <CollectionsCard
        collection={mockCollection}
        setModal={setModalMocked}
        setSeletedCollection={setSeletedCollectionMocked}
      />
    );

    expect(getByText("record #1")).toBeInTheDocument();
    fireEvent.click(getByText("record #1"));

    expect(setSeletedCollectionMocked).toHaveBeenCalledWith(mockCollection);
  });
});
