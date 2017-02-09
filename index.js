let foo = async () => {
  let promise = new Promise(reslove => {
    setTimeout(() => {
      reslove('haha');
    }, 2000)
  })
  let res = await promise;
  return Promise.resolve(res);
};

foo().then(res => console.log(res));
