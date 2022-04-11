import React from "react";

import PropTypes from "prop-types";
//  https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
const CollectionCardModal = ({ setToggleModal, seletedCollection }) => {
  return (
    <div className="justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none animate-wiggle max-h-[90vh] pb-6 max-top-[5vh]">
      
        <div className="card-modal border-8">
          <div className="card-body ">
            <button
              className="btn btn-close relative"
              onClick={() => setToggleModal(false)}
            />
            <p className="card-title">{seletedCollection.title}</p>
            <img
              className="m-auto block w-3/5 max-h-[70vh] max-w-[30vw]"
              src={seletedCollection?.primaryimageurl}
              alt={seletedCollection?.title}
            />
          </div>
        </div>
      </div>

  );
};

CollectionCardModal.propTypes = {
  setToggleModal: PropTypes.func,
  seletedCollection: PropTypes.shape({
    title: PropTypes.string,
    primaryimageurl: PropTypes.string,
  }),
};

export default CollectionCardModal;
