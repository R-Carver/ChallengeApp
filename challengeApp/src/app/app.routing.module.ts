import { ChallengeCreateComponent } from './challenge/challenge-create/challenge-create.component';
import { ChallengeDetailComponent } from './challenge/challenge-detail/challenge-detail.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ChallengeListComponent} from './challenge/challenge-list/challenge-list.component';





const routes: Routes = [
    {path:'', component: ChallengeListComponent},
    {path:'userAccount', component: UserAccountComponent},
    {path:'settings', component: SettingsComponent},
    {path:'notifications', component: NotificationsComponent},
    {path:'login', component: LoginComponent},
    {path:'signup', component: SignupComponent},
    {path: 'challenge-detail/:challengeId', component: ChallengeDetailComponent},
    {path: 'challenge-create', component: ChallengeCreateComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}