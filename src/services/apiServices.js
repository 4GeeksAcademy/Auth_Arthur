const BASE_URL = import.meta.env.VITE_BACKEND_URL || "";

export const signup = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return {
      ok: response.ok,
      status: response.status,
      data,
    };
  } catch (error) {
    console.error("Error en signup:", error);
    return { ok: false, data: { error: "Error de conexion" } };
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return {
      ok: response.ok,
      status: response.status,
      data,
    };
  } catch (error) {
    console.error("Error en login:", error);
    return { ok: false, data: { error: "Error de conexion" } };
  }
};

export const getPrivate = async () => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return { ok: false, data: { error: "Token inválido" } };
  }
  try {
    const response = await fetch(`${BASE_URL}/api/private`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return {
      ok: response.ok,
      status: response.status,
      data,
    };
  } catch (error) {
    console.error("Error de autenticación:", error);
    return { ok: false, data: { error: "Error de conexión" } };
  }
};

export const deleteUser = async () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return { ok: false, data: { error: "Token inválido" } };
  }

  try {
    const response = await fetch(`${BASE_URL}/api/user`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return {
      ok: response.ok,
      status: response.status,
      data,
    };
  } catch (error) {
    console.error("Algo ha salido mal", error);
    return { ok: false, data: { error: "Error de conexión" } };
  }
};
