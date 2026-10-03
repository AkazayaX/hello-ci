pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    triggers {
        // Polls GitHub for changes every 2 minutes
        pollSCM('H/2 * * * *')
    }

    environment {
        // Points to the Selenium standalone container on the shared Docker network
        SELENIUM_REMOTE_URL = 'http://selenium:4444/wd/hub'
        APP_URL = 'http://jenkins:3000'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Unit Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('UI Test') {
            steps {
                // Runs end-to-end Selenium tests
                sh 'npm run test:e2e'
            }
        }
    }

    post {
        always {
            // Collects and publishes JUnit XML test result reports in Jenkins
            junit allowEmptyResults: true, testResults: '**/test-results.xml'
        }
    }
}