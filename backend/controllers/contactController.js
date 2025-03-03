const ContactMessage = require("../models/ContactMessage");

exports.sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save the message to the database
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Message saved successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Failed to save message" });
  }
};