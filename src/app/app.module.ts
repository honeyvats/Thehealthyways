import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderDiscoverComponent } from './header-discover/header-discover.component';
import { Covid19Component } from './covid19/covid19.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { FitnessComponent } from './fitness/fitness.component';
import { NutritionTips27Component } from './nutrition-tips27/nutrition-tips27.component';
import { HealthConditionComponent } from './health-condition/health-condition.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { HealthTopicsComponent } from './health-topics/health-topics.component';
import { AbdominalPainComponent } from './abdominal-pain/abdominal-pain.component';
import { ToolsComponent } from './tools/tools.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent,
    FooterComponent,
    HeaderDiscoverComponent,
    Covid19Component,
    NutritionComponent,
    FitnessComponent,
    NutritionTips27Component,
    HealthConditionComponent,
    DiabetesComponent,
    HealthTopicsComponent,
    AbdominalPainComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
