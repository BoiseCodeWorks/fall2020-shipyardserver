import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
class CrewService {
  async delete(id) {
    let success = await dbContext.Crew.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("invalid Id")
    }
    return success
  }
  async edit(body) {
    let update = await dbContext.Crew.findByIdAndUpdate(body.id, body, { new: true }).populate("ship", "name img")
    if (!update) {
      throw new BadRequest("invalid Id")
    }
    return update
  }
  async findById(id) {
    let crew = await dbContext.Crew.findById(id).populate("ship", "name img")
    if (!crew) {
      throw new BadRequest("Invalid Id")
    }
    return crew
  }
  async create(crewMemData) {
    return await dbContext.Crew.create(crewMemData)
  }
  async find(query = {}) {
    return await dbContext.Crew.find(query).populate("ship", "name img")
  }

}

export const crewService = new CrewService();