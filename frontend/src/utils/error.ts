export type payload = {
  data: {
    error: {
      message: string,
      code: number,
    }
  }
}

export default class Error {
  public static hasPayloadError(payload: payload): boolean {
    return Boolean(payload.data.error);
  }
}
