import {
  UserPasswordCredential,
  UserPasswordAuthProviderClient
} from "mongodb-stitch-browser-sdk";
import { client } from "./Stitch";

export const login = async (email, password) => {
  const credential = new UserPasswordCredential(email, password);

  return client.auth.loginWithCredential(credential);
};

const emailPassClient = client.auth.getProviderClient(
  UserPasswordAuthProviderClient.factory
);

export const register = async user => {
  return emailPassClient.registerWithEmail(user.email, user.password);
};

export const confirmUser = async o => {
  return emailPassClient.confirmUser(o.token, o.tokenId);
};

export const sendPasswordResetEmail = async email => {
  return emailPassClient.sendResetPasswordEmail(email);
};

export const resetPassword = async o => {
  return emailPassClient.resetPassword(o.token, o.tokenId, o.newPassword);
};
