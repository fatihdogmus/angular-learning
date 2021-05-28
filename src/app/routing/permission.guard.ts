import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { PermissionService } from "./permission.service";

interface RouteData {
  permissions: string[];
}

@Injectable({ providedIn: "root" })
export class PermissionGuard implements CanActivate {
  constructor(private permissionService: PermissionService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const permissions = (state.root.data as RouteData).permissions;
    if (this.permissionService.canAccessRoute(permissions)) {
      return true;
    } else {
      this.router.parseUrl("/not-authorized");
    }
  }
}
