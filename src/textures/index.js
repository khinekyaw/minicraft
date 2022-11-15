import { NearestFilter, TextureLoader } from 'three'

import { dirtImg, grassImg, glassImg, oakLogImg, oakPlanksImg } from './images'

const dirtTexture = new TextureLoader().load(dirtImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const oakLogTexture = new TextureLoader().load(oakLogImg)
const oakPlanksTexture = new TextureLoader().load(oakPlanksImg)

const groundTexture = new TextureLoader().load(grassImg)
groundTexture.magFilter = NearestFilter

dirtTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
oakLogTexture.magFilter = NearestFilter
oakPlanksTexture.magFilter = NearestFilter

export {
  dirtTexture,
  grassTexture,
  glassTexture,
  oakLogTexture,
  oakPlanksTexture,
  groundTexture,
}
