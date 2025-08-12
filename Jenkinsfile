pipeline {
    agent any
tools {
  nodejs 'node'
}
    stages {
        stage('Git clone') {
            steps {
               git branch: 'main',
                    credentialsId: 'github-token',
                    url: 'https://github.com/DineshNallaiyaCannyfore/jenkinsDep.git'
            }
        }
        stage('NPM install'){
            steps {
                bat  "npm install"
            }
        }
        stage('Node start'){
            steps{
                bat "npm start"
            }
        }
    }
}