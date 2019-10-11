const fs = require("fs");

const { fetchUsersAndWriteToFile } = require("../exercises/04_basicChaining");

describe("Basic chaining Test", () => {
  describe("fetchUsersAndWriteToFile", () => {
    const readFilePath = "files/read/userId.txt";
    const writeFilePath = "files/write/userName.txt";

    beforeEach(() => {
      fs.writeFileSync(writeFilePath, "");
    });

    afterEach(() => {
      fs.writeFileSync(writeFilePath, "");
    });

    test("should return the promise created by the entire chain", () => {
      const result = fetchUsersAndWriteToFile(readFilePath, writeFilePath);
      expect(result.constructor.name).toBe("Promise");
    });

    test("should eventually write a user name to a file", () => {
      return fetchUsersAndWriteToFile(readFilePath, writeFilePath).then(() => {
        const userNames = fs.readFileSync(writeFilePath, "utf8");
        expect(userNames).toBe("이정도\n김재완\n김성은\n이주연\n구일모\n");
      });
    });
  });
});
