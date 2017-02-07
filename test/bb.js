var testClass = new Aaa();

if(chai) {
    var expect = chai.expect;
    var assert = chai.assert;
}

describe('Test...', function(){
  it('test..', function(){
    assert(testClass.bb('dd') == "add", 'Error');
  });
});
