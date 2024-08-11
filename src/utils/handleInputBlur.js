export const handleInputBlur = (value, setter) => {
    if (!value) {
        setter(prev => ({ ...prev, error: 'Trường này không được để trống' }));
    }
};
