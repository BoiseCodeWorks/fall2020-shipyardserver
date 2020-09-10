import BaseController from "../utils/BaseController";
import { crewService } from "../services/CrewService"
export class CrewController extends BaseController {

  constructor() {
    super("api/crew");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let data = await crewService.find()
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await crewService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await crewService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await crewService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await crewService.delete(req.params.id)
      res.send("succesfully delorted")
    } catch (error) {
      next(error)
    }
  }
}