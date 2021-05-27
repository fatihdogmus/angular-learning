import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class MediatorService {
  readonly nameState = new BehaviorSubject("");

  set name(name: string) {
    this.nameState.next(name);
  }

  get name$() {
    return this.nameState.asObservable();
  }
}
