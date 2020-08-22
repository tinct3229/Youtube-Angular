import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './components/library/library.component';
import { TrendingComponent } from './components/trending/trending.component';
import {VideoTrendingComponent} from './components/trending/video-trending/video-trending.component';
import {VideoHomeComponent} from './components/home/video-home/video-home.component'
import { HomeComponent } from './components/home/home.component';
import {LibraryloginComponent} from './components/library/librarylogin/librarylogin.component';
import { SubcriptionsComponent } from './components/subcriptions/subcriptions.component';
import { SubcriptionsloginComponent } from './components/subcriptions/subcriptionslogin/subcriptionslogin.component';
import {HistoryComponent} from './components/history/history.component';


const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'video-home',
        component: VideoHomeComponent
      }
    ]
  },
  {
    path: 'video-home',
    component: VideoHomeComponent
  },
 
  {
    path: 'library' , component: LibraryComponent,

  },
  {
    path: 'librarylogin', component: LibraryloginComponent,
  },
  {
    path: 'subcriptions', component: SubcriptionsComponent,
  },
  {
    path: 'subcriptionslogin', component: SubcriptionsloginComponent,
  },
  {
    path: 'history' , component: HistoryComponent,
  },
  {
  path: 'trending', component: TrendingComponent,
  children: [
    {
      path: ':video-trending',
      component: VideoTrendingComponent
    }
  ]
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
