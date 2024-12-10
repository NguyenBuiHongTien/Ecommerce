import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPromotions } from "../../redux/Actions/PromotionActions";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Promotion from "./Promotions";

const MainPromotions = () => {
  const dispatch = useDispatch();

  const promotionList = useSelector((state) => state.promotionList);
  const { loading, error, promotions } = promotionList;

  const [searchPromotion, setSearchPromotion] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [sortChoose] = useState(["Latest added", "Oldest added"]);
  const [selectedSort, setSelectedSort] = useState();

  useEffect(() => {
    dispatch(listPromotions());
  }, [dispatch]);

  // Tìm kiếm khuyến mãi
  const searchPromotions = promotions?.filter((promotion) => {
    if (searchPromotion === "") {
      return promotion;
    } else if (
      promotion.name.toLowerCase().includes(searchPromotion.toLowerCase())
    ) {
      return promotion;
    }
  });

  // Lọc theo trạng thái
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const getFilterList = () => {
    if (!selectedStatus) {
      return searchPromotions;
    }
    return searchPromotions?.filter(
      (promotion) => promotion.status === selectedStatus
    );
  };

  const filterList = useMemo(getFilterList, [selectedStatus, searchPromotions]);

  // Sắp xếp theo
  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const getSortList = () => {
    if (!selectedSort) {
      return filterList;
    } else if (selectedSort === "Latest added") {
      return filterList?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (selectedSort === "Oldest added") {
      return filterList?.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    }
  };

  const sortList = useMemo(getSortList, [selectedSort, filterList]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Promotions</h2>
        <div>
          <Link to="/addpromotion" className="btn btn-primary">
            Create new Promotion
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
              <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
                onChange={(e) => setSearchPromotion(e.target.value)}
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                name="status"
                className="form-select"
                onChange={handleStatusChange}
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                name="sort"
                className="form-select"
                onChange={handleSortChange}
              >
                <option value="">Select Sort</option>
                {sortChoose.map((sort) => (
                  <option value={sort} key={sort}>
                    {sort}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </header>

        <div className="card-body">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              {/* Promotions */}
              {sortList.length ? (
                sortList.map((promotion) => (
                  <Promotion promotion={promotion} key={promotion._id} />
                ))
              ) : (
                <div className="d-flex justify-content-center col-12">
                  <div className="alert alert-warning">
                    No promotion, please create new.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainPromotions;
