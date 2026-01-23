import { id } from "ethers";

export function useEmaiApi() {
  const sendWelcomeEmail = (email, nickname, address) => $fetch(`/api/email/auth/send-welcome`,{
      method: 'POST',
      body: {
        email: email,
        nickname: nickname,
        address: address
      }
    });

  return {
    sendWelcomeEmail
  };
}