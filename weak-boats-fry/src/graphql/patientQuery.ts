import { gql } from 'graphql-tag';

const GET_PATIENT_DATA_QUERY = gql`
  query GetPatientData {
    patient {
      id
      data {
        heartrate
        respirationRate
        bloodPressure
        timestamp
      }
    }
  }
`;

const GET_LATEST_PATIENT_DATA_QUERY = gql`
  query GetLatestPatientData {
    patient {
      id
      latestData: data(limit: 1) {
        heartrate
        respirationRate
        bloodPressure
        timestamp
      }
    }
  }
`;

const GET_PATIENT_DATA_IN_RANGE_QUERY = gql`
  query GetPatientDataInRange {
    patient {
      id
      dataInRange: data(from: "2024-03-01T00:00:00.000Z", to: "2024-03-02T00:00:00.000Z") {
        heartrate
        respirationRate
        bloodPressure
        timestamp
      }
    }
  }
`;

export {
  GET_PATIENT_DATA_QUERY,
  GET_LATEST_PATIENT_DATA_QUERY,
  GET_PATIENT_DATA_IN_RANGE_QUERY,
};
