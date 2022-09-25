// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./MmsToken.sol";

contract MmsTokenSale {
    address payable admin;
    MmsToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;

    event Sell(address _buyer, uint256 _amount);

    constructor(MmsToken _tokenContract, uint256 _tokenPrice) {
        admin = payable(msg.sender);
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    function multiply(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x);
    }

    function buyTokens(uint256 _numberOfTokens) public payable {
        require(msg.value == multiply(_numberOfTokens, tokenPrice));
        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens); 
        require(tokenContract.transfer(msg.sender, _numberOfTokens));

        tokensSold += _numberOfTokens;

        emit Sell(msg.sender, _numberOfTokens);
    }

    function endSale() public {
        require(msg.sender == admin);
        require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this)))); 

        // selfdestruct(payable(admin)); //admin=>payable(admin)

        // https://stackoverflow.com/questions/68757825/another-solidity-error-returned-values-arent-valid-did-it-run-out-of-gas
        // transfer the balance to the admin
        admin.transfer(address(this).balance);
    }
}