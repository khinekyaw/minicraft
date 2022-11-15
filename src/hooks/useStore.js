import { nanoid } from 'nanoid'
import create from 'zustand'

const CUBES_KEY = 'CUBES'

const getLocalStorage = key => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, data) =>
  window.localStorage.setItem(key, JSON.stringify(data))

const useStore = create(set => ({
  texture: 'dirt',
  cubes: getLocalStorage(CUBES_KEY) || [],
  addCube: (x, y, z) => {
    set(prev => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }))
  },
  removeCube: id => {
    set(prev => ({
      cubes: prev.cubes.filter(cube => cube.key !== id),
    }))
  },
  setTexture: texture => {
    set(() => ({
      texture,
    }))
  },
  saveWorld: () => {
    set(prev => {
      setLocalStorage(CUBES_KEY, prev.cubes)
      return prev
    })
  },
  loadWorld: () => {},
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }))
  },
}))

export default useStore
