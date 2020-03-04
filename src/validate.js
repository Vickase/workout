export const validate = ({ exercise, repeticiones, sets }) => {
  if (!exercise) return false;
  if (!repeticiones || isNaN(repeticiones)) return false;
  if (!sets || isNaN(sets)) return false;
  return true;
};
