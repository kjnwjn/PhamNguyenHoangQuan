import express, { Router } from "express";
import validate from "@middleware/validate";
import { resourceDeleteOneSchema, resourceFilterSchema, resourceSchema, resourceUpdateSchema } from "@validations/resource";
import ResourceController from "@controllers/resource.controller";

const router: Router = express.Router();

router.post("/create", validate(resourceSchema), ResourceController.create);
router.get("/get-all", validate(resourceFilterSchema), ResourceController.getAllByFilter);
router.get("/:id", ResourceController.getOne);
router.patch("/:id", validate(resourceUpdateSchema), ResourceController.updateOne);
router.delete("/:id", validate(resourceDeleteOneSchema), ResourceController.deleteOne);

export default router;
