const MmsToken = artifacts.require("./MmsToken.sol");
const TokenSale = artifacts.require("./TokenSale.sol");
// token price is 0.001 ETH
var tokenPrice = 1000000000000000; // in wei

module.exports = async function (deployer) {
  await deployer.deploy(MmsToken, 1000000);
  await deployer.deploy(TokenSale, MmsToken.address, tokenPrice);
};
