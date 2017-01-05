import { RouterModule } from '@angular/router';
import { CollectionComponent } from './components/collection/collection.component';
import { CollectionSearchComponent } from './components/collection-search/collection-search.component';
import { CollectionItemComponent } from './components/collection-item/collection-item.component';

const routes = [
    { path: 'category/:category', component: CollectionComponent },
    { path: 'search/:query', component: CollectionSearchComponent },
    { path: 'item/:source/:id', component: CollectionItemComponent }
];

export default RouterModule.forChild(routes);
