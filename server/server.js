import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fileUpload from "express-fileupload";
import passport from "passport";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import categoryRouter from "./Routes/CategoryRoutes.js";
import orderRouter from "./Routes/OrderRoutes.js";
import productRouter from "./Routes/ProductRoutes.js";
import uploadRouter from "./Routes/UploadRoutes.js";
import userRouter from "./Routes/UserRoutes.js";
import session from "express-session";
import url from "url";

// Khởi tạo dotenv và kết nối MongoDB
dotenv.config();
connectDatabase();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Cấu hình session và Passport
app.use(session({ secret: "secretKey", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Static files for customer and admin
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/customer', express.static(path.join(__dirname, 'customer/build')));
app.use('/admin', express.static(path.join(__dirname, 'admin/build')));
app.get('/customer/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'customer/build', 'index.html'));
});
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin/build', 'index.html'));
});

// API routes
app.use("/api/import", ImportData);
app.use("/api/categories", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter); // Đảm bảo đã include userRouter
app.use("/api/orders", orderRouter);
app.use("/api/upload", uploadRouter);
app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
});

// ERROR HANDLING
app.use(notFound);
app.use(errorHandler);

app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);
