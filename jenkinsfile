pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-flask-app'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Kodunuzu GitHub reposundan çekin
                    checkout scm
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Docker imajınızı oluşturun
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Docker konteynerini başlatın
                    docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").run(
                        "-d",
                        "-p 5000:5000"
                    )
                }
            }
        }
    }

    post {
        always {
            // Cleanup operations
            cleanWs()
        }
    }
}
