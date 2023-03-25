import { fromEvent, Observable, Subject } from 'rxjs';

// // EX01 Sync simple values
// const oneToThree = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.complete();
// });

// console.log('Starting From 1 to 3')

// const $1To3 = oneToThree.subscribe({
//   next: console.log,
//   complete: () => {},
// });

// console.log('Done 1 to 3')
// $1To3.unsubscribe();

/*********************************************************************************************************************************/

// // EX02 Async simple values
// const asyncOneToThree = new Observable((subscriber) => {
//   setTimeout(() => subscriber.next(1), 1000);
//   setTimeout(() => subscriber.next(2), 2000);
//   setTimeout(() => subscriber.next(3), 3000);
//   setTimeout(() => subscriber.complete(), 4000);
// });

// console.log('Starting async From 1 to 3');

// const $async1To3 = asyncOneToThree.subscribe({
//   next: console.log,
//   complete: () => $async1To3.unsubscribe(),
// });

// console.log('Done async 1 to 3');
// // $async1To3.unsubscribe();

/*********************************************************************************************************************************/

// // EX03 disposal

// const unsubscribable = new Observable((subscriber) => {
//   // Do something
//   const intervalId = setInterval(() => {
//     subscriber.next(new Date().toLocaleTimeString());
//   }, 1000);
//   return function unsubscribe() {
//     // do some cleaning
//     clearInterval(intervalId);
//     console.log('subscription stopped!');
//   }
// });

// const $subscription = unsubscribable.subscribe(console.log);

// setTimeout(() => {
//   $subscription.unsubscribe();
//   console.log('unsubscribed!');
// }, 5000);
