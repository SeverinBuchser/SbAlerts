import { Injectable } from '@angular/core';
import { ISbAlert, ISbAlertOptions } from './sb-alert.interface';
import { SbAlertNotClosedError, SbAlertNotFoundError } from './sb-alerts.error';

@Injectable({
  providedIn: 'root'
})
export class SbAlertsService {
  private alerts: Array<ISbAlert> = new Array<ISbAlert>();
  private queue: Array<ISbAlertOptions> = new Array<ISbAlertOptions>();

  constructor() { }

  public addAlert(alert: ISbAlert): void {
    this.alerts.push(alert);
  };
  public openAlert(name: string, text: string, data: any): Promise<void> {
    let foundAlert: ISbAlert = this.alerts.find((alert: ISbAlert) => alert.name === name) as ISbAlert;
    if (!foundAlert) return Promise.reject(new SbAlertNotFoundError());
    return foundAlert.open(text, data)
    .then(() => this.sleep(foundAlert.openAnimationTime))
    .then(() => this.sleep(foundAlert.openTime))
    .then(() => foundAlert.close())
    .then(() => this.sleep(foundAlert.closeAnimationTime))
    .then(() => {
      let next: ISbAlertOptions = this.queue.reverse().pop() as ISbAlertOptions;
      this.queue.reverse();
      this.openAlert(next.name, next.text, next.data);
    })
    .catch((error: any) => {
      if (error instanceof SbAlertNotClosedError) {
        this.queue.push({name, text, data})
      }
    });
  };

  private sleep(time: number): Promise<void> {
   return new Promise(resolve => setTimeout(resolve, time));
  }
}
