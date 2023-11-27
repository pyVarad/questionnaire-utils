import inquirer from 'inquirer';
import { Questions } from '../models/questions.js';

const data: { [id: string]: string } = {};

/**
 * Prepare questions.
 * @param availableQuestions
 * @returns
 */
const prepareQuestions = (availableQuestions: Questions[]) => {
    const curatedQuestions: Questions[] = [];
    availableQuestions.map((question) => {
        curatedQuestions.push({
            type: question.type,
            name: question.name,
            message: question.message,
            default: question.default,
            choices: question.choices,
            validate: question.validate
        });
    });

    return curatedQuestions;
};

/**
 * Ask a question in a interactive way.
 * @param question
 * @returns
 */
export const askQuestions = async (
    question: Questions[]
): Promise<{ [id: string]: string }> => {
    const curatedListOfQuestions = prepareQuestions(question);
    await inquirer.prompt(curatedListOfQuestions).then(async (answers) => {
        Object.assign(data, { ...answers });
        await question.reduce(async (accumulator, record) => {
            await accumulator;
            if (record.next) {
                const selectedOption = data[record.name];
                await askQuestions(
                    record.next.filter(
                        (nextLevelQuestions) =>
                            record.name in nextLevelQuestions &&
                            !(
                                nextLevelQuestions as unknown as {
                                    [id: string]: string;
                                }
                            )[record.name].indexOf(selectedOption)
                    )
                );
            }
        }, Promise.resolve());
    });

    return data;
};
