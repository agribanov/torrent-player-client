import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes = [
    { path: '', component: HomeComponent }
];

export default RouterModule.forChild(routes);
