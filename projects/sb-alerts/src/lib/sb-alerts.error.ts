export class SbAlertNotClosedError extends Error {
  constructor(){ super('Alert is not closed yet!') }
}

export class SbAlertStillOpenError extends Error {
  constructor(){ super('Alert is still open!') }
}

export class SbAlertNotFoundError extends Error {
  constructor(){ super('Alert not found!')}
}
