import { RouterModule } from '@angular/router';

const routes = [
    { path: '', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'collection', loadChildren: 'app/collection/collection.module#CollectionModule' }
];

export default RouterModule.forRoot(routes);
