pipeline {
    agent any
    tools { nodejs 'node20' }
    stages {
        stage('Install') { steps { bat 'npm install' } }
        stage('Test') { steps { bat 'npm test' } }
    }
}