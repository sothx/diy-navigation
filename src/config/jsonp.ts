import JSONP from 'jsonp';

export default (url: string, options: any) => {
  return new Promise((resolve, reject) => {
    return JSONP(
      url,
      {
        ...options,
        prefix: '',
      },
      (err, data) => {
        if (data) {
          resolve(data);
        } else {
          reject(err);
        }
      },
    );
  });
};
