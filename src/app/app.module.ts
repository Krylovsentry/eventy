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
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CreateEventModalComponent } from './components/create-event-modal/create-event-modal.component';
import { GoogleMapComponentComponent } from './components/google-map-component/google-map-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent,
    SidebarComponent,
    EventBoxComponent,
    CreateEventModalComponent,
    GoogleMapComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseCongig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NoopAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [VkService, MapService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {
}
