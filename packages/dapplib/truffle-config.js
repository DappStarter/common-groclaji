require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue recipe situate unaware hockey area olympic gift'; 
let testAccounts = [
"0xb0486f11e9eb01ab2311fd391ac93ef8df9a6a4d1f3c899249c8fd0d2f4d5fa1",
"0x19017a9a64d2188d5c14afae741b852c950a827a87404717a0ae2f2dbe1bb299",
"0x5996713fa4065c1f7bbaca88c01b744431beca25ef7e62bee06ad3fe93b19fd5",
"0x8e54c88142ab40c9b6c88858abddc2fe27ea7aed210f9093431e1ec5d19cbcbb",
"0xc9b6b050f96049b94d268149363447a6512c446aa43a7c49583643a12cc5068a",
"0x440dad0e6064e55661de2369181da2f30b4754bec9d62815063f07d8cb7f542e",
"0xe8e6231f9d01810dadff2f3d8b30a81d83ed65ec308b3c5e46624842f8d75f79",
"0x3f11a445960ca69538dfdec47c889510fd93dd39531e100baec534d90ca0dbdd",
"0x5581d5a85ebfea92f07f9f32a6585da1b5d6db857b9fdc5cde389f5fee09b0a7",
"0xaba1cabf3104fdc2569c5165ba8181ddb69b8735a6d6353ed54edda4edcaf183"
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
            version: '^0.5.11'
        }
    }
};
