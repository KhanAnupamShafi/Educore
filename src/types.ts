export interface CourseType {
  name: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  topics: string[];
  schedule: {
    startDate: string;
    endDate: string;
    classDays: string[];
    classTime: string;
  };
}

export interface CourseDataResponse {
  _id: string;
  user_id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  topics: string[]; // Assuming topics is an array of strings
  schedule: {
    startDate: string;
    endDate: string;
    classDays: string[]; // Assuming classDays is an array of strings
    classTime: string;
  };
  __v: number;
}
