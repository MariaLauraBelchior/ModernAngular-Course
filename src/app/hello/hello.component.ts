import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {


  protected title = 'Modern Angular';

  protected isDisabled = false;

  protected onClick(): void {
    console.log('Button clicked!');
    this.isDisabled = !this.isDisabled;
  }

  protected count =  signal(0);

  protected doubleCount = computed(() => this.count() * 2);

  protected decreaseCounter() {
    this.count.update(value => value - 1);
  }
  protected increaseCounter() {
    this.count.update(value => value + 1);

  }

  protected resetCounter() {
    this.count.set(0)
  }
}
