pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    triggers {
        pollSCM('H/2 * * * *')
    }

    environment {
        SELENIUM_REMOTE_URL = 'http://selenium:4444/wd/hub'
        APP_URL = 'http://jenkins:3000'
        IMAGE_NAME = 'task-tracker-app'
        CONTAINER_NAME = 'task-tracker-prod'
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
                sh 'npm run test:e2e'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop $CONTAINER_NAME || true'
                sh 'docker rm $CONTAINER_NAME || true'
                sh 'docker run -d -p 4000:3000 --name \(CONTAINER_NAME --network ci-network\)IMAGE_NAME'
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: '**/test-results.xml'
        }
    }
}