import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPromotion } from "../../redux/Actions/PromotionActions"; // Điều chỉnh theo tên action của bạn
import { useHistory } from "react-router-dom";

const AddPromotion = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory(); // Dùng useHistory để chuyển hướng sau khi tạo khuyến mãi thành công

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPromotion = {
      name,
      description,
      promoCode,
      discount,
      startDate,
      endDate,
      isActive,
    };

    dispatch(addPromotion(newPromotion));

    history.push("/promotion");
  };

  return (
    <div className="add-promotion-container">
      <h2>Add New Promotion</h2>
      <form className="add-promotion-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Promo Code:</label>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Discount (%):</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            required
            min="0"
            max="100"
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
          <span>Active</span>
        </div>
        <button type="submit">Add Promotion</button>
      </form>
    </div>
  );
};

export default AddPromotion;
