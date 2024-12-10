import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePromotion } from "../../redux/Actions/PromotionActions";

const Promotion = (props) => {
  const { promotion } = props;

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deletePromotion(id));
    }
  };

  return (
    <>
      <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
        <div className="card card-promotion-grid shadow-sm">
          <div className="info-wrap">
            <Link to="#" className="title text-truncate">
              {promotion.name}
            </Link>
            <div className="description mb-2">{promotion.description}</div>
            <div className="discount mb-2">
                <strong>Discount:</strong> {promotion.discount ? promotion.discount : "N/A"}%
            </div>
            <div className="status mb-2">
                <strong>Status:</strong> {promotion.status === "active" ? "active" : "Non Active"}%
            </div>
            <div className="row">
              <Link
                to={`/promotion/${promotion._id}/edit`}
                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
              >
                <i className="fas fa-pen"></i>
              </Link>
              <Link
                to="#"
                onClick={() => deleteHandler(promotion._id)}
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotion;
