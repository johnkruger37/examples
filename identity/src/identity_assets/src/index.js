import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as identity_idl, canisterId as identity_id } from 'dfx-generated/identity';

const agent = new HttpAgent();
const identity = Actor.createActor(identity_idl, { agent, canisterId: identity_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await identity.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
