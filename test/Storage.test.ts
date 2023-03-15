
const Storage = artifacts.require('Storage');
const { expect } = require('chai');

contract('Storage', function (accounts) {
  beforeEach(async function () {
    this.Storage = await Storage.new({ from: accounts[0] });
  });

  it('default value is 0', async function () {
      var ret = await this.Storage.retrieve();
      expect(String(ret)).to.eql('0');
    });


    it('store/retrieve is working', async function () {
      await this.Storage.store(15);
      var ret = await this.Storage.retrieve();
      expect(String(ret)).to.eql('15');
    });

    it('emits a storage event', async function () {
      const ret = await this.Storage.store(15)
      expect(ret.logs[0].event).to.be.equal("StoreEvent")
    });
});
