const Inventory = require("../Model/InventoryModel");

const getAllInventory = async (req, res, next) => {
  let inven;
  // Get all Inventory
  try {
    inven = await Inventory.find();
  } catch (err) {
    console.log(err);
  }
  // not found
  if (!inven) {
    return res.status(404).json({ message: "Inventory not found" });
  }
  // Display all inven
  return res.status(200).json({ inven });
};

// data Insert
const addInventory = async (req, res, next) => {
  const { product, description, amount, price, productid, unit } = req.body;

  let inven;

  try {
    inven = new Inventory({
      product,
      description,
      amount,
      price,
      unit,
      productid,
    });
    await inven.save();
  } catch (err) {
    console.log(err);
  }
  // not insert invens
  if (!inven) {
    return res.status(404).json({ message: "unable to add Inventory" });
  }
  return res.status(200).json({ inven });
};

//Get by Id
const getById = async (req, res, next) => {
  const id = req.params.id;

  let inven;

  try {
    inven = await Inventory.findById(id);
  } catch (err) {
    console.log(err);
  }
  // not available invens
  if (!inven) {
    return res.status(404).json({ message: "Inventory Not Found" });
  }
  return res.status(200).json({ inven });
};

//Update inven Details
const updateInventory = async (req, res, next) => {
  const id = req.params.id;
  const { product, description, amount, price, productid, unit } = req.body;

  let invens;

  try {
    invens = await Inventory.findByIdAndUpdate(id, {
      product: product,
      description: description,
      amount: amount,
      price: price,
      productid: productid,
      unit: unit,
    });
    invens = await invens.save();
  } catch (err) {
    console.log(err);
  }
  if (!invens) {
    return res
      .status(404)
      .json({ message: "Unable to Update Inventory Details" });
  }
  return res.status(200).json({ invens });
};

//Delete inven Details
const deleteInventory = async (req, res, next) => {
  const id = req.params.id;

  let inven;

  try {
    inven = await Inventory.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!inven) {
    return res
      .status(404)
      .json({ message: "Unable to Delete Inventory Details" });
  }
  return res.status(200).json({ inven });
};

exports.getAllInventory = getAllInventory;
exports.addInventory = addInventory;
exports.getById = getById;
exports.updateInventory = updateInventory;
exports.deleteInventory = deleteInventory;
