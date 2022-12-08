(async () => {
    let accounts = await web3.eth.getAccounts();
    console.log(accounts);
    let balance = await web3.eth.getBalance(accounts[0]);
    console.log('balance', balance);
    const balanceInEth = await web3.utils.fromWei(balance.toString(), "ether");
    console.log(balanceInEth);
})();