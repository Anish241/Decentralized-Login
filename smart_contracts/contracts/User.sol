// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract User {

uint256 userCount;

struct UserData {
    string username;
    bytes32 passwordHash; // store password as a hashed value
    bool registered;
}


UserData [] public users;

//register a user
function registerUser(string memory _username, string memory _password) public returns (bool) {
    // check if user already exists
    for (uint256 i = 0; i < users.length; i++) {
        if (keccak256(abi.encodePacked(users[i].username)) == keccak256(abi.encodePacked(_username))) {
            return false;
        }
    }
    bytes32 passwordHash = keccak256(abi.encodePacked(_password)); // hash the password
    users.push(UserData(_username, passwordHash, true));
    userCount++;
    return true;
}

//login a user
function loginUser(string memory _username, string memory _password) public view returns (bool) {
    bytes32 passwordHash = keccak256(abi.encodePacked(_password)); // hash the input password
    for (uint256 i = 0; i < users.length; i++) {
        if (keccak256(abi.encodePacked(users[i].username)) == keccak256(abi.encodePacked(_username))) {
            if (users[i].passwordHash == passwordHash) { // compare hashed password
                return true;
            }
        }
    }
    return false;
}

//get user count
function getUserCount() public view returns (uint256) {
    return userCount;
}
}