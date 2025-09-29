import { CorsOptions } from "cors";

const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:3000",
  // có thể thêm nhiều domain khác vào
];

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // cho phép cookie, Authorization header
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Api-Key", "X-Device-ID"],
};
