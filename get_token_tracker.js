const cheerio = require("cheerio"); // khai báo module cheerio

const request = require("request-promise"); // khai báo module request-promise
const fs = require("fs");
request(
    `https://etherscan.io/address/0x80869268ea6d3c45c909fef77bf91f182002d576#code`,
    (errorTokenPage, responseTokenPage, htmlTokenPage) => {
        if (!errorTokenPage && responseTokenPage.statusCode == 200) {
            const $_token = cheerio.load(htmlTokenPage);
            // console.log($_token("#adsfkfjqhwejklrnfasjkldhfvi1234").length);
            console.log($_token("#ContentPlaceHolder1_tr_tokeninfo").length);
            // $_token("#ContentPlaceHolder1_tr_tokeninfo").each((index, el) => {
            //     console.log(
            //         $_token(el).find(".col-md-8").text().split("> ")[1]
            //     );
            //     // console.log(typeof el);
            // });
        }
    }
);
