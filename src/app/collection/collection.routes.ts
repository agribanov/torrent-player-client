import { RouterModule } from '@angular/router';
import { CollectionComponent } from './components/collection/collection.component';
import { CollectionItemComponent } from './components/collection-item/collection-item.component';

const routes = [
    { path: '', component: CollectionComponent },
    { path: ':source/:id', component: CollectionItemComponent }
];

export default RouterModule.forChild(routes);
