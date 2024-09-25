import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transtitions',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="Views Transtions 1" />
    <section class="flex justify-start">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero-1;"
      />

      <div
        class="bg-blue-500"
        style="width: 200px; height: 200px; view-transition-name: hero-2;"
      ></div>
    </section>
  `,
})
export default class ViewTranstitionsComponent {}
