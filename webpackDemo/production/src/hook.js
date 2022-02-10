export const hooks = async () => {
  const detail = document.querySelector("#detail");
  let fileHandler;
  async function writeFile(fileHandle, contents) {
    // Create a FileSystemWritableFileStream to write to.
    const writable = await fileHandle.createWritable();
    // Write the contents of the file to the stream.
    await writable.write(contents);
    // Close the file and write the contents to disk.
    await writable.close();
  }
  detail.onclick = async (e) => {
    let idStr = e.currentTarget.id;
    let beforeText = e.target.innerText;
    var detail = await prompt("请输入要替换的文案", beforeText);
    if (detail) {
      console.log(detail);
      const pickOpt = {
        types: [
          {
            description: "pug",
            accept: {
              "src/*": [".pug"],
            },
          },
        ],
        excludeAcceptAllOption: true,
        multiple: false,
      };
      [fileHandler] = await window.showOpenFilePicker(pickOpt);
      console.log("2");
      const file = await fileHandler.getFile();
      const contents = await file.text();
      await writeFile(fileHandler, contents.replace(beforeText, detail));
    }
  };
};
