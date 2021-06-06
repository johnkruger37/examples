// see https://sdk.dfinity.org/docs/base-libraries/principal
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";

actor {
    // TODO What is ({caller}) -VS- (msg) ?
    //   from https://github.com/krpeacock/auth-client-demo/blob/main/src/whoami/main.mo
    //   VS   https://github.com/dfinity/internet-identity/blob/main/demos/whoami/whoami.mo
    public query ({caller}) func greet() : async Principal { // Text {
        Debug.print("hey");
        // return "Hello, " // # Principal.toText(caller)
        return caller
    };
};
