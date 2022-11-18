const PDFMerger = require('pdf-merger-js');

let merger = new PDFMerger();

const mergePdfs = async (p1, p2) => {
    await merger.add(p1);
    await merger.add(p2);
    let d = new Date().getTime()
    await merger.save(`public/${d}.pdf`); //save the pdfs under in this name to get to know when it is downloaded
    return d;
}

module.exports = { mergePdfs }