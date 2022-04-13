import { render, fireEvent, queryByAttribute } from "@testing-library/react";
import CollectionCardModal from "../index";
const toggleMoked = jest.fn();

const seletedCollectionMoked = {
  title: "TestTitle",
  primaryimageurl: "imgUrl",
  objectnumber: "TEST134",
  people: {
    alphasort: "namepeopletest",
  },
  classification: "clasificationtest",
};
const getById = queryByAttribute.bind(null, "id");

describe("CollectionCardModal component tests", () => {
  test("it should run the toggle function", () => {
    const { getByText, container } = render(
      <CollectionCardModal
        toggle={toggleMoked}
        seletedCollection={seletedCollectionMoked}
      />
    );

    expect(getByText("X")).toBeInTheDocument();

    fireEvent.click(getByText("X"));
    expect(toggleMoked.mock.calls).toHaveLength(1);

    expect(getById(container, "modal-bg-container")).toBeInTheDocument();

    fireEvent.click(getById(container, "modal-bg-container"));
    expect(toggleMoked.mock.calls).toHaveLength(2);
    
  });
  test("it shoud select selectedCollection",()=>{
    const { getByText } = render(
      <CollectionCardModal
        toggle={toggleMoked}
        seletedCollection={seletedCollectionMoked}
      />
    );

    expect(getByText("TestTitle")).toBeInTheDocument();



  })
});
