import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/req.response';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: './user.component.html',
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  // public user = signal<User | undefined>(undefined);

  public titleLabel = computed(() =>
    this.user()
      ? ` Información del usuario: ${this.user()?.first_name} ${
          this.user()?.last_name
        }`
      : 'No hay información'
  );

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  constructor() {
    this.route.params.subscribe({
      next: (params) => {
        console.log(params);
      },
    });
  }
}
