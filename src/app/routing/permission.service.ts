import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PermissionService {
  constructor() {}

  canAccessRoute(permissions: string[]): boolean {
    return true;
  }
}
