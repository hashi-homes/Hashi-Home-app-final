// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PropertyListing {
    struct Property {
        uint256 id;
        address owner;
        string name;
        string location;
        uint256 price;
        uint256 expectedYield;
        bool isListed;
    }

    mapping(uint256 => Property) public properties;
    uint256 public propertyCount;

    event PropertyListed(uint256 indexed id, address indexed owner, string name, uint256 price);

    function listProperty(string memory _name, string memory _location, uint256 _price, uint256 _expectedYield) public {
        propertyCount++;
        properties[propertyCount] = Property(
            propertyCount,
            msg.sender,
            _name,
            _location,
            _price,
            _expectedYield,
            true
        );

        emit PropertyListed(propertyCount, msg.sender, _name, _price);
    }

    function getProperty(uint256 _id) public view returns (Property memory) {
        require(_id > 0 && _id <= propertyCount, "Invalid property ID");
        return properties[_id];
    }

    function getAllProperties() public view returns (Property[] memory) {
        Property[] memory allProperties = new Property[](propertyCount);
        for (uint256 i = 1; i <= propertyCount; i++) {
            allProperties[i - 1] = properties[i];
        }
        return allProperties;
    }
}

