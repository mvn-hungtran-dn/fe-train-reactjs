import { LOADING } from './constants'

export function loading () {
  const startLoading = new Event(LOADING.start)
  const finishLoading = new Event(LOADING.finish)

  function start () { window.dispatchEvent(startLoading) }
  function finish () { window.dispatchEvent(finishLoading) }

  return {
    start,
    finish
  }  
}
