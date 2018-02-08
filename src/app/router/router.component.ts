import { Component } from '@angular/core';


@Component({
  selector: 'router',
  templateUrl: 'router.component.html'
})
export class RouterComponent {
  }
// RouterComponent.transformRoute
// this fails for aot because it can't call static functions
/*

 export var ROUTES_COMMON:any=[
 { path: '', component: NoRouteComponent },
 { path: 'rest-test',component: RestTestComponent},
 { path: 'render/:node', component: NodeRenderComponent},
 { path: 'render/:node/:version', component: NodeRenderComponent},
 { path: 'apply-to-lms/:node', component: ApplyToLmsComponent}
 ];
 .concat(ROUTES_SEARCH)
 .concat(ROUTES_WORKSPACE)
 .concat(ROUTES_RECYCLE)
 .concat(ROUTES_COLLECTIONS)
 .concat(ROUTES_LOGIN)
 .concat(ROUTES_PERMISSIONS)
 */

// Due to ahead of time, we need to create all routes manuall
export var ROUTES:any=[
  // global

  ]
;

