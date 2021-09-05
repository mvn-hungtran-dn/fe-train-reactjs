import { LOADING } from './constants'

export function loading () {
  const startLoading = new Event(LOADING.start)
  const finishLoading = new Event(LOADING.finish)

  function start () { document.dispatchEvent(startLoading) }
  function finish () { document.dispatchEvent(finishLoading) }

  return {
    start,
    finish
  }  
}
