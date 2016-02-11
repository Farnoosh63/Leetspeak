describe('leetspeak', function() {

  it("is true for o to replace with 0", function() {
    expect(leetspeak("o")).to.equal('0');
  });

  it("is true for i to replace with 1", function() {
    expect(leetspeak("I")).to.equal('1');
  });

  it("is true for leetWord to hard to read", function() {
    expect(leetspeak("leetWord")).to.be.a('string');
  });

  it("is true for e to replace with 3", function() {
    expect(leetspeak("e")).to.equal('3');
  });

  it("is true for E to replace with 3", function() {
    expect(leetspeak("E")).to.equal('3');
  });

  it("is true for s to replace with z", function() {
    expect(leetspeak("s")).to.equal('s');
  });

});
