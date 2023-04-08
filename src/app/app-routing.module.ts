import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbdominalPainComponent } from './abdominal-pain/abdominal-pain.component';
import { ContentComponent } from './content/content.component';
import { Covid19Component } from './covid19/covid19.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { FitnessComponent } from './fitness/fitness.component';
import { HeaderDiscoverComponent } from './header-discover/header-discover.component';
import { HeaderComponent } from './header/header.component';
import { HealthConditionComponent } from './health-condition/health-condition.component';
import { HealthTopicsComponent } from './health-topics/health-topics.component';
import { HomeComponent } from './home/home.component';
import { NutritionTips27Component } from './nutrition-tips27/nutrition-tips27.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ToolsComponent } from './tools/tools.component';


const routes: Routes = [
  {

    // component:HomeComponent,
    path:'home',
    children:[
      {path:'',component:HomeComponent},
      {path:'nutrition',component:NutritionComponent},
      {path:'covid19',component:Covid19Component},
      {path:'nutrition-tips27',component:NutritionTips27Component},
      
    ]
  },

  {
    path:'',
    children:[
    {path:'',component:HomeComponent},
    {path:'nutrition',component:NutritionComponent},
    {path:'covid19',component:Covid19Component},

  ]},
  {
    component:HealthConditionComponent,
    path:'health-condition',
    
  },
  {
    component:ToolsComponent,
    path:'tools'
  },
  {
    component:HealthTopicsComponent,
    path:'health-topics',
  },
  {
        path:'health-topics',
        children:[
          {path:'',component:HealthTopicsComponent},
          {path:'nutrition',component:NutritionComponent},
          {path:'covid19',component:Covid19Component},
          {path:'abdominal-pain',component:AbdominalPainComponent},
    
        ]
      },

      {
      path:'nutrition',
      children:[
        {path:'',component:NutritionComponent},
        {path:'nutrition-tips27',component:NutritionTips27Component},
      ]
    },
    
  
//   {
//     path:'header',
//     children:[
//       {path:' ', component:HeaderComponent},
//       {path:'tools',component:ToolsComponent},
//       {path:'health-condition',component:HealthConditionComponent},
//       {path:'health-topics', component:HealthTopicsComponent},

//     ]
//   },
// 

  // {
  //   path: '',
  //   component:HomeComponent,
  //   children:[
  //     {path: '', component:HomeComponent},
  //     {path:'covid19',component:Covid19Component},
  //     {path:'nutrition',component:NutritionComponent},
      
  //   ]
  // },
  
//   {
//     component:ContentComponent,
//     path:'content'
//   },
//   {
//     component:Covid19Component,
//     path:'covid19'
//   },


//     {
//     path:'nutrition',
//     children:[
//       {path:'',component:NutritionComponent},
//       {path:'nutrition-tips27',component:NutritionTips27Component},
//       {path: 'food-craving',component:FoodCravingComponent},
//     ]
//   },

//   {component:FitnessComponent,
//   path:'fitness'
//   },


  // {component:NutritionTips27Component,
  // path:'nutrition-tips27'
  // },

//   {
//     component:DiabetesComponent,
//     path:'diabetes'
//   },

  {
    path:'health-condition',
    children:[
      {path:'',component:HealthConditionComponent},
      {path:'covid19',component:Covid19Component}

    ]
  },

//   {
//     path:'health-topics',
//     children:[
//       {path:'',component:HealthTopicsComponent},
//       {path:'nutrition',component:NutritionComponent},
//       {path:'covid19',component:Covid19Component},
//       {path:'abdominal-pain',component:AbdominalPainComponent},

//     ]
//   },

//   {
    
//     component:NutritionComponent,
//     path:'nutrition'
//   },

//   {
//     component:ToolsComponent,
//     path:'tools'
//   },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
