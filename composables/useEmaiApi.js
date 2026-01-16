import { id } from "ethers";

export function useEmaiApi() {
  const sendWelcomeEmail = (email, nickname) => $fetch(`/api/email/auth/send-welcome`,{
      method: 'POST',
      body: {
        email: email,
        nickname: nickname
      }
    });

  return {
    sendWelcomeEmail
  };
}