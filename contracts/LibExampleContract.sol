//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
//import "./Lib/StringConcat.sol";
//import "./Lib/Uint.sol";

import {StringConcat} from "./Lib/StringConcat.sol";
import {Uint} from "./Lib/Uint.sol";


contract LibExampleContract{

    // Extend funcation using "For" keyword.
    // Syntax
    //using <libraryName> for <dataType>
    using Uint for uint;
        

    function stringConcat(string memory _value1,string memory _value2) public pure returns(string memory){
        return StringConcat.concatenate(_value1, _value2);
    }

    function getPow(uint _value1,uint _value2) public pure returns(uint){
        return _value1.pow(_value2);
    }

}