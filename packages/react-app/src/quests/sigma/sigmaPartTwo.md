# Part One: Setup (30 mins)

[![IMAGE ALT TEXT](https://cdn.loom.com/sessions/thumbnails/4b8c7a4d3a2349ddb00b5d9754239093-with-play.gif)](https://www.loom.com/embed/4b8c7a4d3a2349ddb00b5d9754239093?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true "Video Title")

## Before joining the stream 🚨

- Ensure you have a IDE such as Visual Code Studio or Sublime

## Context

In this section we will be using a tool suite called Hardhat to simulate the Smart Contract using simple Javascript + Solidity.

### Hardhat Install

- Allows for a full suite of testing for Blockchain Development
- Initialize package.json and node modules.
- Official Hardhat [Getting Started Guide](https://hardhat.org/getting-started/)

```jsx
// Do this in your coding directory / desktop.
mkdir sigma_dome
cd sigma_dome
npm init -y
npm install --save-dev hardhat
npx hardhat
```

![LINK](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/56186afc-a41d-4d06-9e3f-64ba7f661eca/Untitled.png)

### Playing with Hardhat & Testing It

Here we will go through the Greeter.sol file to understand the code.

```jsx
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0; // Compiler Version

import "hardhat/console.sol"; // Hardhar is cool and allows console.logs()

contract Greeter {
    string private greeting; // initialize a variable with the type of string

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
```

Try and understand each line of the .sol file here.

### Testing it

Should be located in the "contracts" folder and we will go through these commands

- **Accounts**
  - This shows the Blockchain accounts we will testing with
- **Compile**
  - Compiles check if this code will work on the Blockchain machine we call the EVM
- **Test**
  - Testing is super duper important since we will be playing with peoples \\$\\$\$
- **Run Scripts**
  - Allows for us to run + see the console.logs() + deploy it

```jsx
npx hardhat accounts
npx hardhat compile
npx hardhat test
npx hardhat run scripts/sample-script.js
```

---
