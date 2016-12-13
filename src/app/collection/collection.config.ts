import * as appConfig from '../app.config';

export const apiUrls = {
    collection: appConfig.baseUrl + '/collection',
    search: appConfig.baseUrl + '/collection/search?q={query}',
    collectionItem: appConfig.baseUrl + '/collection/{source}/{id}',
    collectionFileUrl: appConfig.baseUrl + '/collection/playbackUrl/{source}/{id}'
};
