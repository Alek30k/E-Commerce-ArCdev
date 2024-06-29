"use server";

import { wixClientServer } from "./wixClientServer";

export const updateUser = async (formData: FormData) => {
  const wixClient = await wixClientServer();

  const id = formData.get("id") as string;
  if (!id || id.trim() === "") {
    // Handle missing or empty ID
    console.error("Missing or empty user ID");
    return; // Or redirect to login or error page
  }
  const username = formData.get("username") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  try {
    const response = await wixClient.members.updateMember(id, {
      contact: {
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        phones: [phone] || undefined,
      },
      loginEmail: email || undefined,
      profile: { nickname: username || undefined },
    });

    // console.log(response);
  } catch (err) {
    console.log(err);
  }
};
