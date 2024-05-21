import { StudentModel } from './schema.model';
import { Student } from './student.interface';

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentsFromDB = async (_id: string) => {
  const result = await StudentModel.findOne({ _id });
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
