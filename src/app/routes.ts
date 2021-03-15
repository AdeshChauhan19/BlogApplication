import {Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {AuthGuard} from './auth/auth.guard';
import { DashboardComponent} from './dashboard/dashboard.component'
import {AdminComponent} from './admin/admin.component'
import {AdminDashboardComponent} from '../app/admin-dashboard/admin-dashboard.component'
import {MainBlogComponent} from './main-blog/main-blog.component'
import {EditBlogComponent} from './dashboard/edit-blog/edit-blog.component'
import {ShowBlogComponent} from './main-blog/show-blog/show-blog.component' 
import {ErrorComponent} from './error/error.component'



export const appRoutes=[
{
    path:'signup', component:UserComponent,
    children:[{path:'',component:SignUpComponent}]
},
{
    path:'login', component:UserComponent,
    children:[{path:'',component:SignInComponent}]
},
{
    path: 'dashboard',
    component: DashboardComponent// Dashboard Route,
    
},
{
    path:'dashboard/:id',
    component: DashboardComponent

},
{
    path:'dashboardAdmin',
    component: AdminDashboardComponent

},
{
    path:'loginAdmin',
    component:AdminComponent

},
{
    path:'Blog',
    component:MainBlogComponent

},
{
    path:'Blog/:id',
    component:EditBlogComponent

},
{
    path:'BlogOne/:id',
    component:ShowBlogComponent

},
{
    path:''
    ,redirectTo:'/login'
    ,pathMatch:'full'
},
{
    path:'**'
    // ,redirectTo:'/login'
    ,pathMatch:'full',
    component:ErrorComponent
    
}
];