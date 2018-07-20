import { multicastAs } from '../../operators/multicastAs';
import { Observable } from '../../Observable';
import { Operation, ObservableInput } from '../../types';
import { ReplaySubject } from '../../ReplaySubject';

export function publishReplayAs<T, R>(project: (published: Observable<T>) => ObservableInput<R>): Operation<T, R>;
export function publishReplayAs<T, R>(bufferSize: number, project: (published: Observable<T>) => ObservableInput<R>): Operation<T, R>;
export function publishReplayAs<T, R>(bufferSize: number, windowTime: number, project: (published: Observable<T>) => ObservableInput<R>): Operation<T, R>;
export function publishReplayAs<T, R>(arg1: any, arg2?: any, arg3?: any): Operation<T, R> {
  const project = arguments[arguments.length - 1];
  const bufferSize = arguments.length >= 2 ? arg1 : Number.POSITIVE_INFINITY;
  const windowTime = arguments.length >= 3 ? arg2 : Number.POSITIVE_INFINITY;
  return multicastAs(new ReplaySubject(bufferSize, windowTime), project);
}
