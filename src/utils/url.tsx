export const BaseURL = "https://shippex-demo.bc.brandimic.com/api/method";

// axios.interceptors.request.use(
//   (config: any) => {
//     const { origin } = new URL(config.url);
//     const allowedOrigins = [BaseURL];
//     const token = ""; // Add your token here if needed

//     if (allowedOrigins.includes(origin)) {
//       config.headers.authorization = `Bearer ${token}`;
//       config.headers["Content-Type"] = "application/json";
//       config.headers["Cookie"] =
//         "full_name=Tasty%20Test; sid=994236c95d3cf2129f6b7ff6d39c29e186f329ee9ca312ea1fa0841c; system_user=yes; user_id=test%40brandimic.com; user_image=";
//     }

//     return config;
//   },
//   (error: any) => {
//     return Promise.reject(error);
//   }
// );
