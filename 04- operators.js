import {
  asyncScheduler,
  bindCallback,
  bindNodeCallback,
  buffer,
  bufferCount,
  combineLatest,
  concat,
  concatAll,
  concatMap,
  debounce,
  debounceTime,
  defer,
  delay,
  filter,
  first,
  from,
  fromEvent,
  generate,
  groupBy,
  iif,
  interval,
  map,
  merge,
  mergeMap,
  of,
  range,
  reduce,
  scan,
  scheduled,
  skip,
  take,
  takeLast,
  takeUntil,
  throttle,
  timer,
  zip,

} from 'rxjs';

import { readFile } from 'fs';
import { EventEmitter } from 'events';

// readFile('./dummyFiles/01.txt', { encoding: 'utf-8' }, (err, data) => console.log(data));

// creation

// // bind callback
// const obFsReadFile = bindCallback(readFile);

// obFsReadFile(
//   './dummyFiles/01.txt',
//   { encoding: 'utf-8' },
// ).subscribe(
//   ([err, data]) => console.log(data.toString()),
// );

///////////////////////////////////////////////////////////////////

// // bind node callback
// const obFsReadFileNode = bindNodeCallback(readFile);

// obFsReadFileNode(
//   './dummyFiles/01.txt',
//   { encoding: 'utf-8' },
// ).subscribe(
//   console.log,
// );

///////////////////////////////////////////////////////////////////

// // defer
// let counter = 0;
// const deferred = defer(
//   () => {
//     if (counter < 2) {
//       counter += 1;
//       return of('deferred observable value');
//     }
//     return of('no more values are available');
//   }
// );

// deferred.subscribe(console.log);
// deferred.subscribe(console.log);
// deferred.subscribe(console.log);
// deferred.subscribe(console.log);

/////////////////////////////////////////////////////////////////////

// // of

// of(1, 2, 3).subscribe(console.log);

/////////////////////////////////////////////////////////////////////

// // from

// from('123').subscribe(console.log);
// from([4, 5, 6]).subscribe(console.log);
// from(of(7, 8, 9)).subscribe(console.log);
// from(Promise.resolve(10)).subscribe(console.log);

/////////////////////////////////////////////////////////////////////

// // from event

// const emitter = new EventEmitter();
// fromEvent(emitter, 'observable').subscribe(console.log);
// emitter.emit('observable', 'observalble emitted value');
// emitter.emit('any', 'any emitted value');

/////////////////////////////////////////////////////////////////////

// // range
// range(10, 10).subscribe(console.log);
// range(5).subscribe(console.log);

////////////////////////////////////////////////////////////////////

// // iif  like an if condition

// iif(() => 1 > 2, of('1 > 2'), of('2 > 1')).subscribe(console.log);

///////////////////////////////////////////////////////////////////

// // generate  like a for loop

// generate({
//   initialState: 1,
//   condition(i) { return i < 5; },
//   iterate(i) { return i + 1; },
//   resultSelector(i) { return i; }
// }).subscribe(
//   console.log
// );

///////////////////////////////////////////////////////////////////

// // interval  like setInterval

// const $interval = interval(1000).subscribe(console.log);

// setTimeout(() => {
//   $interval.unsubscribe();
// }, 6100);

///////////////////////////////////////////////////////////////////

// // timer  like setTimeout

// timer(2000).subscribe(() => console.log('timer done'));

// // starts interval after duration
// timer(2000, 1000).subscribe(console.log);

/******************************************************************************************************************************/

// Join Creation Operators
// create from other observables


// // merge
// const $subscription = merge(
//   timer(0, 2000),
//   timer(1000, 2000),
// ).subscribe(console.log);

// setTimeout(() => {
//   $subscription.unsubscribe();
// }, 10000);

// merge(
//   timer(2000),
//   timer(2000),
// ).subscribe(() => console.log('completed'));

///////////////////////////////////////////////////////////////////

// concat

// concat(
//   from([1, 2, 3]),
//   from([4, 5, 6]),
// ).subscribe(console.log);

// concat(
//   timer(2000),
//   timer(2000),
// ).subscribe(() => console.log('completed'));

///////////////////////////////////////////////////////////////////

// // combineLatest

// combineLatest(
//   [
//     timer(0, 1000),
//     timer(500, 1000)
//   ]
// ).subscribe(console.log);

/////////////////////////////////////////////////////////////////////

// zip
zip(
  from([1, 2, 3]),
  interval(1000),
  (a, b) => a
).subscribe(
  console.log
);

/*******************************************************************************/
// Piping operators
// Transformation Operators

// // buffer
// // caches the source value until the param observable emits

// interval(500)
//   .pipe(
//     buffer(interval(2000)),
//   )
//   .subscribe(
//     console.log
//   );

//////////////////////////////////////////////////////////////////////////////////////

// // buffer count ( max buffer size, start buffer every )

// interval(1000)
//   .pipe(
//     bufferCount(3),
//   )
//   .subscribe(
//     console.log,
//   );

// // every second emit ---> start a new buffer
// interval(500)
//   .pipe(
//     bufferCount(3, 2),
//   )
//   .subscribe(
//     console.log
//   );

///////////////////////////////////////////////////////////////////////////////

// // map 

// interval(500)
//   .pipe(
//     map(
//       (val) => val + 10,
//     )
//   )
//   .subscribe(
//     console.log
//   );

////////////////////////////////////////////////////////////////////////////////

// // scan ---> like a running reducer

// interval(500)
//   .pipe(
//     scan(
//       (acc, val) => acc + val,
//     )
//   )
//   .subscribe(
//     console.log
//   );

///////////////////////////////////////////////////////////////////////////////

// // concatAll , concatMap

// timer(0)
//   .pipe(
//     map(
//       () => interval(500).pipe(take(4)),
//     ),
//     concatAll(),
//   )
//   .subscribe(console.log);

//   timer(0)
//   .pipe(
//     concatMap(
//       () => interval(500).pipe(take(4)),
//     ),
//   )
//   .subscribe(console.log);

//////////////////////////////////////////////////////////////////////////////////

// // groupBy

// from([
//   { id: 1, color: 'red' },
//   { id: 2, color: 'green' },
//   { id: 3, color: 'red' },
//   { id: 4, color: 'blue' },
//   { id: 5, color: 'green' },
//   { id: 6, color: 'green' },
//   { id: 7, color: 'red' },
// ]).pipe(
//   groupBy(
//     val => val.color,
//     {
//       element: val => val.id
//     }
//   ),
//   mergeMap(
//     (grp) => grp.pipe(
//       reduce(
//         (acc, val) => [...acc, val],
//         [grp.key]
//       )
//     )
//   ),
//   map(
//     (vals) => ({ [vals[0]]: vals.slice(1) })
//   )
// ).subscribe(console.log);

/*****************************************************************************************************/

// filtering operators

// take , takeUntil, takeLast ...  

// interval(100)
//   .pipe(
//     take(10)
//   )
//   .subscribe(
//     console.log
//   );

// interval(100)
//   .pipe(
//     takeUntil(
//       timer(1000)
//     )
//   )
//   .subscribe(
//     console.log
//   );

// interval(100)
//   .pipe(
//     takeUntil(
//       timer(1000)
//     ),
//     takeLast(2)
//   )
//   .subscribe(
//     console.log
//   );

/////////////////////////////////////////////////////////////////////////////////////

// filter

// interval(100)
//   .pipe(
//     take(10),
//     filter(
//       (val) => val % 2 > 0
//     )
//   )
//   .subscribe(
//     console.log
//   );

//////////////////////////////////////////////////////////////////////////////////////

// first

// interval(100)
//   .pipe(
//     first(
//       (val) => val % 2 > 0
//     )
//   )
//   .subscribe(
//     console.log
//   );

// errors if it doesn't find the matching element

// interval(100)
//   .pipe(
//     take(10),
//     first(
//       (val) => val % 2 > 3
//     )
//   )
//   .subscribe(
//     {
//       next: console.log,
//       error: (err) => console.log('err ' + err)
//     }
//   );

//////////////////////////////////////////////////////////////////////

// skip

// interval(100)
//   .pipe(
//     skip(5),
//     take(5)
//   )
//   .subscribe(
//     console.log
//   );

//////////////////////////////////////////////////////////////////////
