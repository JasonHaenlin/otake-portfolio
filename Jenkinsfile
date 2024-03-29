#!/usr/bin/env groovy

pipeline {
  agent any
  tools {
    nodejs "nodejs"
  }
  options {
    disableConcurrentBuilds()
    timeout(time: 1, unit: 'HOURS')
  }
  stages {
    stage('Checkout') {
      steps {
        echo 'Checkout'
      }
    }
    stage('Install') {
      steps {
        echo 'Install Dependencies'
        sh 'npm install'
      }
    }
    stage('Lint') {
      steps {
        echo 'Typescript Linter'
        sh 'npm run lint'
      }
    }
    stage('Deployment'){
      when {
        expression { env.GIT_BRANCH == 'master' }
      }
      stages {
        stage('Server Deployment') {
          steps {
            echo 'Deployement'
            sh '''
            npm run deploy
            rm -rf /var/www/html/portfolio/*
            mv dist/otakeWebHome/* /var/www/html/portfolio/
            '''
          }
        }
      }
    }
  }

  post {
    always {
      echo 'JENKINS PIPELINE'
    }

    success {
      echo 'JENKINS PIPELINE SUCCESSFUL'
    }

    failure {
      echo 'JENKINS PIPELINE FAILED'
    }

    unstable {
      echo 'JENKINS PIPELINE WAS MARKED AS UNSTABLE'
    }

    changed {
      echo 'JENKINS PIPELINE STATUS HAS CHANGED SINCE LAST EXECUTION'
    }
  }
}
