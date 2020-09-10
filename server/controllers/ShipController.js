import BaseController from "../utils/BaseController";
import { shipService } from "../services/ShipService"
import { crewService } from "../services/CrewService"
export class ShipController extends BaseController {

  constructor() {
    super("api/ships")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/crew", this.getShipCrew)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)

  }
  async getShipCrew(req, res, next) {
    try {
      let data = await crewService.find({ ship: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      let data = await shipService.find()
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await shipService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await shipService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await shipService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await shipService.delete(req.params.id)
      res.send("successfully delorted")
    } catch (error) {
      next(error)
    }

  }
}