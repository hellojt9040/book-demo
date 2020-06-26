import { trigger, style, state, transition, animate } from '@angular/animations';

// export trigger object to required component
export let fade = trigger('fade', [
  state('void', style({ opacity:0})),
  transition(':enter, :leave', [
    animate(3000)
  ])
])

