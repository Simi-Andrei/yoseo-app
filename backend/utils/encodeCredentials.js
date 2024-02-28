export function encodeCredentials(username, password) {
  return btoa(`${username}:${password}`);
}
