import express from 'express';
import Promotion from '../Models/PromotionModel.js';

const promotionRouter = express.Router();

// Thêm khuyến mãi mới
promotionRouter.post('/add', async (req, res) => {
  const { name, description, promoCode, discount, startDate, endDate, appliedProducts } = req.body;

  try {
    const promotion = new Promotion({
      name,
      description,
      promoCode,
      discount,
      startDate,
      endDate,
      appliedProducts,
    });
    
    await promotion.save();
    res.status(201).json(promotion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Lấy tất cả khuyến mãi
promotionRouter.get('/all', async (req, res) => {
  try {
    const promotions = await Promotion.find();
    res.json(promotions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Chỉnh sửa khuyến mãi
promotionRouter.put('/:id', async (req, res) => {
  try {
    const promotion = await Promotion.findById(req.params.id);
    if (!promotion) {
      return res.status(404).json({ message: 'Promotion not found' });
    }

    const { name, description, promoCode, discount, startDate, endDate, status, appliedProducts } = req.body;
    promotion.name = name || promotion.name;
    promotion.description = description || promotion.description;
    promotion.promoCode = promoCode || promotion.promoCode;
    promotion.discount = discount || promotion.discount;
    promotion.startDate = startDate || promotion.startDate;
    promotion.endDate = endDate || promotion.endDate;
    promotion.status = status || promotion.status;
    promotion.appliedProducts = appliedProducts || promotion.appliedProducts;

    await promotion.save();
    res.json(promotion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Xóa khuyến mãi
promotionRouter.delete('/:id', async (req, res) => {
  try {
    const promotion = await Promotion.findById(req.params.id);
    if (!promotion) {
      return res.status(404).json({ message: 'Promotion not found' });
    }

    await promotion.remove();
    res.json({ message: 'Promotion deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default promotionRouter;
