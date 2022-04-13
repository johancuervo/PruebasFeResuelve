import React from "react";

import PropTypes from "prop-types";
//  https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
const CollectionCardModal = ({ toggle, seletedCollection }) => {
  return (
    <div id="modal-component-container" className="fixed inset-0 animate-wiggle">
      <div
        id="modal-flex-container"
        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          id="modal-bg-container"
          className="fixed inset-0 bg-white opacity-75"
          onClick={() => toggle()}
          data-testid="bg-container"
        ></div>

        <div
          id="modal-container"
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full"
        >
          <div
            id="modal-wrapper"
            className="bg-white px-4 pt-0 pb-4 sm:p-6 sm:pb-4 text-right"
          >
            <button onClick={() => toggle()} className="" test-id="close">
              X
            </button>
            <div id="modal-wraper-flex" className="sm:flex sm:items-start">
              <div
                id="modal-content"
                className="text-center mt-2 pt-0 sm:mt-0 sm:ml-4 sm:text-left"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {seletedCollection?.title}
                </h3>

                <div id="modal-img" className=" items-center">
                  <img
                    src={seletedCollection?.primaryimageurl}
                    className="m-auto block w-3/5 max-h-[53vh] max-w-auto sm:w-4/5"
                  />
                </div>
                <div id="modal-text" className="mt-2 text-left">
                  <h1 className="text-gray-900 text-sm">Object Number:</h1>
                  <p className="text-gray-500 text-sm">
                    {seletedCollection?.objectnumber}
                  </p>
                  <h1 className="text-gray-900  text-sm">People:</h1>
                  <p className="text-gray-500 text-sm">
                    {seletedCollection.people
                      ? seletedCollection.people[0]?.alphasort
                      : null}
                  </p>
                  <h1 className="text-gray-900  text-sm">Clasification:</h1>
                  <p className="text-gray-500 text-sm">
                    {seletedCollection?.classification}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CollectionCardModal.propTypes = {
  toggle: PropTypes.func,
  seletedCollection: PropTypes.shape({
    title: PropTypes.string,
    primaryimageurl: PropTypes.string,
    objectnumber: PropTypes.string,
    people: PropTypes.shape({
      alphasort: PropTypes.string,
    }),
    classification: PropTypes.string,
  }),
};

export default CollectionCardModal;
