const MenuItem = require("../models/MenuItem");

exports.getMenu = async (req, res) => {
  const { category, isAvailable } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (isAvailable !== undefined) filter.isAvailable = isAvailable;
  const items = await MenuItem.find(filter);
  res.json(items);
};

exports.searchMenu = async (req, res) => {
  const { q } = req.query;
  const results = await MenuItem.find({ $text: { $search: q } });
  res.json(results);
};

exports.createMenuItem = async (req, res) => {
  const item = await MenuItem.create(req.body);
  res.status(201).json(item);
};

exports.updateMenuItem = async (req, res) => {
  const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

exports.deleteMenuItem = async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};

exports.toggleAvailability = async (req, res) => {
  const item = await MenuItem.findById(req.params.id);
  item.isAvailable = !item.isAvailable;
  await item.save();
  res.json(item);
};
