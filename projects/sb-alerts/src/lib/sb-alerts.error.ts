export class SbAlertNotClosedError extends Error {
  constructor(){ super('Popup is not closed yet!') }
}

export class SbAlertStillOpenError extends Error {
  constructor(){ super('Popup is still open!') }
}
