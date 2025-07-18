import Coupon from "../models/coupon.model.js";

export const getCoupon = async (req, res) => {
    try {
        const coupon = await Coupon.findOne({ userId: req.user._id, isActive: true });
        res.Coupon(coupon||null);
    }
    catch (error) {
        console.log("Error fetching coupon:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const validateCoupon = async (req, res) => {
    try {
        const { code } = req.query;
        const coupon = await Coupon.findOne({code:code, userId: req.user._id, isActive: true });
        if (!coupon) {
            return res.status(404).json({ message: "Coupon not found or inactive" });
        }
        if(coupon.expirationDate < new Date()){
            coupon.isActive = false;
            await coupon.save();
            return res.status(404).json({ message: "Coupon has expired" });
        }
        res.json({
            message: "Coupon is valid",
            code: coupon.code,
            discountPercentage: coupon.discountPercentage,
        });
    } catch (error) {
        console.log("Error validating coupon:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};