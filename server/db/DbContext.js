import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import CrewMemberSchema from "../models/CrewMember"
import ShipSchema from "../models/Ship"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Crew = mongoose.model("CrewMember", CrewMemberSchema)
  Ship = mongoose.model("Ship", ShipSchema)
}

export const dbContext = new DbContext();
