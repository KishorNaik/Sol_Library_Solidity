//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

library Uint{

    function pow(uint _value1,uint _value2) public pure returns(uint){
        return _value1 ** _value2;
    }
}