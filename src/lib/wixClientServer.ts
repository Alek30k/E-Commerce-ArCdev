import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { orders } from "@wix/ecom";
import { cookies } from "next/headers";
import { members } from "@wix/members";

export const wixClientServer = async () => {
  let refreshToken = null;
  try {
    const cookieStore = cookies();
    const refreshTokenCookie = cookieStore.get("refreshToken");
    if (refreshTokenCookie) {
      refreshToken = JSON.parse(refreshTokenCookie.value || "null");
    } else {
      console.error("Cookie refreshToken no encontrada");
    }
  } catch (error) {
    console.error("Error al leer la cookie refreshToken:", error);
    throw new Error("Error al leer la cookie refreshToken");
  }
  try {
    const wixClient = createClient({
      modules: {
        products,
        collections,
        orders,
        members,
      },
      auth: OAuthStrategy({
        clientId: "4d78749b-506c-4c11-bf41-27e528e4f58a",
        tokens: {
          refreshToken,
          accessToken: { value: "", expiresAt: 0 },
        },
      }),
    });
    return wixClient;
  } catch (error) {
    console.error("Error al crear el cliente de Wix:", error);
    throw new Error("Error al crear el cliente de Wix");
  }
};
