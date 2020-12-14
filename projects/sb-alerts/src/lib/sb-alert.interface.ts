export interface ISbAlert {
  name: string;
  openTime: number;
  openAnimationTime: number;
  closeAnimationTime: number;
  open(text: string, data: any): Promise<void>;
  close(): Promise<void>;
}

export interface ISbAlertOptions {
  name: string;
  text: string;
  data: any;
}
