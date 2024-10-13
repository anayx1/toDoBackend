const { Router } = require("express");
const { getToDos, saveToDos,updateToDos,deleteToDos } = require("../controller/toDoController");

const router = Router();

router.get("/get", getToDos);
router.post("/post", saveToDos);
router.put("/put/:id", updateToDos);
router.delete("/delete/:id", deleteToDos);
module.exports = router;
