node {
    stages {
        stage('One'){
            agent {
                docker{
                    image 'ubuntu'
                }
            }
            steps{
                git 'https://github.com/adarsh62656/PHPapp.git'
            }
        }    
    }
}