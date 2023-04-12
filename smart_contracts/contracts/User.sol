// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract User {

    uint256 userCount;
    
    struct UserData {
        string username;
        string password;
        bool registered;
    }
    
    
   //make an array of users


   UserData [] public users;

   //register a user

    function registerUser(string memory _username, string memory _password) public returns (bool) {
         // check if user already exists
            for (uint256 i = 0; i < users.length; i++) {
                if (keccak256(abi.encodePacked(users[i].username)) == keccak256(abi.encodePacked(_username))) {
                    return false;
                }
            }
         users.push(UserData(_username, _password, true));
         userCount++;
         return true;
    }

    //login a user

    function loginUser(string memory _username, string memory _password) public view returns (bool) {
        for (uint256 i = 0; i < users.length; i++) {
            if (keccak256(abi.encodePacked(users[i].username)) == keccak256(abi.encodePacked(_username))) {
                if (keccak256(abi.encodePacked(users[i].password)) == keccak256(abi.encodePacked(_password))) {
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
