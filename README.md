# Formula 1 Predictor

## Overview

The **Formula 1 Predictor** is an evolving project designed to provide insights and predictions for Formula 1 racing. Built with Python Flask for the backend and React for the frontend, this application utilizes the Ergast API to fetch and display data related to Formula 1 drivers, teams, and races.

## Current Status

As of now, the project focuses on fetching and displaying data from the Ergast API. The backend, developed using Flask, handles API requests and data processing, while the React frontend presents the data in a user-friendly format.

## Current Features

- **Data Fetching:** Retrieve up-to-date information about Formula 1 drivers, including names, nationalities, and URLs for more details.
- **Dynamic Year Selection:** Automatically fetch data for the current year.
- **Interactive Table:** View driver information in a structured table format with clickable links.

## Future Plans

- **Predictive Analytics:** Implement machine learning models to predict race outcomes and driver performance.
- **Enhanced User Interface:** Improve the user interface with additional features and visualizations.
- **Expanded Data Coverage:** Include more comprehensive data such as race results, team statistics, and historical comparisons.

## Technologies Used

- **Backend:** Python Flask
- **Frontend:** React
- **API:** [Ergast API](https://ergast.com/mrd/)
- **Additional Libraries:** Requests (for API interaction), Axios (for HTTP requests in React)

## Installation

### Prerequisites

- Python 3.x
- Node.js and npm

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/formula-1-predictor.git
    cd formula-1-predictor/backend
    ```

2. Install Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Run the Flask application:
    ```bash
    python app.py
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install Node.js dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

## Usage

1. Start both backend and frontend servers.
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 

## Contact

For any questions or suggestions, please contact ajlabrdarevic@gmail.com(mailto:ajlabrdarevic@gmail.com).

