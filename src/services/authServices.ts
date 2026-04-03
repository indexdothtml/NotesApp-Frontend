export async function getCurrentUser() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("get user details");
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

export async function sendOTP(email: string) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`${email}`);
    }, 3000),
  );

  return {
    success: true,
    validTill: 60000,
    error: "",
  };
}

export async function verifyOTP(otp: string) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`${otp}`);
    }, 3000),
  );

  return {
    success: true,
    error: "",
  };
}

export async function getOTPStatus(email: string) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`${email}`);
    }, 3000),
  );

  return {
    success: true,
    validTill: 20000,
  };
}

export async function userSignupService(
  name: string,
  email: string,
  password: string,
) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`${name} ${email} ${password}`);
    }, 3000),
  );
  return {
    success: true,
    data: {
      id: "1",
      name: "Abhi K",
      email: "abhi@test.com",
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
