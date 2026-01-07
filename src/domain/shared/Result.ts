export type Success<T> = { ok: true; value: T }
export type Failure = { ok: false; error: string; cause?: unknown }
export type Result<T> = Success<T> | Failure

export const Success = {
  create<T>(value: T): Success<T> {
    return { ok: true, value }
  },
}

export const Failure = {
  create(error: string, cause?: unknown): Failure {
    return { ok: false, error, cause }
  },
  check<T>(r: Result<T>): r is Failure {
    return r.ok === false
  },
}
