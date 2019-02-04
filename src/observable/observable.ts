import { Observable } from 'rxjs'

// ========= Observable
const ob1 = new Observable(subscriber => {
  let counter = 0
  let timerId = setInterval(() => {
    counter++
    // if (counter === 5) {
    //   subscriber.error('error')
    //   subscriber.complete()
    // } else

    if (counter > 10) {
      subscriber.complete()
    } else {
      subscriber.next(counter)
    }
  }, 300)

  return function unibscribe() {
    clearInterval(timerId)
  }
})

console.log('start')
ob1.subscribe({
  next: counter => console.log(counter),
  error: err => console.error('[ERROR] ' + err),
  complete: () => console.log('done')
})
