import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transtitions',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="Views Transtions 2" />
    <section class="flex justify-end" style="justify-content:end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero-1;"
      />

      <div class="bg-green-500 rounded" style="width: 100px; height: 100px; view-transition-name: hero-2;"></div>
    </section>
  `,
})
export default class ViewTranstitionsComponent {}