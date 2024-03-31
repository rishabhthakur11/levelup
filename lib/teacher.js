export const isTeacher = (userId) => {
  return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
};
