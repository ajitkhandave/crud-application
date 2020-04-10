import { LoginComponent } from "./components/login/login.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const Routes = [
    { path: '', redirectTo:'auth', pathMatch: 'full' },
    {    
        path: 'auth',
        component: LoginComponent
    },
    {    
        path: 'contact-list',
        component: ContactListComponent
    },
    {    
        path: '**',
        component: NotFoundComponent
    },
];

