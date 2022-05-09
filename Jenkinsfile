pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS=credentials('13cf96f7-55a2-4dcf-82a7-18801da2b7a1')
    }
    stages{
        stage('Build'){
            steps {
				sh 'docker build -t adarsh62656/php-app:latest .'
                sh 'docker pull adarsh62656/mysql'
			}
        }
        stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}
        stage('Push') {

			steps {
				sh 'docker push adarsh62656/php-app:latest'
			}
		}
        stage('Deploy'){
            steps{
                sh 'docker rm --force nodeapp'
                sh 'docker rmi adarsh62656/php-app:latest'
                sh 'docker run -d -p 3000:3000 --name nodeapp adarsh62656/php-app:latest'
                
            }
        }
    }
}   