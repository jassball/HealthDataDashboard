import gql from "graphql-tag";

// Define your schema


const typeDefs = gql`
  type Patient {
    id: ID!
    data: [PatientData!]!
  }

  type PatientData {
    heartrate: Float!
    respirationRate: Float!
    bloodPressure: String!
    timestamp: String!
  }

  type Query {
    patient: Patient!
  }
`;

// Function to generate random values within a range
const getRandomValueInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

// Function to generate mock patient data for a given timestamp
const generateMockPatientData = (timestamp: string): PatientData => {
  return {
    heartrate: getRandomValueInRange(60, 100), // Random heartrate between 60 and 100 BPM
    respirationRate: getRandomValueInRange(12, 20), // Random respiration rate between 12 and 20 breaths per minute
    bloodPressure: `${Math.floor(getRandomValueInRange(90, 140))}/${Math.floor(getRandomValueInRange(60, 90))}`, // Random blood pressure values
    timestamp,
  };
};

// Generate mock data for sixty inputs
const generateMockData = (): PatientData[] => {
  const mockData: PatientData[] = [];
  for (let i = 0; i < 60; i++) {
    const timestamp = new Date(Date.now() - i * 1000).toISOString();
    mockData.push(generateMockPatientData(timestamp));
  }
  return mockData.reverse(); // Reverse the array to have the latest data first
};

// Implement resolvers
const resolvers = {
  Query: {
    patient: () => {
      return {
        id: "1",
        data: generateMockData(),
      };
    },
  },
};




  

// Export schema and resolvers
export { typeDefs, resolvers };
