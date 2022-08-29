import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
import { USE_DEVICE_LANGUAGE } from '@angular/fire/compat/auth';
import { LANGUAGE_CODE } from '@angular/fire/compat/auth';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule
  ],
  providers: [
    // ... Existing Providers
    {
      provide: AUTH_SETTINGS,
      useValue: { appVerificationDisabledForTesting: true },
    },
    { provide: USE_DEVICE_LANGUAGE, useValue: true },
    // { provide: LANGUAGE_CODE, useValue: 'en' },
  ],
})
export class AdminModule {}
