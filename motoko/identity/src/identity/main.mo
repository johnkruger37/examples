// see https://sdk.dfinity.org/docs/base-libraries/principal
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";

actor {
    public /*query ({caller}) */ func greet() : async Text {
        Debug.print("hey");
        return "Hello, " // # Principal.toText(caller)
    };
};
