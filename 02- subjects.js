import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from "rxjs";


// // EX01 plain subject

// const subject = new Subject();

// const $subscription1 = subject.subscribe((val) => console.log('first subscriber got ' + val));
// subject.next(1);
// subject.next(2);

// const $subscription2 = subject.subscribe((val) => console.log('second subscriber got ' + val));
// subject.next(3);
// subject.next(4);

// $subscription1.unsubscribe();
// $subscription2.unsubscribe();

/**************************************************************************************************************/

// // EX02 Behavior

// const bSubject = new BehaviorSubject(0);

// const $subscription1 = bSubject.subscribe((val) => console.log('first subscriber got ' + val));
// bSubject.next(1);
// bSubject.next(2);

// const $subscription2 = bSubject.subscribe((val) => console.log('second subscriber got ' + val));
// bSubject.next(3);
// bSubject.next(4);

// $subscription1.unsubscribe();
// $subscription2.unsubscribe();

/*************************************************************************************************************/

// EX03 Replay subject

// // buffer
// const bRSubject = new ReplaySubject(3);
// bRSubject.next(1);
// bRSubject.next(2);
// bRSubject.next(3);
// bRSubject.next(4);
// bRSubject.next(5);

// const $subscription1 = bRSubject.subscribe((val) => console.log('first subscriber got ' + val));
// bRSubject.next(6);
// bRSubject.next(7);

// $subscription1.unsubscribe();

///////////////////////////////////////////////////
// // window
// const wRSubject = new ReplaySubject(undefined, 200);
// setTimeout(() => {
//   wRSubject.next(1);
//   wRSubject.next(2);
//   wRSubject.next(3);
// }, 200);

// setTimeout(() => {
//   wRSubject.next(4);
//   wRSubject.next(5);
//   wRSubject.next(6);
// }, 400);

// setTimeout(() => {
//   const $subscription1 = wRSubject.subscribe((val) => console.log('subscriber got ' + val));
//   wRSubject.next(7);
//   wRSubject.next(8);
//   wRSubject.next(9);

//   $subscription1.unsubscribe();
// }, 500);

////////////////////////////////////////////////////////

// // buffer and window
// const bwRSubject = new ReplaySubject(2, 150);
// setTimeout(() => {
//   bwRSubject.next(1);
//   bwRSubject.next(2);
//   bwRSubject.next(3);
// }, 200);

// setTimeout(() => {
//   bwRSubject.next(4);
//   bwRSubject.next(5);
//   bwRSubject.next(6);
// }, 400);

// setTimeout(() => {
//   const $subscription1 = bwRSubject.subscribe((val) => console.log('subscriber got ' + val));
//   bwRSubject.next(7);
//   bwRSubject.next(8);
//   bwRSubject.next(9);

//   $subscription1.unsubscribe();
// }, 500);

/***************************************************************************************/

// // Async subject

// const aSubject = new AsyncSubject();

// aSubject.next(1);
// aSubject.next(2);

// const $subscription1 = aSubject.subscribe((val) => console.log('subscriber1 got ' + val));

// aSubject.next(3);
// aSubject.next(4);

// const $subscription2 = aSubject.subscribe((val) => console.log('subscriber2 got ' + val));

// aSubject.next(5);
// aSubject.next(6);
// aSubject.complete();

// $subscription1.unsubscribe();
// $subscription2.unsubscribe();