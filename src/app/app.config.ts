import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyBUxAyiAfCUSoEQBhHnm39yvEsZeGf-eYA",
  authDomain: "our-place-jumbaegab.firebaseapp.com",
  projectId: "our-place-jumbaegab",
  storageBucket: "our-place-jumbaegab.appspot.com",
  messagingSenderId: "193782402040",
  appId: "1:193782402040:web:57e7692638165be2c3a40d"
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom([
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ])]
};
