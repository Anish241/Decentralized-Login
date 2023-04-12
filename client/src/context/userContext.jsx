import React, { createContext, useState, useContext } from "react";
import { ethers } from "ethers";
import { contractAddress,contractABI } from "../utils/constants";

export const UserContext = React.createContext(); 
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const userContract = new ethers.Contract(contractAddress, contractABI, signer);

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const registerUser = async (userName, password) => {
   try {
    const gasLimit = 1000000;
    const res=await userContract.registerUser(userName, password,{gasLimit,});
     if (res) {
      alert("User registered succesfully")}
      else{
        alert("User already exists")
      }


    
   } catch (error) {



    console.log(error);
    setError(error);
    
   }
  };

  const loginUser = async (userName,password) => {


    try {

      const gasLimit = 1000000;

    const _islogin = await userContract.loginUser(userName,password,{gasLimit,});

    if(_islogin)
    {
      alert("User logged in succesfully")
    }

    else{
      alert("Invalid Credentials")
    }
      
    } catch (error) {

      console.log(error);
      
    }
 
  };

  return (
    <UserContext.Provider value={{ user, error, registerUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
