import characterType from "@/data/characterType"
import country from "@/data/country"
import femaleCharacter from "@/data/femaleCharacter"
import maleCharacter from "@/data/maleCharacter"
import visions from "@/data/visions"
import weapons from "@/data/weapons"
import { Schema, model, models } from "mongoose"

export interface IDiagnose {
  name: string
  gender: string
  characterType: string
  vision: string
  weapon: string
  country: string
  loveWith: string
  bestFriend: string
  lovedBy: string
  hatedBy: string
  createdAt: Date
  updateAt: Date
}

const playableCharacter = maleCharacter.concat(femaleCharacter)

const diagnoseSchema = new Schema<IDiagnose>({
  name: {
    type: String,
    required: [true, 'Name cannot be empty.'],
    maxlength: [99, 'Name is too long.']
  },
  gender: {
    type: String,
    required: true,
    enum: ['MALE', 'FEMALE']
  },
  characterType: {
    type: String,
    required: true,
    enum: characterType
  },
  vision: {
    type: String,
    required: true,
    enum: visions
  },
  weapon: {
    type: String,
    required: true,
    enum: weapons
  },
  country: {
    type: String,
    required: true,
    enum: country
  },
  loveWith: {
    type: String,
    required: true,
    enum: playableCharacter
  },
  bestFriend: {
    type: String,
    required: true,
    enum: playableCharacter
  },
  lovedBy: {
    type: String,
    required: true,
    enum: playableCharacter
  },
  hatedBy: {
    type: String,
    required: true,
    enum: playableCharacter
  }
}, { timestamps: true })

export const Diagnose = models.Diagnose || model('Diagnose', diagnoseSchema)