import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ServerResolver } from "./app.server.resolver";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent }
        ]
    },
    {
        path: "servers",
        canActivateChild: [AuthGuard],
        component: ServersComponent, children: [
            { path: ":id", component: ServerComponent, resolve: { server: ServerResolver } },
            { path: ":id/edit", component: EditServerComponent },
        ]
    },
    {
        path: 'not-found', component: PageNotFoundComponent
    },
    {
        path: '**', redirectTo: '/not-found'
    }

]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // RouterModule.forRoot(appRoutes, {useHash:true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}