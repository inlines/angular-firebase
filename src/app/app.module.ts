import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';


const appRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'customerInfo',
    component: CustomerInfoComponent
  },
  {
    path: './',
    redirectTo: 'customerInfo'
  },
  {
    path: '**',
    redirectTo: 'customerInfo'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDC2xAFacJ0tI7GZRb2jhhkNp91fnNAD4Y",
      authDomain: "helloworld-3e508.firebaseapp.com",
      databaseURL: "https://helloworld-3e508.firebaseio.com",
      projectId: "helloworld-3e508",
      storageBucket: "helloworld-3e508.appspot.com",
      messagingSenderId: "879190937304"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
