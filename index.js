#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const Reset = "\x1b[0m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Underscore = "\x1b[4m";
const Blink = "\x1b[5m";
const Reverse = "\x1b[7m";
const Hidden = "\x1b[8m";
const FgBlack = "\x1b[30m";
const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgBlue = "\x1b[34m";
const FgMagenta = "\x1b[35m";
const FgCyan = "\x1b[36m";
const FgWhite = "\x1b[37m";
const BgBlack = "\x1b[40m";
const BgRed = "\x1b[41m";
const BgGreen = "\x1b[42m";
const BgYellow = "\x1b[43m";
const BgBlue = "\x1b[44m";
const BgMagenta = "\x1b[45m";
const BgCyan = "\x1b[46m";
const BgWhite = "\x1b[47m";
// Initialize ser Balance and pin code
let myDollar = "$";
let myBalance = 10000;
let myPin = 12345;
console.log(chalk.blue(`\n \t${FgMagenta}<---Welcome To AbdulRehman Atm Machine---->\n`));
const answers = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.red("Enter Your Pin Code:")
    },
]);
if (answers.pin === myPin) {
    console.log(chalk.green(`\nSuccessfully Your Pin Code Is Correct!\n`));
    // console.log(`Your Current Balance is ${myBalance}`);
    const operationAns = await inquirer.prompt([
        {
            type: "list",
            name: "operation",
            message: `Select Your An operation`,
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawmethod",
                type: "list",
                message: "Select A Withdrawal Method:",
                choices: ["Fast Cash", "Enter Your Amount"]
            }
        ]);
        if (withdrawAns.withdrawmethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select Amount",
                    choices: ["1000", "2000", "3000", "4000", "5000", "10000", "500000", "600000"]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk.red("Insufficient Balance"));
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} Withdraw successfully `);
                console.log(`Your Remaining Balance is ${myBalance} `);
            }
        }
        else if (withdrawAns.withdrawmethod === "Enter Your Amount") {
            const amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter your amount to Withdraw:"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount}  Withdraw Successfully`);
                console.log(`you remaining Balance is ${myBalance} `);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Balance is ${myBalance}`);
    }
}
else {
    console.log(chalk.red("Your Pin Is Incorrect, Try Again"));
}
