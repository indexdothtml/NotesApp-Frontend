export async function userLoginService(identifier: string, password: string) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`${identifier} ${password}`);
    }, 3000),
  );
  return {
    success: true,
    data: {
      id: "1",
      name: "Abhi K",
      email: "abhi@test.com",
      username: "AK",
      createdAt: "2026-03-09T20:00:00Z",
      updatedAt: "2026-03-09T20:00:00Z",
    },
  };
}

export async function userLogoutService() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("logout");
    }, 3000),
  );
  return {
    success: true,
    data: null,
  };
}

export async function userSignupService(
  name: string,
  username: string,
  email: string,
  password: string,
) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`${name} ${username} ${email} ${password}`);
    }, 3000),
  );
  return {
    success: true,
    data: {
      id: "1",
      name: "Abhi K",
      email: "abhi@test.com",
      username: "AK",
      createdAt: "2026-03-09T20:00:00Z",
      updatedAt: "2026-03-09T20:00:00Z",
    },
  };
}

export async function userForgotPasswordService(email: string) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("forgot password");
    }, 3000),
  );
  return {
    success: true,
    data: {
      email,
    },
  };
}

export async function userValidatePasswordResetTokenService(token: string) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`${token}`);
    }, 3000),
  );
  return {
    success: true,
    data: null,
  };
}

export async function userResetPasswordService(newPassword: string) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`${newPassword}`);
    }, 3000),
  );
  return {
    success: true,
    data: null,
  };
}
