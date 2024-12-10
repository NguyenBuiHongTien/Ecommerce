import mongoose from 'mongoose';

const { Schema } = mongoose;

// Định nghĩa schema cho bảng khuyến mãi
const promotionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    promoCode: {
      type: String,
      required: true,
      unique: true,
    },
    discount: {
      type: Number,
      required: true,
      min: 0,
      max: 90, 
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'expired', 'paused'], 
      default: 'active',
    },
    appliedProducts: {
      type: [Schema.Types.ObjectId],
      ref: 'Product', 
    },
  },
  {
    timestamps: true, 
  }
);

const Promotion = mongoose.model('Promotion', promotionSchema);

export default Promotion;
