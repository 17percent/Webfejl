import { CanActivateFn} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const user = JSON.parse((localStorage.getItem('user') as string));
  if (user) {
    return true;
  }
  const returnUrl = state.url !== '/' ? `?returnUrl=${state.url}` : '';
  window.location.href = `/login${returnUrl}`; // Redirect to login page with returnUrl
  return false;
};
