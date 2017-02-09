class Defferred {

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
    let defferred = new Defferred();
    setTimeout(() => {
      defferred.resolve(data);
    })
    return defferred;
  }

  static reject = function(data) {
    let defferred = new Defferred();
    setTimeout(() => {
      defferred.reject(data);
    })
    return defferred;
  }

  defferred = new Defferred();

  constructor(fn = () => {}) {

    setTimeout(() => {
      fn.call(null, data => {
        this.defferred.resolve(data);
      }, data => {
        this.defferred.reject(data);
      });
    });

    return this.defferred;
  }

}
