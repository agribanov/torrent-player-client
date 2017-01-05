import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';

declare const videojs: any;

@Directive({
  selector: '[appVideoJsPlayer]'
})
export class VideoJsPlayerDirective implements OnDestroy {
  @Input() set src(url: string) {
    this.setPlaybackUrl(url);
  }
  player: any;

  constructor(private el: ElementRef) {

    this.el.nativeElement.className += ' video-js vjs-default-skin vjs-big-play-center';

    this.player = videojs(this.el.nativeElement, { /* Options */ }, () => {

    });
  }

  ngOnDestroy() {
    this.player.dispose();
  }

  setPlaybackUrl(src: string) {
    this.player.src({ src, type: 'application/x-mpegURL' });
  }

}
