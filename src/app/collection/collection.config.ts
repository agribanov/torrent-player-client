import * as appConfig from '../app.config';

export const apiUrls = {
    collection: appConfig.baseUrl + '/collection?category={category}&page={page}',
    search: appConfig.baseUrl + '/collection/search?category={category}&q={query}&page={page}',
    collectionItem: appConfig.baseUrl + '/collection/{source}/{id}',
    collectionFileUrl:
        appConfig.baseUrl + '/collection/playbackUrl/{source}/{videoId}?folderId={folderId}&subfolderId={subfolderId}&fileId={fileId}',
    collectionFoldersUrl: appConfig.baseUrl + '/collection/folders/{source}/{id}?foldersKey={foldersKey}',
    collectionSubfoldersUrl: appConfig.baseUrl + '/collection/subfolders/{source}/{id}?foldersKey={foldersKey}&folderId={folderId}',
    collectionFilesUrl:
        appConfig.baseUrl + '/collection/files/{source}/{id}?foldersKey={foldersKey}&folderId={folderId}&subfolderId={subfolderId}'
};
