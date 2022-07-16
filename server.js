const cheerio = require("cheerio"); // khai báo module cheerio

const request = require("request-promise"); // khai báo module request-promise

const fs = require("fs");
request(
    "https://etherscan.io/contractsVerified?filter=solc",
    (errorMainPage, responseMainPage, htmlMainPage) => {
        if (!errorMainPage && responseMainPage.statusCode == 200) {
            const $_main = cheerio.load(htmlMainPage); // load HTML

            $_main(".hash-tag").each((index, el) => {
                request(
                    `https://etherscan.io/${el.attribs.href}`,
                    (errorTokenPage, responseTokenPage, htmlTokenPage) => {
                        if (
                            !errorTokenPage &&
                            responseTokenPage.statusCode == 200
                        ) {
                            const $_token = cheerio.load(htmlTokenPage);
                            // console.log(
                            //     $_token("#ContentPlaceHolder1_tr_tokeninfo")
                            // );
                        }
                    }
                );
            });
        } else {
            console.log(errorMainPage);
        }
    }
);
