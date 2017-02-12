class Defer {

  resolveCallback = () => {};
  rejectCallback = () => {};

  then(resolveCallback = () => {}, rejectCallback = () => {}) {
    this.resolveCallback = resolveCallback;
    this.rejectCallback = rejectCallback;
  }

  resolve(data) {
    this.resolveCallback(data);
  }

  reject(data) {
    this.rejectCallback(data);
  }
}

export default class Promise {

  static resolve = function(data) {
    let defer = new Defer();
    setTimeout(() => {
      defer.resolve(data);
    })
    return defer;
  }

  static reject = function(data) {
    let defer = new Defer();
    setTimeout(() => {
      defer.reject(data);
    })
    return defer;
  }

  defer = new Defer();

  constructor(fn = () => {}) {

    setTimeout(() => {
      fn.call(null, data => {
        this.defer.resolve(data);
      }, data => {
        this.defer.reject(data);
      });
    });

    return this.defer;
  }

}
