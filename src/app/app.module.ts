import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app.routes";
import { AppComponent } from "./app.component";
import { GithubService } from "./github/shared/github.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { RentComponent } from "./rent/rent.component";
import { ReturnComponent } from "./return/return.component";
import { HomeComponent } from "./home/home.component";
import { RepoBrowserComponent } from "./github/repo-browser/repo-browser.component";
import { RepoListComponent } from "./github/repo-list/repo-list.component";
import { RepoDetailComponent } from "./github/repo-detail/repo-detail.component";
import { RegisterComponent } from "./register/register.component";
import { FormPoster } from "./services/form-poster.service";
import { RatingModule } from "ngx-bootstrap/rating";

@NgModule({
  declarations: [
    AppComponent,
    RentComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ReturnComponent,
    RegisterComponent
  ],
  imports: [
    RatingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [FormPoster, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
