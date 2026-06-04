// Initializes and exports the Razorpay instance using credentials from environment variables
import Razorpay from "razorpay";

const key_id = process.env.RAZORPAY_KEY_ID || "mock_key_id";
const key_secret = process.env.RAZORPAY_KEY_SECRET || "mock_key_secret";

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.warn("⚠️ Warning: Razorpay credentials are missing in environment variables. Payments will not function.");
}

const razorpayInstance = new Razorpay({
  key_id,
  key_secret,
});

export default razorpayInstance;