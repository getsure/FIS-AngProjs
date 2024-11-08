import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChiruComponent } from './chiru/chiru.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructDirsComponent } from './struct-dirs/struct-dirs.component';
import { AttrDirComponent } from './attr-dir/attr-dir.component';
import { MycolorDirective } from './mycolor.directive';
import { MycustcolorDirective } from './mycustcolor.directive';
import { MybgcolorDirective } from './dirs/mybgcolor.directive';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { PredefPipesComponent } from './predef-pipes/predef-pipes.component';
import { MyuppercasePipe } from './pipes/myuppercase.pipe';
import { MytitlecasePipe } from './pipes/mytitlecase.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    ChiruComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StructDirsComponent,
    AttrDirComponent,
    MycolorDirective,
    MycustcolorDirective,
    MybgcolorDirective,
    EmployeesComponent,
    PredefPipesComponent,
    MyuppercasePipe,
    MytitlecasePipe,
    ParentComponent,
    ChildComponent,
    OneComponent,
    TwoComponent,
    TdfComponent,
    MdfComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
