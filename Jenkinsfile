pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/vuser02454/new.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Building the image as 'my-image'
                bat 'docker build -t QR .' 
            }
        }

        stage('Run Container') {
            steps {
                script {
                    /* 1. 'bat' instead of 'sh'
                       2. '|| exit 0' is the Windows way to say 'ignore if it doesn't exist'
                       3. Using 'my-image' to match the build stage
                    */
                    bat 'docker rm -f qr-container || exit 0'
                    bat 'docker run -d -p 3000:3000 --name qr-container QR'
                }
            }
        }
    }
}

