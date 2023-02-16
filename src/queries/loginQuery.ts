import config from "../config";
import { User } from "../redux/reducers/userReducer";
import { LoginInput } from "../pages/login/components/LoginForm/LoginForm";

export function loginQuery(input: LoginInput) {
  // This return 404 error, maybe I did something wrong
  // return fetch(`${config.apiEndpoint}/login`, { method: "POST" }).then(
  //   (response) => response.json()
  // );
  return new Promise<{ data: User }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: {
            firstName: "Neo",
            lastName: "Andersen",
            token: "randomToken",
          },
        }),
      1000
    )
  );
}
