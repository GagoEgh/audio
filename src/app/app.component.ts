import { Component } from '@angular/core';
import { MusicInterface } from './music.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  playSong!: MusicInterface | undefined;
  displayedColumns: string[] = ['id', 'musician', 'fileName'];

  dataSource: MusicInterface[] = [
    { id: 1, musician: '2pac-dr-dre', fileName: 'California Love', song: 'assets/audio/2pac_dr-dre.mp3', isPlay: false },
    { id: 2, musician: 'Eminem', fileName: 'Mockingbird', song: 'assets/audio/eminem_mockingbird.mp3', isPlay: false },
    { id: 3, musician: 'LP', fileName: 'Other people', song: 'assets/audio/LP-OtherPeople.mp3', isPlay: false },
    { id: 4, musician: 'Sia', fileName: 'Unstoppable', song: 'assets/audio/sia-unstoppable.mp3', isPlay: false, },
  ];

  public showPlayer(event: any):void {
    let playMusic$!: Observable<MusicInterface>;
    if (event.target instanceof HTMLElement) {
      const value = event.target.innerText;

      playMusic$ = new Observable((subscriber) => {
        subscriber.next(this.dataSource.find((data: MusicInterface) => {
          return value === data.fileName || value === data.id || value === data.musician
        }));
      })

      playMusic$.subscribe({
        next: (res: MusicInterface) => {
          res.isPlay = false;
          res.isPlay = true;
          this.playSong = res;
        }
      })

    }
  }

}
