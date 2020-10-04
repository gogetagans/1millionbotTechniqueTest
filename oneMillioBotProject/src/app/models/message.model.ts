export interface IMessage<T> {
  userFrom: number;
  type: number;
  content: T;
}
