import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as identity_example_idl, canisterId as identity_example_canister_id } from 'dfx-generated/identity';
import { AuthClient } from "@dfinity/auth-client";

const init = async () => {
  const authClient = await AuthClient.create();

  if (await authClient.isAuthenticated()) {
    handleAuthenticated(authClient);
  }

  document.getElementById("clickMeBtn").addEventListener("click", async () => {
    handleLoginLogout(authClient);
  });
};

async function handleLoginLogout(authClient) {
  if (await authClient.isAuthenticated()) {
    await authClient.logout();
    document.getElementById("clickMeBtn").innerText = "Login!"
  } else {
    await authClient.login({
        onSuccess: async () => {
          handleAuthenticated(authClient);
        },
    });
  };
}

async function handleAuthenticated(authClient) {
  document.getElementById("clickMeBtn").innerText = "Logout"

  const identity = await authClient.getIdentity();
  const agent = new HttpAgent({ identity });
  const identity_example = Actor.createActor(identity_example_idl, {
    agent,
    canisterId: identity_example_canister_id,
  });

  const greeting = await identity_example.greet();
  document.getElementById("greeting").innerText = greeting;
  // document.getElementById("greeting").innerText = "OK";
}

init();
