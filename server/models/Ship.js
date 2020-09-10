import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Ship = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String },
    captain: { type: ObjectId, ref: 'CrewMember' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Ship;