import { asapScheduler, asyncScheduler, queueScheduler } from 'rxjs';

// // EX01 queue scheduler
// queueScheduler.schedule(() => {
//   queueScheduler.schedule(() => {
//     queueScheduler.schedule(() => {
//       queueScheduler.schedule(() => {
//         console.log('fourth');
//       });
//       console.log('third');
//     });
//     console.log('second');
//   });
//   console.log('first');
// });

// console.log('last');

/*************************************************************************************************/

// EX02 asap scheduler

// asapScheduler.schedule(
//   () => {
//     console.log('first');
//   },
//   1000
// );

// console.log('second');

///////////////////////////////////////////////////

// asapScheduler.schedule(
//   () => console.log('first in queue'),
//   0
// );

// asapScheduler.schedule(
//   () => console.log('second in queue'),
//   0
// );


/*************************************************************************************************/

// // EX03 async scheduler

// asyncScheduler.schedule(
//   () => {
//     console.log('first');
//   },
//   1000
// );

// console.log('second');

/*************************************************************************************************/

// // EX04 async vs asap

// asyncScheduler.schedule(
//   () => console.log('async logged!'),
//   0
// );

// asapScheduler.schedule(
//   () => console.log('asap logged!'),
//   0
// );

/*************************************************************************************************/

// EX05 animationFrameScheduler

// url = 'https://qsqvv6.stackblitz.io';
