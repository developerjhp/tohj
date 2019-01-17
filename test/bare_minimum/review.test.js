const { expect } = require('chai');
const path = require('path');
const fs = require('fs');

describe('REVIEW.md', function () {
    it('should review on REVIEW.md\n Bare Minimum을 완료하셨다면 REVIEW.md를 작성하고 Pull request를 만든 뒤 Advanced 진행부탁드립니다!', function() {
      let rawFilepath = path.join(__dirname, '../files/raw_review.md')
      let studentFilepath = path.join(__dirname, '../../REVIEW.md')

      let rawBuf = fs.readFileSync(rawFilepath);
      let studentBuf = fs.readFileSync(studentFilepath);
      expect(rawBuf.equals(studentBuf)).to.be.false
    })
});