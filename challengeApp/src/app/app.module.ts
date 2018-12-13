import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app.routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { 
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatBadgeModule,
  MatGridListModule
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { OverviewComponent } from './overview/overview.component';
import { ChallengeListComponent } from './challenge/challenge-list/challenge-list.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ChallengeDetailComponent } from './challenge/challenge-detail/challenge-detail.component';
import { ChallengeCreateComponent } from './challenge/challenge-create/challenge-create.component';
import { ChallengeListItemComponent } from './challenge/challenge-list-item/challenge-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    OverviewComponent,
    ChallengeListComponent,
    UserAccountComponent,
    NotificationsComponent,
    SettingsComponent,
    LoginComponent,
    SignupComponent,
    ChallengeDetailComponent,
    ChallengeCreateComponent,
    ChallengeListItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatBadgeModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
