import { TorrentPlayerClientPage } from './app.po';

describe('torrent-player-client App', function() {
  let page: TorrentPlayerClientPage;

  beforeEach(() => {
    page = new TorrentPlayerClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
