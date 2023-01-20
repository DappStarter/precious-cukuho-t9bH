require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remain huge hidden prize bridge gather'; 
let testAccounts = [
"0xac4fe3fd7488684984fb607ea7b2d5229a83336795df819236720cd617fcb8d0",
"0xf46d760886676b8a3982bf50ab845400bd9068a833bae0925843dc4e50442ad4",
"0x4befcc19f45c315b4b44d5bc22d0bcce5b680dba55ba83b6a30c6c6c643105a7",
"0xdee87a06f7b268c99d100cd1803ecc2d84c036891b1c10fde84e7331d12d9dc6",
"0xf071ec257cbbdf63ac9b5c80ca630327458b3b1eb11f962443ed4feedaf695f5",
"0x45b087cbb1c81d8c6db723b05df95b2e4e85a4cbd3faf93159a0bab281dedf3a",
"0x0ba148d77671ba8f380a4da86e793beffe7f4adea4773b1ebd6aa2b3d6858056",
"0xe5d18380c05fe2ac66ec8046b3ded946e6a4c188e42881fde3998400120df143",
"0x0b8b150fc23b71aee5944e470826749f2782ad8c494af9777834885a7f986e0e",
"0x7f2d350d870525af4248d492cfac9b6195a411696c8f2773afc4f4c49398a401"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

