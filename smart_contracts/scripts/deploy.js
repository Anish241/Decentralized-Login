

const main = async () => {
  const User = await hre.ethers.getContractFactory("User");
  const user = await User.deploy();

  await user.deployed();
  console.log("Transactions deployed to:", user.address);
}




const runMain = async () => {
  try{
    await main()
    process.exit(0)

  }catch(error){
    console.log(error)
    process.exit(1)
  }
}

runMain();
