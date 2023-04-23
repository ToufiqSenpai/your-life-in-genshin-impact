import characterType from "@/data/characterType"
import country from "@/data/country"
import femaleCharacter from "@/data/femaleCharacter"
import maleCharacter from "@/data/maleCharacter"
import visions from "@/data/visions"
import weapons from "@/data/weapons"
import { Diagnose } from "@/model/Diagnose"
import koneksi from "@/utils/koneksi"
import mongooseErrorMessage from "@/utils/mongooseErrorMessage"
import randomArrayEl from "@/utils/randomArrayEl"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await koneksi()

  if(req.method?.toUpperCase() == 'POST') {
    const body = req.body

    let shipCharacter: string[] = []
    const playableCharacter = maleCharacter.concat(femaleCharacter)
  
    if (body.gender == 'MALE') shipCharacter = femaleCharacter
    else if (body.gender == 'FEMALE') shipCharacter = maleCharacter
  
    const diagnose = new Diagnose({
      name: body.name,
      gender: body.gender,
      characterType: randomArrayEl(characterType),
      weapon: randomArrayEl(weapons),
      vision: randomArrayEl(visions),
      country: randomArrayEl(country),
      loveWith: randomArrayEl(shipCharacter),
      bestFriend: randomArrayEl(playableCharacter),
      lovedBy: randomArrayEl(shipCharacter),
      hatedBy: randomArrayEl(playableCharacter)
    })
  
    try {
      await diagnose.validate()
    } catch (error) {
      return res.status(400).json({
        status: 400,
        errors: mongooseErrorMessage(error)
      })
    }
  
    const availableDiagnose = await Diagnose.find({ name: body.name })
  
    if (availableDiagnose.length == 0) {
      await diagnose.save()
  
      return res.status(201).json({
        status: 201,
        message: 'Created'
      })
    } else {
      for (const currentData of availableDiagnose) {
        const createdAt = currentData.createdAt
  
        if (Date.now() - 24 * 60 * 60 * 1000 >= createdAt.getTime()) {
          await diagnose.save()
          return res.status(201).json({ status: 201, message: 'Created' })
        }
      }
    }
    return res.status(409).json({ status: 409, message: 'The name already available' })
  } else if(req.method?.toUpperCase() == 'GET') {
    const diagnose = Diagnose.findOne({ name: req.query.name || '' }).sort({ createdAt: -1 })

    if(!diagnose) {
      return res.status(404).json({ status: 404, message: 'Data not found'})
    }

    return res.status(200).json({
      status: 'Ok',
      data: diagnose
    })
  }
}