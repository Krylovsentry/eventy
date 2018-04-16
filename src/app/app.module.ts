import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MapBoxComponent} from './components/map-box/map-box.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FormsModule} from '@angular/forms';
import {MapService} from './services/map.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {VkService} from './services/vk.service';
import { EventBoxComponent } from './components/event-box/event-box.component';


@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent,
    SidebarComponent,
    EventBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseCongig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [VkService, MapService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {
}
