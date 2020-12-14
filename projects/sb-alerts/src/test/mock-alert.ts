import { SbAlertNotClosedError, SbAlertStillOpenError } from '../public-api';

export class MockAlert {

  public name = 'root';
  public openTime: number = 100;
  public isOpen: boolean = false;
  public openAnimationTime = 100;
  public closeAnimationTime = 100;

  open(): Promise<void> {
    if (this.isOpen) return Promise.reject(new SbAlertNotClosedError());
    else return new Promise(resolve => {
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
}
