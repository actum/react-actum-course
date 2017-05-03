import { minLength, maxLength } from './validationRules';

export default (props) => {
    const { title, text } = props;

    return {
        fields: ['title', 'text'],

        validations: {
            title: [
                [minLength, title, 5],
                [maxLength, title, 10]
            ],
            text: [[minLength, text, 5]]
        }
    }
}