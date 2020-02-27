// https://intellipaat.com/community/39266/property-does-not-exist-on-type-request-paramsdictionary

declare namespace Express {
  export interface Request {
    userId?: any;
  }
}
