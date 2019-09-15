import { trigger, transition, style, animate } from '@angular/animations';

export const animation =
  trigger('animation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.4s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('0.4s', style({ opacity: 0 }))
    ])
  ]);
