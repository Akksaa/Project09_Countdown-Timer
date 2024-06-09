import inquirer from "inquirer";
import chalk from "chalk";
let Timer = chalk.magentaBright.italic.bold(`<<<<<<<<<< WELCOME TO COUNTDOWN TIMER >>>>>>>>>>\n`);
console.log(Timer);
(async () => {
    const { timeSpan } = await inquirer.prompt([
        {
            name: `timeSpan`,
            type: `number`,
            message: chalk.blueBright.italic(`\nKindly Enter The Period Of Time In Seconds For Timer:`),
            validate: (input) => input > 0 || chalk.redBright.italic.bold(`\nPlease Enter A valid Period of Time!`)
        }
    ]);
    console.log(chalk.yellowBright.italic.bold(`\nTimer Starts Now!`));
    for (let i = timeSpan; i > 0; i--) {
        if (i <= 9) {
            console.log(chalk.greenBright(`00:0${i}`));
        }
        else {
            console.log(chalk.greenBright(`00:${i}`));
        }
        let end = await new Promise(resolve => setTimeout(resolve, 1000));
    }
    ;
    console.log(chalk.redBright.italic.bold(`Timer Has Ended!`));
})();
