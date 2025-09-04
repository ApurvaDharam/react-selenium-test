pipeline {
    agent any

    tools {
        nodejs "NodeJS_16"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ApurvaDharam/react-selenium-test.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start React App') {
            steps {
                script {
                    // Run in background
                    sh 'nohup npm start & sleep 10'
                }
            }
        }

        stage('Run Selenium Tests') {
            steps {
                sh 'npm run test:ui'
            }
        }
    }

    // post {
    //     always {
    //         junit '**/test-results.xml'
    //     }
    // }
}
