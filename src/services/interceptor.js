const interceptor = ax => {
      ax.interceptors.request.use(
        config => {
          const HeaderConfig = config;
    
          HeaderConfig.headers = {
          };
          return HeaderConfig;
        },
    
        error => {
          Promise.reject(error);
        }
      );
    };
    
    export default interceptor;
    