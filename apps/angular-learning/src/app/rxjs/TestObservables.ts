import { from, Observable, Observer, Subject } from "rxjs";
import { filter, map, reduce } from "rxjs/operators";

const observable = new Observable<string>((subscriber) => subscriber.next(""));
const observer: Observer<string> = {
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => {},
};
const subscription = observable.subscribe(observer);

subscription.unsubscribe();

observable.subscribe((value: string) => console.log(value));

export function calculateSum() {
  from([1, 2, 3, 4])
    .pipe(
      map((value) => value * value),
      filter((value) => value > 5),
      reduce((sum, value) => sum + value, 0)
    )
    .subscribe((value) => console.log(value));
}

export function subjectTest() {
  const subject = new Subject<string>();

  subject.subscribe((value) => console.log(value));

  subject.next("hebele");
  subject.next("hubele");
}
