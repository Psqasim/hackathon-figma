"use server"

import { client } from "@/sanity/lib/client"

export async function createOrUpdateUser(userData: {
  id: string
  firstName: string
  lastName: string
  email: string
}) {
  try {
    const existingUser = await client.fetch(`*[_type == "user" && clerkId == $clerkId][0]`, { clerkId: userData.id })

    if (existingUser) {
      await client
        .patch(existingUser._id)
        .set({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
        })
        .commit()
    } else {
      await client.create({
        _type: "user",
        clerkId: userData.id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        createdAt: new Date().toISOString(),
      })
    }
  } catch (error) {
    console.error("Error creating or updating user:", error)
  }
}

