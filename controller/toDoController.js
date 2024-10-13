const toDoModels = require("../models/ToDoModels");

module.exports.getToDos = async (req, res) => {
  try {
    const toDos = await toDoModels.find();
    res.status(200).json({
      success: true,
      message: "Fetched all todos successfully",
      data: toDos,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch todos",
    });
  }
};

module.exports.saveToDos = (req, res) => {
  const { toDo } = req.body;
  toDoModels
    .create({ toDo })
    .then((data) => {
      console.log("Saved Successfully");
      res.status(201).json({
        success: true,
        message: "Todo saved successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Failed to save todo",
      });
    });
};

module.exports.updateToDos = (req, res) => {
  const id = req.params.id; 
  const { toDo } = req.body;
  toDoModels
    .findByIdAndUpdate(id, { toDo }, { new: true }) 
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          success: false,
          message: "Todo not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Todo updated successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Failed to update todo",
      });
    });
};

module.exports.deleteToDos = (req, res) => {
  const id = req.params.id; 
  toDoModels
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          success: false,
          message: "Todo not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Todo deleted successfully",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Failed to delete todo",
      });
    });
};
