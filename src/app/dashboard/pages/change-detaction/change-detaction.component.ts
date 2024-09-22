import { CommonModule, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnInit,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  selector: 'app-change-detaction',
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />

    <pre>
      {{ frameworkAsSignal() | json }}
    </pre
    >

    <pre>
      {{ frameworkAsPropertie | json }}
    </pre
    >
  `,
})
export default class ChangeDetactionComponent implements OnInit {

  public currentFramework = computed(
    () => `Change Detection ${this.frameworkAsSignal().name}`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2016',
  });

  public frameworkAsPropertie = {
    name: 'Angular',
    releaseDate: '2016',
  };


  //Angular esta menos pendiente, para que esten pendiente las señales
  constructor() {
    setTimeout(() => {
      console.log('hecho');

      // this.frameworkAsPropertie.name = 'React';

      this.frameworkAsSignal.update((value)  => ({
        ...value,
        name: 'React',
      }));
    }, 3000);
  }

  ngOnInit() {}
}
