import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CrewMember = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    ship: { type: ObjectId, ref: "Ship" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default CrewMember;