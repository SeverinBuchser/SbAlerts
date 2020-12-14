import { Component, Input } from '@angular/core';
import { SbAlertNotClosedError, SbAlertStillOpenError } from './sb-alerts.error';
import { SbAlertsService } from './sb-alerts.service';

@Component({
  selector: 'sb-alert',
  templateUrl: './sb-alert.component.html',
  styleUrls: ['./sb-alert.component.scss']
})
export class SbAlertComponent {

  public name = 'root';
  public openTime: number = 2000;
  private isOpen: boolean = false;
  private isLanded = true;
  public text: string = '';
  public openAnimationTime = 500;
  public closeAnimationTime = 500;
  private context: string = '';

  @Input()
  public theme: string = 'bright';


  @Input()
  set alertService(alertService: SbAlertsService) {
    alertService.addAlert(this)
  }

  open(text: string, context: string): Promise<void> {
    if (this.isOpen) return Promise.reject(new SbAlertNotClosedError());
    else return new Promise(resolve => {
      this.context = context;
      this.text = text;
      this.isLanded = false;
      this.isOpen = true;
      resolve();
    })
  }
  close(): Promise<void> {
    if (!this.isOpen) return Promise.reject(new SbAlertStillOpenError());
    else return new Promise(resolve => {
      this.isOpen = false;
      resolve();
    })
  }

  get classes(): Array<string> {
    let classes = new Array<string>();
    classes.push(this.theme);
    classes.push(this.isOpen ? 'open' : 'closed');
    classes.push(this.isLanded ? 'landed' : 'not-landed')
    classes.push(this.context);
    return classes;
  }
}
