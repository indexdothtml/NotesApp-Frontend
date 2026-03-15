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
      fullName: "Abhi K",
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
