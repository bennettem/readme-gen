// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "Eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (license === "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "SIL") {
    return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
  } else if (license === "Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "Boost") {
    return "https://www.boost.org/LICENSE_1_0.txt";
  } else if (license === "BSD") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "Eclipse") {
    return "https://opensource.org/licenses/EPL-1.0";
  } else if (license === "GNU") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "IBM") {
    return "https://opensource.org/licenses/IPL-1.0";
  } else if (license === "ISC") {
    return "https://opensource.org/licenses/ISC";
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Mozilla") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license === "SIL") {
    return "https://opensource.org/licenses/OFL-1.1";
  } else if (license === "Unlicense") {
    return "http://unlicense.org/";
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache") {
    return "Apache License 2.0";
  } else if (license === "Boost") {
    return "Boost Software License 1.0";
  } else if (license === "BSD") {
    return "BSD 3-Clause License";
  } else if (license === "Eclipse") {
    return "Eclipse Public License 1.0";
  } else if (license === "GNU") {
    return "GNU GPL v3";
  } else if (license === "IBM") {
    return "BM Public License Version 1.0";
  } else if (license === "ISC") {
    return "ISC License (ISC)";
  } else if (license === "MIT") {
    return "The MIT License";
  } else if (license === "Mozilla") {
    return "Mozilla Public License 2.0";
  } else if (license === "SIL") {
    return "SIL Open Font License 1.1";
  } else if (license === "Unlicense") {
    return "The Unlicense";
  } else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  Please contact me with any questions

  *Email:
  ${data.email}

  *GitHub:
  https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
