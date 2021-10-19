import { AfterViewInit, Component, ViewChild, ViewChildren } from '@angular/core';
import { PhoneModifyComponent } from './components/phone-modify/phone-modify.component';
import { TestComponent } from './test/test.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren(TestComponent)
  test!: TestComponent;
  
  title = 'InsuranceClient';
}
