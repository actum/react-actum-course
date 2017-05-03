export const minLength = (text, length) => {
    return text.length >= length ? null : 'Too short';
};

export const maxLength = (text, length) => {
    return text.length < length ? null : 'Too big';
};