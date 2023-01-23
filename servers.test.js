describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  it('should not add a new server without a name', function()
  {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  })
  it('should be able to add 2 people of the same name',function()
  {
    serverNameInput.value = 'Alice';
    submitServerInfo();
    expect(Object.keys(allServers).length).toBe(1);
    expect(allServers['server' + serverId].serverName).toBe('Alice');
    serverNameInput.value = 'Alice';
    submitServerInfo();
    expect(Object.keys(allServers).length).toBe(2);
    expect(allServers['server' + serverId].serverName).toBe('Alice');
    
  })
  it('should add correct number of rows after update',function(){
    serverNameInput.value = 'Alice';
    submitServerInfo();
    expect(serverTbody.childElementCount).toBe(1);
    serverNameInput.value = 'Alice';
    submitServerInfo();
    expect(serverTbody.childElementCount).toBe(2);
  })
  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    updateServerTable();
  });
});
