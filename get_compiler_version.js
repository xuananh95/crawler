const cheerio = require("cheerio"); // khai báo module cheerio

const request = require("request-promise"); // khai báo module request-promise

request(
    "https://etherscan.io/address/0x80869268ea6d3c45c909fef77bf91f182002d576#contracts",
    (errorMainPage, responseMainPage, htmlMainPage) => {
        if (!errorMainPage && responseMainPage.statusCode == 200) {
            const $_main = cheerio.load(htmlMainPage); // load HTML
            // console.log(typeof $_main(".row"));
            // console.log("----------------Row---------------");
            // console.log($_main(".row").text());
            $_main(".row").each((index, el) => {
                if ($_main(el).text().includes("Compiler Version")) {
                    if (!$_main(el).hasClass("mb-5")) {
                        console.log(JSON.stringify($_main(el).text()));
                        console.log($_main(el).text().split("\n\n")[1]);
                    }
                }
            });
        } else {
            // console.log(errorMainPage);
        }
    }
);
