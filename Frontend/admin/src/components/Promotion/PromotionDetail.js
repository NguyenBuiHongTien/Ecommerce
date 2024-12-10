import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { updatePromotion } from "../../redux/Actions/PromotionActions";
import { PROMOTION_UPDATE_RESET } from "../../redux/Constants/PromotionConstants";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Toast from "../LoadingError/Toast";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 3000,
};

const PromotionDetail = ({ promotionId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();

  const promotionEdit = useSelector((state) => state.promotionEdit);
  const { error, promotion } = promotionEdit;

  const promotionUpdate = useSelector((state) => state.promotionUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successPromotion,
  } = promotionUpdate;

  useEffect(() => {
    if (successPromotion) {
      dispatch({ type: PROMOTION_UPDATE_RESET });
      toast.success("Promotion Updated", ToastObjects);
    } else {
      if (!promotion.title || promotion._id !== promotionId) {
        dispatch(updatePromotion(promotionId));
      } else {
        setTitle(promotion.title);
        setDescription(promotion.description);
        setDiscount(promotion.discount);
        setStartDate(promotion.startDate);
        setEndDate(promotion.endDate);
      }
    }
  }, [dispatch, promotionId, promotion, successPromotion]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updatePromotion({
        _id: promotionId,
        title,
        description,
        discount,
        startDate,
        endDate,
      })
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/promotions" className="btn btn-danger text-white">
              Go to promotions
            </Link>
            <h2 className="content-title">Update Promotion</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && <Message variant="alert-danger">{errorUpdate}</Message>}
                  {loadingUpdate ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="promotion_title" className="form-label">
                          Promotion Title
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                          id="promotion_title"
                          required
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="promotion_discount" className="form-label">
                          Discount (%) 
                        </label>
                        <input
                          type="number"
                          placeholder="Enter discount"
                          className="form-control"
                          id="promotion_discount"
                          required
                          value={discount}
                          onChange={(e) => setDiscount(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="promotion_description" className="form-label">
                          Description
                        </label>
                        <textarea
                          placeholder="Type here"
                          className="form-control"
                          rows="7"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="start_date" className="form-label">
                          Start Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="start_date"
                          required
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="end_date" className="form-label">
                          End Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="end_date"
                          required
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default PromotionDetail;
