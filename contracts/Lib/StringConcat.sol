//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

library StringConcat{

    function concatenate(string memory _value1,string memory _value2) public pure returns(string memory){
        return string(abi.encodePacked(_value1,_value2));
    }
}