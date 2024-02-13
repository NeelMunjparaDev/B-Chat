import User from "../models/userModel.js";

const getuserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const usersExceptCurrent = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(usersExceptCurrent);
  } catch (error) {
    console.error("Error in getuserForSidebar controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default getuserForSidebar;
