import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ServersService } from "./servers/servers.service";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

interface Server { id: number, name: string, status: string }

@Injectable()
export class ServerResolver implements Resolve<Server>{

    constructor(private serverService: ServersService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): 
        { id: number; name: string; status: string; }
        | Observable<{ id: number; name: string; status: string; }>
        | Promise<{ id: number; name: string; status: string; }> {

        return this.serverService.getServer(+route.params['id']);

    }

}