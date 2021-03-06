import { Observable } from "../Observable.d.ts";
import { ObservableInput, OperatorFunction } from "../types.d.ts";
export declare function onErrorResumeNext<T>(): OperatorFunction<T, T>;
export declare function onErrorResumeNext<T, T2>(
  v: ObservableInput<T2>,
): OperatorFunction<T, T | T2>;
export declare function onErrorResumeNext<T, T2, T3>(
  v: ObservableInput<T2>,
  v2: ObservableInput<T3>,
): OperatorFunction<T, T | T2 | T3>;
export declare function onErrorResumeNext<T, T2, T3, T4>(
  v: ObservableInput<T2>,
  v2: ObservableInput<T3>,
  v3: ObservableInput<T4>,
): OperatorFunction<T, T | T2 | T3 | T4>;
export declare function onErrorResumeNext<T, T2, T3, T4, T5>(
  v: ObservableInput<T2>,
  v2: ObservableInput<T3>,
  v3: ObservableInput<T4>,
  v4: ObservableInput<T5>,
): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
export declare function onErrorResumeNext<T, T2, T3, T4, T5, T6>(
  v: ObservableInput<T2>,
  v2: ObservableInput<T3>,
  v3: ObservableInput<T4>,
  v4: ObservableInput<T5>,
  v5: ObservableInput<T6>,
): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
export declare function onErrorResumeNext<T, T2, T3, T4, T5, T6, T7>(
  v: ObservableInput<T2>,
  v2: ObservableInput<T3>,
  v3: ObservableInput<T4>,
  v4: ObservableInput<T5>,
  v5: ObservableInput<T6>,
  v6: ObservableInput<T7>,
): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6 | T7>;
export declare function onErrorResumeNext<T, R>(
  ...observables: Array<ObservableInput<any>>
): OperatorFunction<T, T | R>;
export declare function onErrorResumeNext<T, R>(
  array: ObservableInput<any>[],
): OperatorFunction<T, T | R>;
export declare function onErrorResumeNextStatic<R>(
  v: ObservableInput<R>,
): Observable<R>;
export declare function onErrorResumeNextStatic<T2, T3, R>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
): Observable<R>;
export declare function onErrorResumeNextStatic<T2, T3, T4, R>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
): Observable<R>;
export declare function onErrorResumeNextStatic<T2, T3, T4, T5, R>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
): Observable<R>;
export declare function onErrorResumeNextStatic<T2, T3, T4, T5, T6, R>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  v6: ObservableInput<T6>,
): Observable<R>;
export declare function onErrorResumeNextStatic<R>(
  ...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>
): Observable<R>;
export declare function onErrorResumeNextStatic<R>(
  array: ObservableInput<any>[],
): Observable<R>;
