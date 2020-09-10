import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class ShipService {

  async find(query = {}) {
    let ships = await dbContext.Ship.find(query).populate("captain", "name")
    return ships
  }
  async findById(id) {
    let ship = await dbContext.Ship.findById(id).populate("captain", "name")
    if (!ship) {
      throw new BadRequest("invalid id")
    }
    return ship
  }
  async create(shipData) {
    return await dbContext.Ship.create(shipData)
  }
  async edit(body) {
    let update = await dbContext.Ship.findByIdAndUpdate(body.id, body, { new: true })
    if (!update) {
      throw new BadRequest("invalid id")
    }
    return update
  }
  async delete(id) {
    let deleted = await dbContext.Ship.findByIdAndDelete(id)
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
    return deleted
  }


}
export const shipService = new ShipService()