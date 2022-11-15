import { useCallback, useEffect, useState } from 'react'

const actionByKey = key =>
  ({
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'oakLog',
    Digit5: 'oakPlanks',
  }[key])

const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  })

  const handleKeydown = useCallback(e => {
    // prevent focusing browser upper right menu
    if (e.key === 'Alt') {
      e.preventDefault()
    }
    const action = actionByKey(e.code)
    if (action) setActions(prev => ({ ...prev, [action]: true }))
  }, [])

  const handleKeyup = useCallback(e => {
    const action = actionByKey(e.code)
    if (action) setActions(prev => ({ ...prev, [action]: false }))
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('keyup', handleKeyup)
    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('keyup', handleKeyup)
    }
  }, [handleKeydown, handleKeyup])

  return actions
}

export default useKeyboard
