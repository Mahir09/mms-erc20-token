async function main() {
  const MmsToken = await ethers.getContractFactory("MmsToken");
  const TokenSale = await ethers.getContractFactory("TokenSale");
  var tokenPrice = 1000000000000000; // in wei

  // Start deployment, returning a promise that resolves to a contract object
  const krutik19it035 = await MmsToken.deploy(1000000);
  console.log(
    "Contract deployed to address: ",
    krutik19it035.address
  );
  console.log(krutik19it035);

  const tokensale = await TokenSale.deploy(krutik19it035.address, tokenPrice);
  console.log("Contract deployed to address: ", tokensale.address);
  console.log(tokensale);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
