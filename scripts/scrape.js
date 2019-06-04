// scrape script

const axios = require("axios");
const cheerio = require("cheerio");

// This function will scrape the NYTimes website
const scrape = function() {
  // Scrape the NYTimes website
  return axios.get("http://www.nytimes.com").then(function(res) {
    let $ = cheerio.load(res.data);
    console.log("scraping");
    // Make an empty array to save our article info
    let articles = [];

    // Now, find and loop through each element that has the ".assetWrapper" class
    // (i.e, the section holding the articles)
    $(".assetWrapper").each(function(i, element) {
      // In each article section, we grab the headline, URL, and summary

      // Grab the headline of the article
      let head = $(this)
        .find("h2")
        .text()
        .trim();

      // Grab the URL of the article
      let url = $(this)
        .find("a")
        .attr("href");

      // Grab the summary of the article
      let sum = $(this)
        .find("p")
        .text()
        .trim();

      // So long as our headline and sum and url aren't empty or undefined, do the following
      if (head && sum && url) {
        // This section uses regular expressions and the trim function to tidy our headlines and summaries
        // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
        let headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        let sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        // Initialize an object we will push to the articles array
        let dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: "https://www.nytimes.com" + url
        };

        // Push new article into articles array
        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

// Export the function, so other files in our backend can use it
module.exports = scrape;
