import { createThirdwebClient } from "thirdweb";

export const THIRDWEB_CLIENT = createThirdwebClient({
  // If not using Vite, then use `process.env.NEXT_PUBLIC_CLIENT_ID`
  clientId: import.meta.env.VITE_CLIENT_ID,
});
