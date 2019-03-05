import { Routes } from "@angular/router";

import { RentComponent } from "./rent/rent.component";
import { HomeComponent } from "./home/home.component";
import { ReturnComponent } from "./return/return.component";
import { RepoBrowserComponent } from "./github/repo-browser/repo-browser.component";
import { RepoListComponent } from "./github/repo-list/repo-list.component";
import { RepoDetailComponent } from "./github/repo-detail/repo-detail.component";
import { RegisterComponent } from "./register/register.component";

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "rent", component: RentComponent },
  { path: "return", component: ReturnComponent },
  {
    path: "github",
    component: RepoBrowserComponent,
    children: [
      { path: "", component: RepoListComponent },
      {
        path: ":org",
        component: RepoListComponent,
        children: [
          { path: "", component: RepoDetailComponent },
          { path: ":repo", component: RepoDetailComponent }
        ]
      }
    ]
  },
  { path: "register", component: RegisterComponent }
];
