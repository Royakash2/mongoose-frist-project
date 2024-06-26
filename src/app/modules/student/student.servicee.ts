
import { Student } from './schema.model';
import { TStudent } from './student.interface';

const createStudentIntoDb = async (studentData: TStudent) => {
  if(await Student.isUserExists(studentData.id)){
    throw new Error('user already exists')
  }
  const result = await Student.create(studentData);
  

  // const student = new Student(studentData);
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!');
  // }
  //  const result = await student.save(); //built in instance method
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
