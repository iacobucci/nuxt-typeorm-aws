// server/api/users.get.ts

import { getRepository } from "#typeorm";

export default defineEventHandler(async (event) => {
  const userRepository = await getRepository(User);

  const users = await userRepository.find();

  return {
    users,
  };
});
