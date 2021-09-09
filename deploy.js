const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const{ interface, bytecode}=require('./compile');
const provider=new HDWalletProvider(
  'minute genius sibling lemon margin virus embark size width notice notice rare',
  'https://rinkeby.infura.io/v3/cb711afa9bd94fa49c2d66f2893b7d0c'
);
const web3= new Web3(provider);
const deploy = async()=>{
  const accounts=await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode  })
    .send({gas: '1000000', from:accounts[0]});
  console.log(interface);
  console.log('Console deployed to',result.options.address);
};
deploy();
