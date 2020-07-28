import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  fetchUsersRegistered,
  fetchUsersRegisteredSuccess,
  fetchUsersRegisteredFailured,
} from './users-registered.actions';
import { exhaustMap, switchMap, catchError } from 'rxjs/operators';
import { UserRegistered } from 'src/app/shared/models/user.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersRegisteredEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  fetchUsersCheckedEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUsersRegistered),
      exhaustMap((action) =>
        this.usersService.getUsersByRol('quality').pipe(
          switchMap((usersRegistered: UserRegistered[]) => [
            fetchUsersRegisteredSuccess({ usersRegistered: usersRegistered }),
          ]),
          catchError((error) => of(fetchUsersRegisteredFailured(error)))
        )
      )
    )
  );
}
